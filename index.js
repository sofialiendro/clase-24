// Ejercicio - color random al presionar espacio - rgb entre 0 y 255

const body = document.querySelector("body")

window.onkeypress = (e) => {
    if (e.keyCode === 32) {
        const color = obtenerColorAleatorio()
        body.style.backgroundColor = color
    } 
}

const obtenerColorAleatorio = () => {
    const primerNumero = Math.floor(Math.random() * 255)
    const segundoNumero = Math.floor(Math.random() * 255)
    const tercerNumero = Math.floor(Math.random() * 255)
    const nuevoColor = `rgb(${primerNumero}, ${segundoNumero}, ${tercerNumero})`

    return nuevoColor
}
