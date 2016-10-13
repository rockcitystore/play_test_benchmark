
require.config({
    paths: {
        "rtmp-streamer": "rtmp-streamer"
    }
});

require(["rtmp-streamer"], function (RtmpStreamer) {

    var getUrl = function () {
        return document.getElementById('url').value;
    };

    var getName = function () {
        return document.getElementById('stream-name').value;
    };

    var streamer = new RtmpStreamer(document.getElementById('rtmp-streamer'));
    var player = new RtmpStreamer(document.getElementById('rtmp-player'));
    // streamer.setScreenPosition(80, 60);
    // streamer.setScreenSize(640,480);//视频尺寸
    // streamer.setCamMode(640,480,15);//传输尺寸

    document.getElementById("play").addEventListener("click", function () {
        player.play('rtmp://video-center.alivecdn.com/deji/46333?vhost=video.cdn.dejionline.com', '');
    });

    document.getElementById("publish").addEventListener("click", function () {
        streamer.publish('rtmp://video-center.alivecdn.com/deji', '46333?vhost=video.cdn.dejionline.com');
    });

    document.getElementById("streamer-disconnect").addEventListener("click", function () {
        streamer.disconnect();
    });

    document.getElementById("player-disconnect").addEventListener("click", function () {
        player.disconnect();
    });

});
