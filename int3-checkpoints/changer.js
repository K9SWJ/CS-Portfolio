    var newBGColor = document.getElementById("text");
    var colorChangeButton = document.getElementById("colorChangeButton");
    var button = document.getElementById("button");
    button.addEventListener("click", function (){
        document.body.style.backgroundColor = newBGColor.value;
    });