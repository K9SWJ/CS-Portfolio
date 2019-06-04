var button = document.getElementById("button");
button.style.position = "absolute";
button.addEventListener("mousemove", function(){
    button.style.top = Math.random() * 864 + "px";
    // button.style.bottom = Math.random() * 864 + "px";
    button.style.left = Math.random() * 1536 + "px";
    // button.style.right = Math.random() * 1536 + "px";
});
button.addEventListener("click", function(){
    alert("Uploading V-Bucks to account");
    alert("Error, please try again later");
})