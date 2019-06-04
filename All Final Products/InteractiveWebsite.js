// Getting the Sports catagory from the HTML
var Sports = document.getElementById("Sports");
// Geting the Food catagory from the HTML
var Food = document.getElementById("Food");
// Getting the Video Game catagory from the HTML
var VideoGames = document.getElementById("VideoGames");

var myButtons;

var rand;

var randElement;

var submitSports;

var submitFood;

var submitVideoGames;


var myArr = [];

// allows the user to input a color value to change the background
var newBGColor = document.getElementById("text");
var colorChangeButton = document.getElementById("colorChangeButton");
var button = document.getElementById("button");
button.addEventListener("click", function() {
        document.body.style.backgroundColor = newBGColor.value;
});

// Event listener for the sports catagory to be clicked on the HTML
Sports.addEventListener("click", function() {
        // Letting user change the background color
        document.write("<input id = \"text\" type=\"text\" name=\"color_change\"/>");
        document.write("<button id = \"button\" type=\"button\">Change color</button>");
        
        // This is the code to actually have the background change color
        var newBGColor = document.getElementById("text");
        var colorChangeButton = document.getElementById("colorChangeButton");
        var button = document.getElementById("button");
        // Makes the button look for a click after the color is put into the input so the background color can change
        button.addEventListener("click", function() {
        document.body.style.backgroundColor = newBGColor.value;
});
// Break line so that the buttons aren't next to each other
document.write("<br>");

        // alert("Sports has been clicked");
        // Creates the top 3 images
        document.write("<button class='myButtons' id=\"sportsButton0\"><img src='https://plus.wp-002.services.golf/wood-wind/wp-content/uploads/sites/23/2019/01/golf.jpg' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"sportsButton1\"><img src='https://i.kinja-img.com/gawker-media/image/upload/s--M4yNO3Ve--/c_scale,f_auto,fl_progressive,q_80,w_800/ikjzvdwuxv7zvcdxfcav.jpg' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"sportsButton2\"><img src='https://m.media-amazon.com/images/S/aplus-media/vc/6b8776c4-606e-49d6-a226-b426aef94799.jpg' height= '200px' width = '250px'></button>");
        // Creates the spacing between each image so that these two images are below the top 2
        document.write("<br>");
        // Creates the 4th image
        document.write("<button class='myButtons'  id=\"sportsButton3\"><img src='https://www.sgvtribune.com/wp-content/uploads/2019/02/thinkstockphotos-655660386-1.jpg?w=525' height= '200px' width = '250px'></button>");
        // Puts the select inbetween the two images
        document.write("<select id=\"SelectSports\">");
        // The options in the middle of each catagory so the user can get the answer right or wrong
        document.write("<option id =\"sportsOption1\">Golf</option>");
        document.write("<option id =\"sportsOption2\">Hockey</option>");
        document.write("<option id =\"sportsOption3\">Baseball</option>");
        document.write("<option id =\"sportsOption4\">Soccer</option>");
        document.write("<option id =\"sportsOption5\">Football</option>");
        document.write("<option id =\"sportsOption6\">Swimming</option>");
        document.write("<option id =\"sportsOption7\">Boxing</option>");
        document.write("<option id =\"sportsOption8\">Tennis</option>");
        document.write("</select>");
        // Creates the 5th image
        document.write("<button class='myButtons' height= '200px' width = '250px'  id=\"sportsButton4\"><img src='https://thehill.com/sites/default/files/styles/thumb_small_article/public/hockeypucks_112818_getty.jpg?itok=-AcZeDhs' height= '200px' width = '250px'></button>");
        document.write("<br>");
        // creates the last 3 images
        document.write("<button class='myButtons' height= '200px' width = '250px' id=\"sportsButton5\"><img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Closeup_of_a_tennis_ball_%282%29.jpg' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons' height= '200px' width = '250px' id=\"sportsButton6\"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tR3y9HrLky8G2KbRL3HEeGvK1mN9ZFspz6oKWan9ZAWCl2AC' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons' height= '200px' width = '250px' id=\"sportsButton7\"><img src='https://d1vm3mict4s80n.cloudfront.net/xz/p/products/213/4884/87311/820px.jpg' height= '200px' width = '250px'></button>");
        document.write("<br>");
        // Submit button at the bottom of the bottom 3 images
        document.write("<button class='myButtons'  id = \"submitSports\">Submit</button>");
        // Puts the back button below the submit button
        document.write("<br>");
        document.write("<button class ='myButtons' id = \"back\">Back</button>");
        // Finds the submitSports ID to then tell it what to do later
        submitSports = document.getElementById("submitSports");
        var back = document.getElementById("back");
        
        // Looks for the back button to be clicked then reloads the page
        back.addEventListener("click", function(){
                /* global location */
             location.reload();
        });

        // Selects a random sport image
        var SelectSports = document.getElementById("SelectSports");
        // I set the style width so that each one was a good size
        SelectSports.style.width = '275px';
        
        // Looks to check if what was submited was correct
        submitSports.addEventListener("click", function(){
                switch(rand){
                 case 0:
                        //  alert("Golf");
                        // If the image was golf and the user chose Golf an alert says they are correct and makes the border color grey so it no longer looks selected
                         if (SelectSports.value == "Golf"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                // If the image was golf and the user chooses something else then an alert says they are wrong and the user needs to choose again
                                alert("Incorrect!");
                        }
                         break;
                case 1:
                        // See Golf
                        // alert("Soccer");
                        if (SelectSports.value == "Soccer"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 2:
                        // See Golf 
                        // alert("Football");
                        if (SelectSports.value == "Football"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 3:
                        // See Golf
                        // alert("Baseball");
                        if (SelectSports.value == "Baseball"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 4:
                        // see Golf
                        // alert("Hockey");
                        if (SelectSports.value == "Hockey"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 5:
                        // See Golf
                        // alert("Tennis");
                        if (SelectSports.value == "Tennis"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 6:
                        // See Golf
                        // alert("Boxing");
                        if (SelectSports.value == "Boxing"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 7:
                        // See Golf
                        // alert("Swimming");
                        if (SelectSports.value == "Swimming"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                 default:
                        alert("default");
                }
        });

// An array to put all my buttons with the class name buttons into so they are easier to find
        myArr = document.getElementsByClassName("myButtons");

// Selects a random image
function SelectrandElement(){

// Chooses a random integer between 0 - 7 
rand = Math.floor(Math.random() * 8);

// Find the value then assign it to the image that equals the value
randElement = document.getElementById("sportsButton" + rand);

// Changes the border color so that the user can see which image is selected
randElement.style.border = "10px solid green";

}

SelectrandElement();

});

// Looks for the Food catagory to be selected
Food.addEventListener("click", function() {
                // Letting user change the background color
                document.write("<input id = \"text\" type=\"text\" name=\"color_change\"/>");
        document.write("<button id = \"button\" type=\"button\">Change color</button>");
        
        var newBGColor = document.getElementById("text");
        var colorChangeButton = document.getElementById("colorChangeButton");
        var button = document.getElementById("button");
        // Makes the button look for a click after the color is put into the input so the background color can change
        button.addEventListener("click", function() {
        document.body.style.backgroundColor = newBGColor.value;
});

document.write("<br>");
        // alert("Fast Food");
        // Creates the top 3 images 
        document.write("<button class='myButtons'  id=\"FoodButton0\"><img src='https://www.sciencechasers.com/wp-content/uploads/2019/01/Fastfoodlogo-1.jpg' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"FoodButton1\"><img src='https://t6.rbxcdn.com/60ef300969bc41e0b43d72a79630be90' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"FoodButton2\"><img src='http://1.bp.blogspot.com/-vY1JYZlkkco/TpXrjGLLq6I/AAAAAAAADs4/YSDKPw8-qDQ/s1600/SoGood_logo_kfc+red.jpg' height= '200px' width = '250px'></button>");
        // Breaks the line so that the rest of the images appear below the top 3
        document.write("<br>");
        // Creates the 4 image
        document.write("<button class='myButtons'  id=\"FoodButton3\"><img src='https://www.wendys.com/themes/custom/wendys_main/logo.svg' height= '200px' width = '250px'></button>");
        //creates the food selections
        document.write("<select id=\"SelectFood\">");
        // Creates the different options inside the food selection
        document.write("<option id =\"FoodOption1\">Subway</option>");
        document.write("<option id =\"FoodOption2\">Dominos</option>");
        document.write("<option id =\"FoodOption3\">Wendys</option>");
        document.write("<option id =\"FoodOption4\">Taco Bell</option>");
        document.write("<option id =\"FoodOption5\">Dairy Queen</option>");
        document.write("<option id =\"FoodOption6\">McDonalds</option>");
        document.write("<option id =\"FoodOption7\">KFC</option>");
        document.write("<option id =\"FoodOption8\">Dunkin Donuts</option>");
        document.write("</select>");
        // Creates the 5 image
        document.write("<button class='myButtons'  id=\"FoodButton4\"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png' height= '200px' width = '250px'></button>");
        // Breaks Line so the bottom 3 images appear below the middle 
        document.write("<br>");
        // Creates the bottom 3 images
        document.write("<button class='myButtons'  id=\"FoodButton5\"><img src='https://i.pinimg.com/originals/c3/0f/94/c30f94597b2c94ba91256413a1259266.jpg' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"FoodButton6\"><img src='http://www.itouchapps.net/images/guess-the-logos-game/dairyqueen1.jpg' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"FoodButton7\"><img src='https://www.itsnicethat.com/system/files/082016/57a8aeb97fa44c98d1002108/images_slice_large/Subway_new-icon_itsnicethat.jpg?1470672577' height= '200px' width = '250px'></button>");
        document.write("<br>");
        // Creates the submit button
        document.write("<button class='myButtons'  id = \"submitFood\" type=\"button\">Submit</button>");
        document.write("<br>");
        // Creates the back button
        document.write("<button class ='myButtons' id = \"back\">Back</button>");
        // Looks for an element with an Id of "submitFood"
        submitFood = document.getElementById("submitFood");
        // Looks for an element with an Id of "back"
         var back = document.getElementById("back");
        
        // After back is clicked then the page is reloaded
        back.addEventListener("click", function(){
                /* global location */
             location.reload();
        });
        
        // Finds an element with the Id of SelectFood
        var SelectFood = document.getElementById("SelectFood");
        SelectFood.style.width = '275px';
        
        // After the submit button is clicked inside the food catagory checks if the answer is correct
        submitFood.addEventListener("click", function(){
                switch(rand){
                 case 0:
                        //  If the image that is green is McDonalds and the user selects the options called McDonalds then send an alert that says "Correct" and change the border color so it not longer is green and looks selected
                         if (SelectFood.value == "McDonalds"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                // Else it is wrong because the image selected was not McDonalds and send an alert that say "Incorrect!"
                                alert("Incorrect!");
                        }
                         break;
                case 1:
                        // See McDonalds
                        if (SelectFood.value == "Dunkin Donuts"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 2:
                        // See McDonalds
                        if (SelectFood.value == "KFC"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 3:
                        // See McDonalds
                        if (SelectFood.value == "Wendys"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 4:
                        // See McDonalds
                        if (SelectFood.value == "Dominos"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 5:
                        // See McDonalds
                        if (SelectFood.value == "Taco Bell"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 6:
                        // See McDonalds
                        if (SelectFood.value == "Dairy Queen"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 7:
                        // See McDonalds
                        if (SelectFood.value == "Subway"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                 default:
                        alert("default");
                }
        });

        // Creates an array for all my buttons with the class name button
        myArr = document.getElementsByClassName("myButtons");

// Selects a random image and does the following function
function SelectrandElement(){

// Chooses a random integer between 0-7 because there are 8 numbers and 8 options
rand = Math.floor(Math.random() * 8);

randElement = document.getElementById("FoodButton" + rand);

// Changes the border color of the selected image to green so the user can easily see which image is selected
randElement.style.border = "10px solid green";

}

SelectrandElement();

});

// looks for VideoGames in HTML to be clicked then does the following
VideoGames.addEventListener("click", function() {
        // Creates an input so and button so the user can change the color
                document.write("<input id = \"text\" type=\"text\" name=\"color_change\"/>");
        document.write("<button id = \"button\" type=\"button\">Change color</button>");
        
        // Changes the color of the background for the user after the user inputs a color into the input tag at the top 
        var newBGColor = document.getElementById("text");
        var colorChangeButton = document.getElementById("colorChangeButton");
        var button = document.getElementById("button");
        button.addEventListener("click", function() {
        document.body.style.backgroundColor = newBGColor.value;
});

// Breaks the line so everything is underneath and not next to the last button (color change)
document.write("<br>");
        // alert("Video Games");
        // Creates the top 3 images
        document.write("<button class='myButtons'  id=\"VideoGamesButton0\"><img src='https://steamuserimages-a.akamaihd.net/ugc/2438013375545542318/66E1CB5FBE2D04901F697975545A88D6B412192C/' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"VideoGamesButton1\"><img src='https://cdn02.nintendo-europe.com/media/images/08_content_images/games_6/nintendo_switch_7/nswitch_easportsfifa19_1/CI_NSwitch_EASportsFifa19_UltimateTeamGoldBronzeSilver_image950w.png' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"VideoGamesButton2\"><img src='https://images-na.ssl-images-amazon.com/images/I/41f4npQhADL._SX425_.jpg' height= '200px' width = '250px'></button>");
        // Breaks the line so all images appear below the top 3 and create a box
        document.write("<br>");
        // Creates the 4 image
        document.write("<button class='myButtons'  id=\"VideoGamesButton3\"><img src='https://i.pinimg.com/originals/30/0e/58/300e58c8416a68dcfcf1761501348243.jpg' height= '200px' width = '250px'></button>");
        // Creates the selections for the catagory in the middle of the 2 images
        document.write("<select id=\"SelectVideoGames\">");
        // Creates the options that the user can guess for the logo
        document.write("<option id =\"VideoGamesOption1\">Destiny</option>");
        document.write("<option id =\"VideoGamesOption2\">Pac man</option>");
        document.write("<option id =\"VideoGamesOption3\">League of Legends</option>");
        document.write("<option id =\"VideoGamesOption4\">Super Smash Bros</option>");
        document.write("<option id =\"VideoGamesOption5\">Fortnite</option>");
        document.write("<option id =\"VideoGamesOption6\">Fifa</option>");
        document.write("<option id =\"VideoGamesOption7\">Minecraft</option>");
        document.write("<option id =\"VideoGamesOption8\">Overwatch</option>");
        document.write("</select>");
        // Creates the 5 image
        document.write("<button class='myButtons'  id=\"VideoGamesButton4\"><img src='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c2f1.png' height= '200px' width = '250px'></button>");
        // Breaks the line so the images appear below the top buttons
        document.write("<br>");
        // Creates the bottom 3 images
        document.write("<button class='myButtons'  id=\"VideoGamesButton5\"><img src='https://i.pinimg.com/originals/64/48/dd/6448ddbd782a0580e55173497b9fa162.png' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"VideoGamesButton6\"><img src='https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/original/products/95009/190245/Super-Smash-Bros-Logo-Decal-Sticker__49344.1511155163.jpg?c=2&imbypass=on' height= '200px' width = '250px'></button>");
        document.write("<button class='myButtons'  id=\"VideoGamesButton7\"><img src='https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/original/products/80989/178255/Destiny-Logo-Decal-Sticker__30465.1511147127.jpg?c=2&imbypass=on' height= '200px' width = '250px'></button>");
        document.write("<br>");
        // Creates the submit button
        document.write("<button class='myButtons'  id = \"submitVideoGames\" type=\"button\">Submit</button>");
        // Looks for an element with the id "submitVideoGames"
        var submitVideoGames = document.getElementById("submitVideoGames");
        document.write("<br>");
        // Creates a back button with the id "back"
        document.write("<button class ='myButtons' id = \"back\">Back</button>");
        // looks for an element with the id "back"
                     var back = document.getElementById("back");
        
        // after the back button is clicked then the page gets reloaded
        back.addEventListener("click", function(){
                /* global location */
             location.reload();
        });


// looks for an element with the id "SelectVideoGames"
        var SelectVideoGames = document.getElementById("SelectVideoGames");
        SelectVideoGames.style.width = '275px';
        
        // after the submit button inside of video games is clicked the following function runs
        submitVideoGames.addEventListener("click", function(){
                switch(rand){
                 case 0:
                        //  If the image that is green is fortnite and the user picks fortnite then the "correct" alert shows up and the border changes to grey
                         if (SelectVideoGames.value == "Fortnite"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                // if the user chooses the wrong answer then a different alert tells them they are wrong and let's them repick
                                alert("Incorrect!");
                        }
                         break;
                case 1:
                        // See Fortnite
                        if (SelectVideoGames.value == "Fifa"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 2:
                        // See Fortnite
                        if (SelectVideoGames.value == "Overwatch"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 3:
                        // See Fortnite
                        if (SelectVideoGames.value == "League of Legends"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 4:
                        // See Fortnite
                        if (SelectVideoGames.value == "Minecraft"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 5:
                        // See Fortnite
                        if (SelectVideoGames.value == "Pac man"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 6:
                        // See Fortnite
                        if (SelectVideoGames.value == "Super Smash Bros"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                case 7:
                        // See Fortnite
                        if (SelectVideoGames.value == "Destiny"){
                                alert("Correct!");
                                randElement.style.border = "2.5px solid grey";
                                SelectrandElement();
                        }
                        else{
                                alert("Incorrect!");
                        }
                        break;
                 default:
                        alert("default");
                }
        });

// Creates an array for all my buttons with the class name "myButtons"
        myArr = document.getElementsByClassName("myButtons");

// creates a function that chooses a random number and Element
function SelectrandElement(){

// Chooses a random integer between 0-7
rand = Math.floor(Math.random() * 8);

randElement = document.getElementById("VideoGamesButton" + rand);

// Changes the selected image to have a green border to make it easier for the user to see which image is selected
randElement.style.border = "10px solid green";

}

SelectrandElement();
});