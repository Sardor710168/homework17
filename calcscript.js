let resultEl = document.querySelector("#result");
let calcBtn = document.querySelector("#calcBtn");
let resetBtn = document.querySelector("#resetBtn");

calcBtn.addEventListener("click", () => {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let operator = document.querySelector("#operator").value;

    let result = 0;

    if (operator === "add") {
        result = num1 + num2;
    } else if (operator === "sub") {
        result = num1 - num2;
    } else if (operator === "mul") {
        result = num1 * num2;
    } else if (operator === "div") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "0 ga bo‘lish mumkin emas!";
        }
    }

    resultEl.textContent = "Result: " + result;
});

resetBtn.addEventListener("click", () => {
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    document.querySelector("#operator").value = "add";
    resultEl.textContent = "Result:";
});
