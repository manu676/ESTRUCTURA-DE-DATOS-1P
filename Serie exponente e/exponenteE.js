document.querySelector('#btnOK').addEventListener('click', () => {
    //Get x and n
    let x = Number(document.querySelector('#x').value);
    let n = Number(document.querySelector('#n').value);
    var seceunceResult = 0;
    //Do secuence
    seceunceResult = secuenceEulerUntilN(x, n);
    //Show on screen
    document.querySelector('#result').value = seceunceResult;
});

function secuenceEulerUntilN(x, n) {
    let result = 1;
    //s = 1 + x + ((x^2)/2!) + ((x^3)/3!)...
    for (let i = 1; i < n; i++) {
        result += Math.pow(x, i) / getFactorial(i);
    }

    return result;
}

function getFactorial(x){    
    for (let i = x - 1; i > 0; i--) {
        x *= i;
    }

    return x;
}