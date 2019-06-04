/* global draw ellipse rect p processing width height size fill strokeWeight stroke xPos yPos line c*/
var sketch = function(processing) {with(processing) {size(400, 400);background(255);
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//

//Sets the X position of the first ellispse (Top Left cirlce)
var xPos = 0;

//Sets the position of the ellipse's Y position (Top left cirlce)
var yPos = 0;

//Sets the position of the ellipse's X position for the second cirlce (TOP RIGHT cirlce)
var xPos2 = 400;

//Sets the position of the ellipse's Y position for the second cirlce (TOP RIGHT cirlce)
var yPos2 = 0;

draw = function() {

//Creates a cirlce in the top left corner of the screen and creates a radius of 30
ellipse(xPos, yPos, 30, 30);

//Changes the X position of the circle by +5
xPos +=5;

//Changes the Y position of the circle by +5
yPos +=5;


stroke(127, 255, 0, 1);

//Creates a thicker or slimmer line around the cirlce
strokeWeight(100);
line (20,20,20,20);

//Changes color of the cirlce using RGB color picker
fill(98, 135, 193);


//SECOND Ellipse


//Creates a cirlce in the top left corner of the screen and creates a radius of 30
ellipse(xPos2, yPos2, 30, 30);

//Changes the X position of the circle by -10
xPos2 -=10;

//Changes the Y position of the circle by -10
yPos2 +=10;

stroke(127, 255, 0, 1);

//Creates a thicker or slimmer line around the cirlce
strokeWeight(100);
line (20,20,20,20);

//Changes color of the cirlce using RGB color picker
fill(98, 135, 193);

};
    
    
    
// °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
}};var p = new Processing(document.getElementById("output-canvas"), sketch);
