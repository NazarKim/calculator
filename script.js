let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let equal = document.querySelector(".equal");
let clear = document.querySelector(".clear");
let result = document.querySelector("#display");

numbers.forEach(function(number) {
    number.addEventListener("click", inputAdd);
});

operators.forEach(function(operator) {
    operator.addEventListener("click", inputAdd);
});

clear.addEventListener("click", clearResult);
equal.addEventListener("click", calculateResult);

function inputAdd() {
    if (this.classList.contains("operator") && !result.value) {
        result.value = "ERROR";
    } else {
        copyContent.call(this);
    }
}

function copyContent() {
    let copy = this.innerHTML;
    result.value += copy;
}

function clearResult() {
    result.value = "";
}

function calculateResult() {
    let expression = result.value;
    let answer;

    try {
        answer = eval(expression);
    } catch (error) {
        answer = "ERROR";
    }

    result.value = answer;
}
