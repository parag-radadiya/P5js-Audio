

var audio = document.getElementById("myaudio");

var context = new AudioContext();
var src = context.createMediaElementSource(audio);
$('#avtar').change(function(e){

    var fileName = e.target.files[0].name;

    alert('The file "' + fileName +  '" has been selected.');

});

var analyser = context.createAnalyser();
src.connect(analyser);
analyser.connect(context.destination);
analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;

var dataArray = new Uint8Array(bufferLength);
var direction = new Int32Array(bufferLength); 
var last=0;
function setup() {
    createCanvas(screen.width, screen.height);
  
}
var first=true;
function draw() {
    background('red');
    tint(255,100);   
    analyser.getByteFrequencyData(dataArray);
  
    for (var i = 0; i < bufferLength; i++) {


        if(dataArray[i]>70){

           
            tint(20,100);
            background(255,dataArray[i],dataArray[i]);
            //beams(dataArray[i]+5);
            fill(0, 255, 0);
            ellipse(screen.width/2,screen.height/2,2*dataArray[i]+10, 2*dataArray[i]+10);
            tint(100,100);
            fill(0,0 , 255);
            ellipse(screen.width/2,screen.height/2,2*dataArray[i]+5, 2*dataArray[i]+5);
            tint(100,100);
            fill(255, 204, 0);
            ellipse(screen.width/2,screen.height/2,2*dataArray[i], 2*dataArray[i]);
            
            
            
        }
        
  
            

     
    }
    

 



/*



var angleD=0;
var avg=0;
var avgx=0;
af0f=true;
a180f=true;
a270f=true;
a360f=true;
var chu=100;
for (var i = 0; i < bufferLength/2; i++) {
    angleD += 6;
    avg +=dataArray[i];
    avgx +=dataArray[i];
    if(angleD>90 && angleD <=180){
        if(a180f){
        endShape();
        fill('blue');
        stroke(0);
        beginShape();
        a180f=false;
        }
        if(i%2==0){
            var x=(((avgx/2)))*Math.cos((angleD*Math.PI)/180);
            var y=(((avgx/2)))*Math.sin((angleD*Math.PI)/180);
            curveVertex((screen.width/2)+x-chu,(screen.height/2)+y-chu);
            avgx=0;
        }
    }else if(angleD <=90){
        if(af0f){
        fill('yellow');
        stroke(0);
        beginShape();
        af0f=false;
        }
        if(i%2==0){
            var x=(((avgx/2)))*Math.cos((angleD*Math.PI)/180);
            var y=(((avgx/2)))*Math.sin((angleD*Math.PI)/180);
            curveVertex((screen.width/2)+x-chu,(screen.height/2)+y-chu);
            avgx=0;
        }
    }else if(angleD >180 && angleD<=270){
        endShape();
        if(a270f){
            fill('green');
            stroke(0);
            beginShape();
            a270f=false;
            }
            if(i%2==0){
                var x=(((avgx/2)))*Math.cos((angleD*Math.PI)/180);
                var y=(((avgx/2)))*Math.sin((angleD*Math.PI)/180);
                curveVertex((screen.width/2)+x-chu,(screen.height/2)+y-chu);
                avgx=0;
            }
    }else{
        endShape();
        if(a360f){
            fill(255);
            stroke(0);
            beginShape();
            a360f=false;
            }
            if(i%2==0){
                var x=(((avgx/2)))*Math.cos((angleD*Math.PI)/180);
                var y=(((avgx/2)))*Math.sin((angleD*Math.PI)/180);
                curveVertex((screen.width/2)+x-chu,(screen.height/2)+y-chu);
                avgx=0;
            }
    }
  


    
    
    
}

endShape();
*/


}
/*
function beams(radiii){
    var angleD=-90;
    for(var b = 0; b < bufferLength; b++){
        angleD += 2.8;
        var x=(radiii+(dataArray[b]/5))*Math.cos((angleD*Math.PI)/180);
        var y=(radiii+(dataArray[b]/5))*Math.sin((angleD*Math.PI)/180);
        stroke('blue');
        line((screen.width/2), (screen.height/2), x+(screen.width/2), y+(screen.height/2));
    }
}
*/