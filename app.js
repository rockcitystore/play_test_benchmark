/**
 * 德基管理后台
 *
 * Created by leovs on 2015/12/12 0012.
 */
'use strict';


var express = require('express'), fs = require('fs');
var app = express(), cookieParser = require('cookie-parser'), bodyParser = require('body-parser');
var logger = require("./utils/logger").getLogger('app');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text({type: 'text/xml'}));
app.use(bodyParser.text({type: 'text/plain'}));


app.set('view engine', 'ejs');
app.set('views', 'assets/views');
app.use(express.static(__dirname + '/assets'));


app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

var mypath ='./actions';

(function (path) {
    fs.readdir(path, function (err, files) {
        if (!err) {
            files.forEach(function (item) {
                var tmpPath = path + '/' + item;
                fs.stat(tmpPath, function (err1, stats) {
                    if (!err1 && !stats.isDirectory()) {
                        logger.info("load action :" + tmpPath);
                        require(tmpPath)(app);
                    }
                })
            });
        }
    });
})(mypath);


var server = app.listen(97, function () {
    logger.info('listening on port %s', server.address().port);
})


var io = require('socket.io')(server);
io.sockets.on('connection', function (socket) {
    logger.debug(socket.handshake.address + ' has connected');
    socket.emit('socket connection recevied', socket.handshake.address + ' connection recevied');
    socket.on('disconnect', function () {
        logger.debug(socket.handshake.address + ' has disconnected');
    });
});

module.exports = io;

//
// var swfBuild = require('swf-build');
//
// swfBuild('./test/main.as',function(err, stdout, stderr){
//     // output './test/main.swf'
//     logger.debug('swfBuild done');
// });