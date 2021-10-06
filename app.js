document.querySelector("#numberChanger")
let changeOfNumber = document.querySelector("#numberChanger");
changeOfNumber = 0;

document.querySelector("#decrease");
let lowerNumber = document.querySelector("#decrease");

document.querySelector("#reset");
let backToZero = document.querySelector("#reset");

document.querySelector("#increase");
let increaseNumber = document.querySelector("#increase");
increaseNumber.style.backgroundColor = "red";





increaseNumber.addEventListener("click", function increment() {
    changeOfNumber = changeOfNumber + 1;
    console.log(changeOfNumber);
});

lowerNumber.addEventListener("click", function increment() {
    changeOfNumber = changeOfNumber - 1;
    console.log(changeOfNumber);
});

backToZero.addEventListener("click", function increment() { 
     changeOfNumber = 0;
    console.log(changeOfNumber);
});
