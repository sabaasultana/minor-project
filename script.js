function appendToDisplay(value) {
    document.getElementById('display').innerText += value;
}

function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function calculateResult() {
    var expression = document.getElementById('display').innerText;
    var result = eval(expression);
    document.getElementById('display').innerText = result;
}
