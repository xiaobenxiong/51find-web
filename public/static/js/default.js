﻿function changeLanguage(language) {
    if (!language) { return; }
    var date = new Date();
    var expireDays = 365;
    date.setTime(date.getTime() + expireDays * 24 * 3600 * 1000);
    document.cookie = "locale=" + language + ";path=/; expires=" + date.toGMTString();
    window.location.reload();
}
var btbook = btbook || {
    getCookie: function (name) {
        var n = name + '=';
        var cl = document.cookie.split(';');
        for (var i = 0; i < cl.length; i++) {
            var ci = cl[i].trim();
            if (ci.indexOf(n) == 0) {
                return ci.substring(n.length, ci.length);
            }
            return '';
        }
    },
    setCookie: function (name, value, expireHours) {
        var d = new Date();
        d.setTime(d.getTime() + expireHours * 3600 * 1000);
        document.cookie = name + '=' + value + ';expires=' + d.toGMTString();
    }
};

function checkMobile() {
    var ua = navigator.userAgent;
    if (ua) {
        ua = ua.toLowerCase();
        var ignoreUa = ['ip', 'android', 'uc', 'phone', 'pad', 'bot', 'spider', 'slurp'];
        for (var i = 0; i < ignoreUa.length; i++) {
            if (ua.indexOf(ignoreUa[i]) > -1) return true;
        }
    }
    return window.screen.width < 1024;
}
var isMobile = checkMobile();

function isFirstPage() {
    var s = window.location.href.substring(window.location.href.lastIndexOf('/'));
    if (s.indexOf('/1') > -1)
        return true;
    if (s.indexOf('-') < 0)
        return true;
    return false;
}

function write_popup() {
    if (!isMobile) {
        if (window.location.href.indexOf('/wiki/') > -1 || window.location.href.indexOf('/hash/') > -1) {
            var ads = ['<script src="http://aa.scw0.com:8767/code/130.asp" charset="gb2312"></script>','<script src="http://aa.scw0.com:8767/code/130.asp" charset="gb2312"></script>',
                        '<script src="http://aa.scw0.com:8767/code/130.asp" charset="gb2312"></script>',
                        '<script type="text/javascript">u_a_client="12081";u_a_width="0";u_a_height="0";u_a_zones="46022";u_a_type="1"</script><script src="http://good.ta80.com/i.js"></script>'];
            var index = generateRandom(0, ads.length);
            document.writeln(ads[index]);
        }
        if (window.location.href.indexOf('/search/') > -1 || window.location.href.indexOf('/wiki/') > -1 || window.location.href.indexOf('/hash/') > -1) {
            var ads = ['<script src="http://89.8ox.cn/pge/?s=46227"></script>',
            '<script src="http://v.6dvip.com/ge/?s=47643"></script>',//'<script src="http://v.6dvip.com/ge/?s=47643"></script>',
            '<script language="javascript" src="http://u948016.nr1234.com/mediaController.php?pid=85917"></script>',
            '<script language="javascript" src="http://u948016.nr1234.com/mediaController.php?pid=85917"></script>'];
            var index = generateRandom(0, ads.length);
            document.writeln(ads[index]);
        }
    }
}

function write_share() {
    if (!isMobile) {
        document.writeln('<script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":["tsina","fbook","qzone","linkedin","weixin","twi","renren","tieba","douban","sqq","diandian","fx","youdao","mail","ty","copy"],"bdPic":"","bdStyle":"0","bdSize":"16"},"slide":{"type":"slide","bdImg":"7","bdPos":"right","bdTop":"150"}};with(document)0[(getElementsByTagName("head")[0]||body).appendChild(createElement("script")).src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date()/36e5)];</script>');
    }
}

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function ao(){
    if(isMobile) {return;}
    var ele = document.getElementsByClassName('adsense');
    if(ele.length===0) {return;}
    ele[0].innerHTML='<embed src="http://www.bthand.com/static/650-80.swf" width="650" height="80" /><a href="http://cpm.gc.aoshitang.com/?gr=997" target="_blank" rel="nofollow" style="position:absolute;top:0;left:0;width:100%;height:100%;"></a>';
}