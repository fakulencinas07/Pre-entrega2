class Cucha {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
    }
}

<<<<<<< HEAD
const gatiCueva = new Cucha(1, "Gati Cueva", 6000, "../images/Cuchas-Regaleria/cucha1.png");
const gatiLoft = new Cucha(2, "Mini Gati", 20000, "../images/Cuchas-Regaleria/cucha2.png");
const miniGati = new Cucha(3, "Gati Loft", 10000, "../images/Cuchas-Regaleria/cucha55.png");
const gatiSuite = new Cucha(4, "Gati Suite", 54000, "../images/Cuchas-Regaleria/cucha4.png")
=======
const gatiCueva = new Cucha(1, "Gati Cueva", 6000, "../images/Cuchas-Regaleria/cucha1.jpeg");
const gatiLoft = new Cucha(2, "Gati Loft", 10000, "../images/Cuchas-Regaleria/cucha2.jpeg");
const miniGati = new Cucha(3, "Mini Gati", 20000, "../images/Cuchas-Regaleria/cucha55.jpeg");
const gatiSuite = new Cucha(4, "Gati Suite", 54000, "../images/Cuchas-Regaleria/cucha4.jpeg")
>>>>>>> 2108b86657e777ecd2c5510490a63366ad8a0b85

const cuchas = [gatiCueva, gatiLoft, miniGati, gatiSuite];

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorCuchas = document.getElementById("contenedorCuchas");

const mostrarCuchas = () => {
    cuchas.forEach( Cucha => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-2", "col-sm-8");
        card.innerHTML = `
            <div class= "card" >
                    <img src="${Cucha.img}" class= "card-img-tom imgCuchas" alt="cucha">
                    <div class="card-body" >
                    <p>${Cucha.nombre}</p>
<<<<<<< HEAD
                    <span>$${Cucha.precio}</span>
=======
                    <span>${Cucha.precio}</span>
>>>>>>> 2108b86657e777ecd2c5510490a63366ad8a0b85
                        <button class = "btn colorBoton" id= "boton${Cucha.id}" >Agregar al carrito</button>
                </div>
            </div>`

        contenedorCuchas.appendChild(card);

        const boton = document.getElementById(`boton${Cucha.id}`)
        boton.addEventListener("click", () => {
            agregarAlCarrito(Cucha.id);
        })



        })
    }

mostrarCuchas();


const agregarAlCarrito = (id) => {
    const cuchaEnCarrito = carrito.find(Cucha => Cucha.id === id);
    if (cuchaEnCarrito) {
        cuchaEnCarrito.cantidad++;
    } else{
        const cucha = cuchas.find(Cucha => Cucha.id ===id);
        carrito.push(cucha);

    }
    calcularTotal();

    localStorage.setItem("carrito", JSON.stringify(carrito));
    
}

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito")

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(Cucha => {
        const card =  document.createElement("div");
        card.classList.add("col-xl-3", "col-md-2", "col-sm-8");
        card.innerHTML = `
            <div class= "card" >
                    <img src="${Cucha.img}" class= "card-img-tom imgCuchas" alt="cucha">
                    <div class="card-body" >
                    <p>${Cucha.nombre}</p>
                    <p>${Cucha.cantidad}</p>
<<<<<<< HEAD
                    <span>$${Cucha.precio}</span>
=======
                    <span>${Cucha.precio}</span>
>>>>>>> 2108b86657e777ecd2c5510490a63366ad8a0b85
                        <button class = "btn colorBoton" id="eliminar${Cucha.id}" >Eliminar del carrito</button>
                </div>
            </div>`

            contenedorCarrito.appendChild(card);

            const boton = document.getElementById(`eliminar${Cucha.id}`);
            boton.addEventListener("click", () => {
                eliminarDelCarrito(Cucha.id);
            })

    })
    calcularTotal()
}


    const eliminarDelCarrito = (id) => {
        const cucha = carrito.find(Cucha => Cucha.id === id);
        const indice = carrito.indexOf(cucha);
        carrito.splice(indice,1);
        mostrarCarrito();

        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

const vaciarCarrito = document.getElementById("vaciarCarrito");
    vaciarCarrito.addEventListener("click", () => {
        eliminarTodoElCarrito();
    })

    const eliminarTodoElCarrito = () => {
        carrito = [];
        mostrarCarrito();

        localStorage.clear();
    }

const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0;
    carrito.forEach (Cucha => {
        totalCompra += Cucha.precio * Cucha.cantidad;
    })
    total.innerHTML = `Total $${totalCompra}`;
}

