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
        Swal.fire({
            icon: 'error',
            title: 'Los numeros deben ser positivos',
            text: 'Por favor ingrese numeros positivos',

        })
    }
    if (num1 > 0 && num2 > 0) {
        if (menor == num1 && menor == num2) {
            Swal.fire({
                icon: 'success',
                title: 'Menor de los numeros positivos',
                text: 'Los numeros son iguales',
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Menor de los numeros positivos',
                text: 'El numero menor es: ' + menor,
            })
        }

    }
});

revisarIgual.addEventListener('click', (e) => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);


    if (num1 < 0 || num2 < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Los numeros deben ser positivos',
            text: 'Por favor ingrese numeros positivos',

        })
    }
    if (num1 > 0 && num2 > 0) {
        if (num1 / num2 == 1) {
            Swal.fire({
                icon: 'success',
                title: 'Revisar si los numeros son iguales',
                text: 'Los numeros son iguales',
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Revisar si los numeros son iguales',
                text: 'Los numeros no son iguales',
            })
        }
    }

});

sumarNumeros.addEventListener('click', (e) => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado = num1 + num2;
    if (num1 < 0 || num2 < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Los numeros deben ser positivos',
            text: 'Por favor ingrese numeros positivos',

        })
    }
    if (num1 > 0 && num2 > 0) {
        Swal.fire({
            icon: 'success',
            title: 'Sumar los dos numeros',
            text: 'La suma de los dos numeros es: ' + resultado,
        })
    }
});

IntercambiarValores.addEventListener('click', (e) => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    if (num1 < 0 || num2 < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Los numeros deben ser positivos',
            text: 'Por favor ingrese numeros positivos',
        })
    }
    if (num1 > 0 && num2 > 0) {
        Swal.fire({
            icon: 'success',
            title: 'Cambiar la posicion de los numeros',
            text: 'el primer numero es: ' + num1 +
                ' y el segundo numero es: ' + num2,
        })

    }
});



