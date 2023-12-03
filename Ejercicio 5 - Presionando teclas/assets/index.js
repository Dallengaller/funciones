
// Cambio de color al presionar A, S, D.

const div1 = document.getElementById('div1')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        div1.style.backgroundColor = 'pink'
        /* Cambiar a color pink */
    } else if (event.key === 's') {
        div1.style.backgroundColor = 'orange'
        /* Cambiar a color orange */
    } else if (event.key === 'd') {
        div1.style.backgroundColor = 'Cyan'
        /* Cambiar a color Cyan */
    }
})


// Opcion 1 : crear div con js, posteriormente al presionar las teclas cambia de color.
// Cambio de color al presionar Q, W, E.
// Creo el elemento con js 
let newDiv = document.createElement("div");

// aplico estilos con js
 newDiv.style.width = "200px";
 newDiv.style.height = "200px";

// agrego elemento creado pero ademas lo guardo en una variable
let newDiv1 = document.body.appendChild(newDiv)

// aplico la funcion para que al presionar las teclas cambie de color
document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        newDiv1.style.backgroundColor = 'purple'
    /* Cambiar a color purple */
    } else if (event.key === 'w') {
        newDiv1.style.backgroundColor = 'gray'
    /* Cambiar a color gray */
    } else if (event.key === 'e' ) {
        newDiv1.style.backgroundColor = 'brown'
    /* Cambiar a color brown */
    }
    })



// Opcion 2 : Se crea el div junto con los estilos al presionar cada tecla 

// let newDiv2 = document.createElement("div");


// // agrego elemento creado pero ademas lo guardo en una variable
// let nuevoDiv = document.body.appendChild(newDiv2)

// // aplico la funcion para que al presionar las teclas cambie de color

// document.addEventListener('keydown', function (event) {
//     if (event.key === 'q') {
//         nuevoDiv.style.backgroundColor = 'purple';
//         nuevoDiv.style.width = "200px";
//         nuevoDiv.style.height = "200px";
//         /* Cambiar a color purple */
//     } else if (event.key === 'w') {
//         nuevoDiv.style.backgroundColor = 'gray';
//         nuevoDiv.style.width = "200px";
//         nuevoDiv.style.height = "200px";
//         /* Cambiar a color gray */
//     } else if (event.key === 'e') {
//         nuevoDiv.style.backgroundColor = 'brown';
//         nuevoDiv.style.width = "200px";
//         nuevoDiv.style.height = "200px";
//         /* Cambiar a color brown */
//     }
// })