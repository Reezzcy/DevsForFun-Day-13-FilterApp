var image;
var canvas1;
var canvas2;

function upload(){
    canvas1 = document.getElementById("canvas1");
    var imgFile = document.getElementById("fileInput");
    image = new SimpleImage(imgFile);
    image.drawTo(canvas1);
}

function purpleFilter(){
    var purpleImage = image;
    canvas2 = document.getElementById("canvas2");
    for (var pixel of purpleImage.values()){
        pixel.setGreen(0);
    }
    purpleImage.drawTo(canvas2);
}

function GreyFilter(){
    var greyImage = image;
    canvas2 = document.getElementById("canvas2");
    for (var pixel of greyImage.values()){
        var avgRGB = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setGreen(avgRGB);
        pixel.setRed(avgRGB);
        pixel.setBlue(avgRGB);
    }
    greyImage.drawTo(canvas2);
}
