//set webcam
function setup() {
//caputre
video=createCapture(VIDEO);
//SIZZLER
video.size(550,500);
//paint
canvas=createCanvas(550,550);
//x y
canvas.position(560,150);
//pose
posenet=ml5.poseNet(video,modelLoaded);
//gotRoses
posenet.on("pose", gotPoses);
}
function modelLoaded() {
//console
console.log("poseNet is initialized");
}
//gotposes
function gotPoses(results) {
if(results.length>0){
//answers
console.log(results);
//rose
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
//console
console.log("noseX= "+ noseX + "noseY= " + noseY);
//old hairy hands
leftWristX=results[0].pose.leftWrist.x;
rightWristY=results[0].pose.rightWrist.x;;
difference=floor(leftWristX-rightWristX);

//console
console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);
}}
//function draw
function draw() {
//set background color
background("orange");
document.getElementById("name_side").innerHTML="Width & height of  a name= " + difference + "px";
fill("#000000");
stroke("#7F00FF");
name(noseX , noseY , difference);
}
//old hairy nose
noseX=0;
noseY=0;
//old hairy hands
leftWristX=0;
rightWristX=0;
difference=0;