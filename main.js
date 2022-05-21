status="";

object="";

function preload(){
img=loadImage("baby.jpg");
}

function setup(){
canvas=createCanvas(500,300);
canvas.position(430,180);
}

function draw(){
    image(video, 0, 0, 380,380);
    if (status != "") {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video,gotResult);
       for (var i = 0; i < object.length; i++) {
           document.getElementById("status").innerHTML = "Status : Object Detected";
           document.getElementById("baby").innerHTML="Baby Found";
            fill(r,g,b);
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15); noFill(); 
           stroke(r,g,b); rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
   }
}

function modelLoaded() {
    console.log("Cocossd model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else { console.log(results); }
}