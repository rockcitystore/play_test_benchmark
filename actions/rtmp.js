/**
 * Created by root on 16/10/10.
 */

let rtmp =function(req,res){
    res.render('rtmp')
}

let play =function(req,res){
    res.render('rtmp_play')
}

module.exports = function (app) {
    app.get("/test/rtmp", rtmp);
    app.get("/test/play", play);

};
