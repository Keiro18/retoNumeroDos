const menorPositivos = document.getElementById('submitForm');
const revisarIgual = document.getElementById('btnRevisarIgual');
const IntercambiarValores = document.getElementById('btnIntercambiarValores');
const sumarNumeros = document.getElementById('btnSumarNumeros');
const button = document.getElementById('click');




menorPositivos.addEventListener('click', (e) => {

    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let menor = (Math.abs(num1 + num2) - Math.abs(num1 - num2)) / 2;

    if (num1 < 0 || num2 < 0) {
        alert("Los numeros deben ser positivos");
    }
    if (num1 > 0 && num2 > 0) {
        if (menor == num1 && menor == num2) {
            alert("los numeros son iguales");
        } else {
            alert("el numero menor es: " + menor);
        }

    }
});

revisarIgual.addEventListener('click', (e) => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);


    if (num1 < 0 || num2 < 0) {
        alert("Los numeros deben ser positivos");
    }
    if (num1 > 0 && num2 > 0) {
        if (num1 / num2 == 1) {
            alert("Los numeros son iguales");
        } else {
            alert("Los numeros no son iguales");
        }
    }

});

sumarNumeros.addEventListener('click', (e) => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado = num1 + num2;
    if (num1 < 0 || num2 < 0) {
        alert("Los numeros deben ser positivos");
    }
    if (num1 > 0 && num2 > 0) {
        alert("El resultado de la suma es: " + resultado);
    }
});

IntercambiarValores.addEventListener('click', (e) => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    if (num1 < 0 || num2 < 0) {
        alert("Los numeros deben ser positivos");
    }
    if (num1 > 0 && num2 > 0) {
        alert("El primer valor es: " + num1 + " y el segundo valor es: " + num2);

    }
});



