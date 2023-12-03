function cambiarColor() {
    var colores = ["red", "blue", "green", "yellow", "pink"];
    var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
 }
 