
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(530,160);
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",Poses);
}
function draw(){
    image(video,0,0,300,300);
}
function Poses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x =",results[0].pose.nose.x);
        console.log("nose y =",results[0].pose.nose.y);
    }
}
function modelLoaded(){
    console.log(modelLoaded);
}