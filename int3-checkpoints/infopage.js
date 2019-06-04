var DogText = document.getElementById("DogImage");
var dogDisplay = document.getElementById("dogDisplay");
var CatText = document.getElementById("CatImage");
var catDisplay = document.getElementById("catDisplay");
var x = false;

DogText.addEventListener("click", function(){
    x = !x;
    // Allows the text to appear if x = true (first time click the image)
    if (x) {
        dogDisplay.innerHTML = "<h1>The domestic dog (Canis lupus familiaris when considered a subspecies of the wolf or Canis familiaris when considered a distinct species) is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore. The dog and the extant gray wolf are sister taxa as modern wolves are not closely related to the wolves that were first domesticated, which implies that the direct ancestor of the dog is extinct. The dog was the first species to be domesticated and has been selectively bred over millennia for various behaviors, sensory capabilities, and physical attributes. Their long association with humans has led dogs to be uniquely attuned to human behavior and they are able to thrive on a starch-rich diet that would be inadequate for other canid species. Dogs vary widely in shape, size and colors. They perform many roles for humans, such as hunting, herding, pulling loads, protection, assisting police and military, companionship and, more recently, aiding disabled people and therapeutic roles. This influence on human society has given them the sobriquet of 'man's best friend'.</h1> ";
        dogDisplay.style.color="yellow";
    }
    // Makes text go away if x = false (second time clicking the image)
    else {
        dogDisplay.innerHTML = "";
    }
});

CatText.addEventListener("click", function(){
    // Does opposite of x
    x = !x;
    // Allows the text to appear if x = true
    if(x){
   catDisplay.innerHTML = "<h2>The cat (Felis catus) is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family. The cat is either a house cat, kept as a pet, or a feral cat, freely ranging and avoiding human contact. A house cat is valued by humans for companionship and for its ability to hunt rodents. About 60 cat breeds are recognized by various cat registries. </h2>"; 
   catDisplay.style.color="orange";
}
// Makes the text go away if x = false
else{
    catDisplay.innerHTML="";
}
});