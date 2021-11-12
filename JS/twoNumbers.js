document.querySelector('button').onclick = twoNumbers;
function twoNumbers() {
    let num1 = document.querySelector('.number1').value;
    let num2 = document.querySelector('.number2').value;
    if(num1 > num2){
        document.getElementById('result').innerHTML='Число 2 меньше';
    }
    else if(num2 > num1){
        document.getElementById('result').innerHTML='Число 1 меньше';
    }
    else {
        document.getElementById('result').innerHTML='Числа равны';
    }
}

