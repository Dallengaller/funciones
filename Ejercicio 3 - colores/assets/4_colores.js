// primero defino la variable
let cuadradoNegro1 = false;
let cuadradoAzul = document.getElementById('blue');

// agrego la funcion
// function cambiaColor() {
//     cuadradoAzul.style.backgroundColor = 'black';

// }

function cambiaColor1() {
    if (cuadradoNegro1 == true) {
    cuadradoAzul.style.backgroundColor = 'blue'
    cuadradoNegro1 = false
}
    else {
        cuadradoAzul.style.backgroundColor = 'black'
        cuadradoNegro1 = true
    }
}

// llamo al evento
cuadradoAzul.addEventListener('click', cambiaColor1);

// ROJO
let cuadradoNegro2 = false;
let cuadradoRojo = document.getElementById('red');

function cambiaColor2() {
    if (cuadradoNegro2 == true) {
    cuadradoRojo.style.backgroundColor = 'red'
    cuadradoNegro2 = false
}
    else {
        cuadradoRojo.style.backgroundColor = 'black'
        cuadradoNegro2 = true
    }
}
cuadradoRojo.addEventListener('click', cambiaColor2);

// // Verde
let cuadradoNegro3 = false;
let cuadradoVerde = document.getElementById('green');

function cambiaColor3() {
    if (cuadradoNegro3 == true) {
    cuadradoVerde.style.backgroundColor = 'green'
    cuadradoNegro3 = false
}
    else {
        cuadradoVerde.style.backgroundColor = 'black'
        cuadradoNegro3 = true
    }
}
cuadradoVerde.addEventListener('click', cambiaColor3);

// Amarillo

let cuadradoNegro4 = false;
let cuadradoAmarillo = document.getElementById('yellow');

function cambiaColor4() {
    if (cuadradoNegro4 == true) {
    cuadradoAmarillo.style.backgroundColor = 'yellow'   
    cuadradoNegro4 = false
}
    else {
        cuadradoAmarillo.style.backgroundColor = 'black'
        cuadradoNegro4 = true
    }
}
cuadradoAmarillo.addEventListener('click', cambiaColor4);
