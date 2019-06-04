var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operation = document.getElementById("operation");
var calculate = document.getElementById("calculate");
var answer = document.getElementById("answer");

calculate.addEventListener("click", function(){
    // alert ("1")
    var number1 = +num1.value;
    // alert ("2")
    var number2 = +num2.value;
    // alert ("3")
    var op = operation.value;
    
    if(op ==="+"){
        answer.innerHTML = number1 + number2;
    }
    else if(op ==="-"){
        answer.innerHTML = number1 - number2;
    }
    else if(op ==="/"){
        answer.innerHTML = number1 / number2;
    }
    else if(op ==="*"){
        answer.innerHTML = number1 * number2;
    }
})