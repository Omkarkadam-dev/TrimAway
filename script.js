var ImgBox = document.querySelector(".imgbox");
var ImgWrap = document.querySelector(".imgwrap");
var OriginalImg = document.querySelector(".originalimg");

OriginalImg.style.width = ImgBox.offsetWidth + "px";

var LeftSpace = ImgBox.offsetLeft;

ImgBox.onmousemove = function (e) {
    var BoxWidth = (e.pageX - LeftSpace) + "px";
    ImgWrap.style.width = BoxWidth;
}

