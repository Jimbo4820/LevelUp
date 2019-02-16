function plus(){
    var num1, num2, sum;

    num1 = document.getElementById('first-number').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('second-number').value;
    num2 = parseInt(num2);

    sum = num1 + num2;
    
    document.getElementById('result').innerHTML = sum;
}

function minus(){
    var num1, num2, dif;

    num1 = document.getElementById('first-number').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('second-number').value;
    num2 = parseInt(num2);

    dif = num1 - num2;
    
    document.getElementById('result').innerHTML = dif;
}

function multy(){
    var num1, num2, mul;

    num1 = document.getElementById('first-number').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('second-number').value;
    num2 = parseInt(num2);

    mul = num1 * num2;
    
    document.getElementById('result').innerHTML = mul;
}

function share(){
    var num1, num2, shr;

    num1 = document.getElementById('first-number').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('second-number').value;
    num2 = parseInt(num2);

    shr = num1 / num2;
    
    document.getElementById('result').innerHTML = shr;
}

function pow(){
    var num1, num2, pow;

    num1 = document.getElementById('first-number').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('second-number').value;
    num2 = parseInt(num2);

    pow = Math.pow(num1, num2);
    
    document.getElementById('result').innerHTML = pow;
}