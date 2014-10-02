////常量定义
//C_HEIGHT = document.body.clientHeight || window.screen.height;
//C_WIDTH = document.body.clientWidth   || window.screen.width;
//I = 10;
//CENTER_HEIGHT = C_HEIGHT / 2 + 135;
//取得屏幕宽高
function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = window.innerWidth + window.scrollMaxX;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else {
        if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac    
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari    
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer    
        if (document.documentElement.clientWidth) {
            windowWidth = document.documentElement.clientWidth;
        } else {
            windowWidth = self.innerWidth;
        }
        windowHeight = self.innerHeight;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode    
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        } else {
            if (document.body) { // other Explorers    
                windowWidth = document.body.clientWidth;
                windowHeight = document.body.clientHeight;
            }
        }
    }       
    // for small pages with total height less then height of the viewport    
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }    
    // for small pages with total width less then width of the viewport    
    if (xScroll < windowWidth) {
        pageWidth = xScroll;
    } else {
        pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth, pageHeight, windowWidth, windowHeight);
    return arrayPageSize;
}
//常量定义
WINDOWSIZE = getPageSize();
C_HEIGHT = WINDOWSIZE[3];
C_WIDTH = WINDOWSIZE[2];
I = 10;
CENTER_HEIGHT = (C_HEIGHT / 2)-165;
//下移动画
function slideDown(){
    if (avatar = document.getElementById("avatar")) {
        var boolean = avatar.setAttribute("style", "top:0");
        timer = setInterval(function () {
            if (I < CENTER_HEIGHT) {
                I++;
                avatar.style.top = I + "px";
            } else {
                clearInterval(timer);
            }
        }, 0.1);
    } else alert("false");
}
//fadein动画    
function fadeIn(ele, duration, callback) {
    if(ele.style.opacity === "") {
        ele.style.opacity = 0;
    }
    if(ele.style.display === "none" || ele.style.display === "") {
        ele.style.display = "block";
    }
                   
    var interval_fadein = setInterval(function() {
        if(ele.style.opacity < 1) {
            ele.style.opacity = parseFloat(ele.style.opacity) + 0.01;
        }
        else {
            clearInterval(interval_fadein);
            if(typeof callback !== "undefined") {
                callback.call();
            }
        }
    }, duration / 100);
}

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
 
//全屏代码获取
function fullScreen(){
window.addEventListener('DOMContentLoaded', function() {
    var page = document.getElementById('page'),
        nav = window.navigator,
        ua = nav.userAgent,
        isFullScreen = nav.standalone;  
     if (ua.indexOf('Android') !== -1) {
        // 56对应的是Android Browser导航栏的高度
        page.style.height = window.innerHeight + 56 + 'px';
    } else if (/iPhone|iPod|iPad/.test(ua)) {
        // 60对应的是Safari导航栏的高度
        page.style.height = window.innerHeight + (isFullScreen ? 0 : 60) + 'px'
    }
    setTimeout(scrollTo, 0, 0, 1);
}, false);
}
addLoadEvent(fullScreen());
addLoadEvent(slideDown());
addLoadEvent(fadeIn(document.getElementById("avatar"),1000));