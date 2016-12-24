$(function() {
    var snowCanvas = $('<canvas>');
    snowCanvas.attr({"class": "christmas-canvas"});
    $("body").append(snowCanvas);
    (function snowing(b) {
        var a = b.getContext("2d"), d = window.innerWidth, c = window.innerHeight;
        b.width = d;
        b.height = c;
        for(var e = [], b = 0;b < 70;b++) {
            e.push({x:Math.random() * d, y:Math.random() * c, r:Math.random() * 4 + 1, d:Math.random() * 70})
        }
        var h = 0;
        window.intervral4Christmas = setInterval(function() {
            a.clearRect(0, 0, d, c);
            a.fillStyle = "rgba(255, 255, 255, 0.6)";
            a.shadowBlur = 5;
            a.shadowColor = "rgba(255, 255, 255, 0.9)";
            a.beginPath();
            for(var b = 0;b < 70;b++) {
                var f = e[b];
                a.moveTo(f.x, f.y);
                a.arc(f.x, f.y, f.r, 0, Math.PI * 2, !0)
            }
            a.fill();
            h += 0.01;
            for(b = 0;b < 70;b++) {
                if(f = e[b], f.y += Math.cos(h + f.d) + 1 + f.r / 2, f.x += Math.sin(h) * 2, f.x > d + 5 || f.x < -5 || f.y > c) {
                    e[b] = b % 3 > 0 ? {x:Math.random() * d, y:-10, r:f.r, d:f.d} : Math.sin(h) > 0 ? {x:-5, y:Math.random() * c, r:f.r, d:f.d} : {x:d + 5, y:Math.random() * c, r:f.r, d:f.d}
                }
            }
        }, 70)
    })(snowCanvas.get(0));
    
    var musicCtrl = $("<div>");
    musicCtrl.attr({
        "class": "christmas-MusicCtrl",
        "date-playCtrl": "pause"
    });
    $("body").append(musicCtrl);
    var ChristmasMusic=$("<audio>");
    ChristmasMusic.attr({
        "src": "http://oipeizjgy.bkt.clouddn.com/blog/music/%E3%83%9B%E3%83%BC%E3%83%AA%E3%83%BC%E3%83%8A%E3%82%A4%E3%83%88%20%28HOLY%20NIGHT%29.mp3",
        "loop": "loop",
        "volume": 0.3
    });  
    (function ctrlAssociate(musicCtrl, music) {
        musicCtrl.text("暂停播放音乐");
        musicCtrl.show();
        music.play();
        musicCtrl.click(function() {
            if (musicCtrl.attr("date-playCtrl")=="pause") {
                music.pause();
                musicCtrl.text("继续播放音乐");
                musicCtrl.attr("date-playCtrl","play");
            }else{
                music.play();
                musicCtrl.text("暂停播放音乐");
                musicCtrl.attr("date-playCtrl","pause");
            };
        });
    })(musicCtrl, ChristmasMusic.get(0));
});
