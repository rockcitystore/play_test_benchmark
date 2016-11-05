/**
 * Created by root on 16/6/9.
 */
"use strict";

var Promise = require('bluebird');
var constant = require("../utils/constant.js");
var logger = require("../utils/logger").getLogger('socketio');
var io =require('../app');
var net =require('net');

let socketioView =(req,res) =>{
    res.render('socketio')
}

let chat = (req, res) => {
    let client = net.connect({host: 'wss://echo.websocket.org'}, () => {
        logger.log('connected to server!');
        client.write(handle({
            msgType: 0
            , token: '9dsada'
            , chatType: 0
            , roomId: 1
            , userType: 1
            , name: '管理员'
            , photoUrl: ''
        }));
    });

    client.on('data', (data) => {
        let headerLength = data.slice(0, 4).readInt8Range(0,3);
        let cb =JSON.parse(data.slice(4,headerLength+4).toString());
        if(cb.msgType !== 1) io.emit('begin_chat',cb);
        tick(client);
    });

    client.on('end', () => {
        console.log('disconnected from server');
    });
};





Buffer.prototype.readInt8Range = function (start, end) {
    start = start >>> 0;
    end = end >>> 0;
    var tem = [];
    for (; start <= end; start++) {
        var val = this[start];
        if(this[start] != 0)
            tem.push(!(val & 0x80) ? val : (0xff - val + 1) * -1);
    }
    return Number(tem.join(''));
};


var tick =(client)=>{
    setTimeout(()=>{
        client.write(handle({
            msgType: 1
        }));
    },3000);
}


var handle = (str)=>{
    let data = new Buffer(JSON.stringify(str));//生成二进制报文体
    let length = new Buffer(1);
    length.writeInt8(data.length);//写入报文体长度
    let zero = new Buffer(1);
    zero.writeInt8(0);//用于补足四位
    let tl = zero.length + zero.length + zero.length + length.length + data.length;
    data = Buffer.concat([zero, zero, zero, length, data], tl);//连接报文
    return data;
}

module.exports = function (app) {
    app.get("/test/socket/view", socketioView);
    app.get("/test/socket/io", chat);

};
