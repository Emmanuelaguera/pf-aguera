alert("Bienvenidos,lo ayudaremos en su consulta.");

class Videojuego {
  constructor(titulo, genero, horasJugadas) {
    this.titulo = titulo;
    this.genero = genero;
    this.horasJugadas = horasJugadas;
  }
}

const videojuego1 = new Videojuego("Apex Legend", "Batle Royale", 850);
const videojuego2 = new Videojuego("The Last Of As", "Accion", 9550);
const videojuego3 = new Videojuego("Metal Gear Solid V", "Accion", 8500);
const videojuego4 = new Videojuego("Diablo 4 ", "Aventura", 10.200);

const videojuegos = [videojuego1, videojuego2, videojuego3, videojuego4];

function filtrarPorGenero(genero) {
  return videojuegos.filter(videojuego => videojuego.genero === genero);
}

function filtrarPorHorasJugadas(minHoras) {
  return videojuegos.filter(videojuego => videojuego.horasJugadas >= minHoras);
}

const videojuegosAventura = filtrarPorGenero("Accion");
console.log(videojuegosAventura);

const videojuegosMinimoHoras = filtrarPorHorasJugadas(100);
console.log(videojuegosMinimoHoras);

let carrito = []
let seleccion = prompt("Desea comprar algun juego si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("Ingrese si o no")
  seleccion = prompt("desea comprar un juego si o no")
}

if (seleccion == "si")
  alert("Lista de nuestros juegos")
let todosLosProductos =
  console.log(videojuegos);

calcularCostoTotal("productos+precioProducto");

function calcularCostoTotal() {
  const cantidadDeProductos = parseInt(prompt("Ingrese la cantidad de productos:"));

  let costoTotal = 0;

  for (let i = 1; i <= cantidadDeProductos; i++) {
    const precioProducto = parseFloat(
      prompt("Ingrese el precio del producto ${i}:")
    );

    if (!isNaN(precioProducto) && precioProducto > 0) {
      costoTotal += precioProducto;
    } else {
      alert("El precio ingresado es invalido. Intente nuevamente.");
      i--;
    }

  }
  alert("El costo total es de: $${precio.producto + costoTotal}");

};


