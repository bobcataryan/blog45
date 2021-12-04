x=0;
y=0;
draw_circle="";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function listen(){
    document.getElementById("status").innerHTML="Computer is listening, please speak";
    recognition.start();

}

recognition.onresult= function(event){
console.log(event);

var content= event.results[0][0].transcript;

document.getElementById("status").innerHTML= "The speech has been recognized to be:  " +content;
if (content== 'Circle'){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Circle is being drawn.";
    draw_circle="set";
}
if (content== 'rectangle'){
    x= Math.floor(Math.random()*900);
    y= Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="rectangle is being drawn.";
    draw_rect="set";
}
}

function setup(){
    canvas=createCanvas(900,600);
}

function draw(){
    if (draw_circle == 'set'){
        radius= Math.floor(Math.random()*100);
      circle( x, y, radius);
    draw_circle="";
    }
    if (draw_rect == 'set'){
        rect(x,y,70,50);
        draw_rect="";
    }
}