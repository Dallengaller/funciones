
// Original

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")
//     ele.addEventListener("click", pintar);


// Desafio
let ele = document.getElementById("ele1")

// aplico color por defecto con js
ele.style.backgroundColor = 'green'

// agrego a la funcion el color amarillo
function pintar(ele, color = 'yellow') {
    ele.style.backgroundColor = color
}

// llamando a la funcion haciendo click 

ele.addEventListener("click", () => {
    pintar(ele)
});