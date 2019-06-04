/* global draw random arc ellipse rect triangle noStroke p processing Processing width height size fill strokeWeight stroke xPos yPos line mouseX mouseY background i*/
var mouseX;
var mouseY;
function mousemove(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
}
var sketch = function(processing) {with(processing) {size(1080, 1080);background(0);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

//This draws the snowman, later in the code it will be called to be drawn
function drawSnowManRight() {
        
    //Snowman (Right Snowman)
    //Base
    ellipse(990,990,160,160);
    //Middle
    ellipse(990,920,120,120);
    //Top
    ellipse(990,850,80,80);
    fill(0,0,0);
    //Eyes (Left)
    ellipse(975,830,10,10);
    //Eyes (Right)
    ellipse(1010,830,10,10);
    //Right hand
    line(950,920,930,830);
    //Left hand
    line(1050,920,1080,950);
    
}

function drawSnowManMiddle(){
    //Snowman Dos (Middle)
    fill(255,255,255);
    //Base
    ellipse(500,990,100,100);
    //Middle
    ellipse(500,920,80,80);
    //Top
    ellipse(500,870,60,60);
    //eyes
    fill(0);
    //Eye (left)
    ellipse(480,870,10,10);
    //Eye (right)
    ellipse(500,870,10,10);
}

function drawSnowManLeft(){
     //Snowman Tres (Left)
    fill(255,255,255);
    //Base
    ellipse(100,1020,50,50);
    //Middle
    ellipse(100,1000,40,40);
    //Top
    ellipse(100,980,30,30);
    //Eye
    fill(0);
    //Eye (left)
    ellipse(90,975,10,10);
    //Eye (right)
    ellipse(110,975,10,10);
}

draw = function() {
    //Sets the scene to sad and depressing
    background(0);
    //If aboce the center of the screen then it makes this happen
    if (mouseY>540){
        //Creates rain across the 1080 screen
        for (var i=0; i<1080; i+=75){
            for (var j=0; j<1080; j+=75){
                //Rain
                noStroke();
                fill(0,0,random(204,255));
                rect(i,j,random(0,10),random(0,30));
                //Creates the rain cloud at the top of the screen
                if(mouseY>540){
                    //Only sets it to go across the screen, not down and then reset to run again (Look at rain to see difference)
                    for(var k=0; k<1080; k+=40){
                        //RainCloud
                        fill(71, 68, 65);
                        //Sets so the rain clouds are random sizes 
                        ellipse(k,0,random(0,50),random(0,100));
                    }
                }
            }
            
            //Creates the S in SAD
            fill(192);
            rect(150,500,200,20);
            rect(150,500,20,200);
            rect(150,700,200,20);
            rect(350,700,20,200);
            rect(165,870,200,20);
            
            //Creates the A in SAD
            stroke(192);
            strokeWeight(30);
            line(400,870,450,490);
            line(600,870,450,490);
            line(600,750,400,750);
            
            //Creates the D in SAD
            fill(192);
            arc(650,650,400,400,1.5*Math.PI,2.5*Math.PI);
            fill(0,0,0);
            arc(700,650,200,200,1.5*Math.PI,2.5*Math.PI);
        }
    //Sets it for how often I want the lighting to appear
    if(Math.floor(random(0,30))==0){
        //Sets background to black so it is depressing
        background(255,255,255);
        setTimeout(function(){
            background(0,0,0);
            //States how long the lightning stays on screen (150 ms)
        },150);
    }
    }
    //Makes it so that if the mouse is above 540 then the scene is happy and hopeful
    if (mouseY<540){
        background(102,210,255);
        //Creates the snow across the screen (A lot like the rain)
            for (var i=0; i<1080; i+=60){
            for (var j=0; j<1080; j+=60){
                //Snow
                noStroke();
                fill(255,255,255);
                ellipse(i,j,random(0,10),random(0,20));
                //rect(i,j,50,50);
                }
                }
        
        //Creates the H in HOPE
    fill(250,255,0);
    stroke(50);
    rect(50,600,100,20);
    rect(50,500,20,300);
    rect(150,500,20,300);
    
    //Creates the O in HOPE
    ellipse(300,650,150,150);
    fill(0,0,0);
    ellipse(300,650,30,30);
    
    //Creates the P in HOPE
    fill(250,255,0);
    rect(450,500,20,300);
    arc(470,575,150,150,1.5*Math.PI,2.5*Math.PI);
    fill(0,0,0);
    arc(470,575,70,70,1.5*Math.PI,2.5*Math.PI);
   
    //Creates the E in HOPE
    fill(250,255,0);
    rect(600,500,150,20);
    rect(600,650,150,20);
    rect(600,800,150,20);
    rect(600,500,20,300);

    //SUN (Top Right corner)
    ellipse(1070,0,180,180)
    
    //SNOW
    fill(255,255,255);
    rect(0,1020,1080,160);
    
    //Sets the stroke weight to one so there are lines around the outside of the shape. Line below the stroke weight will call the function to draw after the mouse is y <= 540
    strokeWeight(1);
    drawSnowManRight();
    
    //Calls the middle snowman to be drawn
    strokeWeight(1);
    drawSnowManMiddle();
    
    //Calsl the left snowman to be drawn
   strokeWeight(1);
   drawSnowManLeft();
    
    }
};
    
    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);