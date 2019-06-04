/* global draw ellipse rect triangl p processing Processing width height size fill strokeWeight stroke xPos yPos line mouseX mouseY background i*/
var mouseX;
var mouseY;
function mousemove(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
}
var sketch = function(processing) {with(processing) {size(800, 800);background(0,0,0);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

draw = function() {
    
    //Top Left
    if(mouseX < 400 && mouseY < 400) {
        fill(255,0,0);
        background(21, 0, 255);
        ellipse(mouseX,mouseY,60,60);
    }
    
    //Bottom right
    if(mouseX > 400 && mouseY > 400) {
        fill(21, 0, 255);
        background(255,0,0);
        ellipse(mouseX,mouseY,60,60);

    }
    
    //Top Right
    if(mouseY < 400 && mouseX > 400){
        fill(250, 255, 0);
        background(33, 255, 0);
        rect(mouseX,mouseY,60,60);

    }
    
    //Bottom left
    if(mouseY > 400 && mouseX < 400){
        fill(33, 255, 0);
        background(250, 255, 0);
        rect(mouseX,mouseY,60,60);
    }
    
    //Creates the 'borders' so you can see where it is
    line(400,0,400,800);
    line(0,400,1600,400);
    
    
};
    
    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
