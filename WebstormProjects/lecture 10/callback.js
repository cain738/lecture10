
function ImageProcessing() {

    getImage(function(image){ // function is passed as a parameter. Here, we defined the function and saved it for future execution
        enhanceImage(image, function (enhImage) {
            console.log("Enhancing image");
            console.log("Optimizing the image");
            console.log("Enhanced image is:" + enhImage);
            OptimizeImage(enhImage,function (img) {
                console.log(img);
            })
        });
    })
}
function getImage(cb){
    setTimeout(function(){
        console.log("Getting the image");
        let img='abc.jpeg';
        cb(img);// the function is called when it recieves a parameter.
    },1000)
}
function enhanceImage(img,cb) {
    console.log("I can enhance the image" + img);
    let image= img + "enhance";
    cb(image);
}
function OptimizeImage(enhImage,cb){
    setTimeout(function () {
        console.log("Getting the image");
        let optimisedImage= enhImage + "Optimized";
        cb(optimisedImage);
    },1900)
}
ImageProcessing();