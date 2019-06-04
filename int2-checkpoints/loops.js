/* global draw ellipse random rect p processing Processing width height size fill strokeWeight stroke xPos yPos line mouseX mouseY background i j p*/
var mouseX;
var mouseY;
function mousemove(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
}
var sketch = function(processing) {with(processing) {size(1920, 1080);background(random(0,255),random(0,255),random(0,255));
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


draw = function() {

//i states where to start and then j goes down the computer screen
for(var i=0; i<960; i+=75){
for(var j=0; j<1080; j+=75){
    fill(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(0,10));
    stroke(random(0,255));
    ellipse(i,j,random(10,65),(random(10,65))); 
    
    
}
}

// make sure if want to make split screen have i be half of what the computer screen is
for (var i=1040; i<1920; i+=70){
for(var j=0; j<1080; j+=70){
    fill(random(0,255),random(0,255),random(0,255));
    strokeWeight(random(0,10));
    stroke(random(0,255));
    rect(i,j,random(10,65),(random(10,65)));   
}
}

};
    
    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
