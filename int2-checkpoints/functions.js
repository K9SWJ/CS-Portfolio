var sketch = function(processing) {
    with(processing) {
        size(1920, 1080);
        background(random(0, 255), random(0, 255), random(0, 255));
        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Below This Line ø¤º°`°º¤ø,¸,ø¤°//


        /* global mouseClicked draw quad ellipse random triangle rect p processing Processing width height size fill strokeWeight stroke xPos yPos line mouseX mouseY background i j p*/
        var mouseX;
        var mouseY;

        function myMouseMove(event) {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        mouseClicked = function() {
            clickEBoi();
        };

        function clickEBoi() {
            background(random(0,255), random(0,255), random(0,255));
            fill(random(0,255), random(0,255), random(0,255));
            strokeWeight(random(0,100));
            stroke(random(0,255),random(0,255),stroke(0,255));
            rect(random(0, 1920), random(0, 1080), random(100,1000), random(100,2000));
            ellipse(random(0, 1920), random(0, 1080), random(100,1000), random(100,2000));
            triangle(random(0, 1920), random(0, 1080), random(0,1920), random(0,1080), random(0,1920), random(0,1080));
            line(random(0,1920),random(0,1080), random(100,1000),random(100,2000));
            quad(random(0,1920),random(0,1080), random(100,1000),random(100,1000), random(0,1920),random(0,1080), random(100,1000),random(100,1000));
        }

        draw = function() {
            
            
            //Uncomment the line below for some epic things
            clickEBoi();

        };



        // °º¤ø,¸¸,ø¤º°`°º¤ø Create Project Above This Line ø¤º°`°º¤ø,¸,ø¤°//   
    }
};
var p = new Processing(document.getElementById("output-canvas"), sketch);