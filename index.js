// document.getElementById("cuerpo").innerHTML = ``;

let productosHogar = [
    {
        titulo: "Cocina1",
        imagen: "./imagenes/cocina1.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
    {
        titulo: "Cocina2",
        imagen: "./imagenes/cocina2.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
    {
        titulo: "Cocina3",
        imagen: "./imagenes/cocina3.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
    {
        titulo: "Microondas1",
        imagen: "./imagenes/microondas1.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
    {
        titulo: "Microondas2",
        imagen: "./imagenes/microondas2.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
    {
        titulo: "Microondas3",
        imagen: "./imagenes/microondas3.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
    {
        titulo: "Microondas4",
        imagen: "./imagenes/microondas4.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
    {
        titulo: "Nevera1",
        imagen: "./imagenes/nevera1.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
    {
        titulo: "Nevera2",
        imagen: "./imagenes/nevera2.png",
        precio: "Precio$",
        cantidadDisponible:"Cantidad"
    },
];


let botonProductosDerecha = document.getElementById("botonProductosDerecha");

let contadorDeClicks=0;
let indiceDisplay1=0;
let indiceDisplay2=1;
let indiceDisplay3=2;
let indiceDisplay4=3;

if (window.innerWidth<480){
        if(indiceDisplay2<productosHogar.length){
            document.getElementById("gridProductos").classList.add("grid-cols-2");
            document.getElementById("gridProductos").innerHTML = `
                <div id="displayProducto" class="flex flex-col  flex px-[5px] py-[5px] justify-between h-[95%] w-[100%] bg-[gray]">
                    <h1 class="tituloProducto font-bold text-[1.3rem]">${productosHogar[indiceDisplay1].titulo}</h1>
                    <img class="imagenProducto" src="${productosHogar[indiceDisplay1].imagen}" alt="producto cuadrado">
                    <div id="precio_y_cantidad" class="">
                        <h3 class="precioProducto">Precio: ${productosHogar[indiceDisplay1].precio}</h3>
                        <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${productosHogar[indiceDisplay1].cantidadDisponible}</h3>
                    </div>
                    <div class="flex justify-between">
                        <button class="bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Ver descripción</button>
                        <button class="flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Añadir al carrito</button>
                    </div>
                </div>
                <div id="displayProducto" class="flex flex-col  flex px-[5px] py-[5px] justify-between h-[95%] w-[100%] bg-[gray]">
                    <h1 class="tituloProducto font-bold text-[1.3rem]">${productosHogar[indiceDisplay2].titulo}</h1>
                    <img class="imagenProducto" src="${productosHogar[indiceDisplay2].imagen}" alt="producto cuadrado">
                    <div id="precio_y_cantidad" class="">
                        <h3 class="precioProducto">Precio: ${productosHogar[indiceDisplay2].precio}</h3>
                        <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${productosHogar[indiceDisplay2].cantidadDisponible}</h3>
                    </div>
                    <div class="flex justify-between">
                        <button class="bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Ver descripción</button>
                        <button class="flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Añadir al carrito</button>
                    </div>
                </div>
            `;
    }
}

function cambiarProductosDerecha1 () {
    if(indiceDisplay2 == productosHogar.length){
        indiceDisplay1 = 0;
        indiceDisplay2 = 1;
    };
    indiceDisplay1 += 1;
    indiceDisplay2 += 1;
    document.getElementById("gridProductos").classList.add("grid-cols-2");
    document.getElementById("gridProductos").innerHTML = `
        <div id="displayProducto" class="flex flex-col  flex px-[5px] py-[5px] justify-between h-[95%] w-[100%] bg-[gray]">
            <h1 class="tituloProducto font-bold text-[1.3rem]">${productosHogar[indiceDisplay1].titulo}</h1>
            <img class="imagenProducto" src="${productosHogar[indiceDisplay1].imagen}" alt="producto cuadrado">
            <div id="precio_y_cantidad" class="">
                <h3 class="precioProducto">Precio: ${productosHogar[indiceDisplay1].precio}</h3>
                <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${productosHogar[indiceDisplay1].cantidadDisponible}</h3>
            </div>
            <div class="flex justify-between">
                <button class="bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Ver descripción</button>
                <button class="flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Añadir al carrito</button>
            </div>
        </div>
        <div id="displayProducto" class="flex flex-col  flex px-[5px] py-[5px] justify-between h-[95%] w-[100%] bg-[gray]">
            <h1 class="tituloProducto font-bold text-[1.3rem]">${productosHogar[indiceDisplay2].titulo}</h1>
            <img class="imagenProducto" src="${productosHogar[indiceDisplay2].imagen}" alt="producto cuadrado">
            <div id="precio_y_cantidad" class="">
                <h3 class="precioProducto">Precio: ${productosHogar[indiceDisplay2].precio}</h3>
                <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${productosHogar[indiceDisplay2].cantidadDisponible}</h3>
            </div>
            <div class="flex justify-between">
                <button class="bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Ver descripción</button>
                <button class="flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Añadir al carrito</button>
            </div>
        </div>
    `;
}

function cambiarProductosIzquierda1 () {
    if(indiceDisplay1==0){
        indiceDisplay1 = productosHogar.length;
        indiceDisplay2 = productosHogar.length-1;
    }
    indiceDisplay1 += -1;
    indiceDisplay2 += -1;
    document.getElementById("gridProductos").classList.add("grid-cols-2");
    document.getElementById("gridProductos").innerHTML = `
        <div id="displayProducto" class="flex flex-col  flex px-[5px] py-[5px] justify-between h-[95%] w-[100%] bg-[gray]">
            <h1 class="tituloProducto font-bold text-[1.3rem]">${productosHogar[indiceDisplay1].titulo}</h1>
            <img class="imagenProducto" src="${productosHogar[indiceDisplay1].imagen}" alt="producto cuadrado">
            <div id="precio_y_cantidad" class="">
                <h3 class="precioProducto">Precio: ${productosHogar[indiceDisplay1].precio}</h3>
                <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${productosHogar[indiceDisplay1].cantidadDisponible}</h3>
            </div>
            <div class="flex justify-between">
                <button class="bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Ver descripción</button>
                <button class="flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Añadir al carrito</button>
            </div>
        </div>
        <div id="displayProducto" class="flex flex-col  flex px-[5px] py-[5px] justify-between h-[95%] w-[100%] bg-[gray]">
            <h1 class="tituloProducto font-bold text-[1.3rem]">${productosHogar[indiceDisplay2].titulo}</h1>
            <img class="imagenProducto" src="${productosHogar[indiceDisplay2].imagen}" alt="producto cuadrado">
            <div id="precio_y_cantidad" class="">
                <h3 class="precioProducto">Precio: ${productosHogar[indiceDisplay2].precio}</h3>
                <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${productosHogar[indiceDisplay2].cantidadDisponible}</h3>
            </div>
            <div class="flex justify-between">
                <button class="bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Ver descripción</button>
                <button class="flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.8rem]">Añadir al carrito</button>
            </div>
        </div>
    `;
}

































// Reloj y Calendario - inicio

function showClock(){
    let date = new Date();
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    let clock = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("clock").textContent = clock;
}

function showCalendar(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let calendar = `${day}/${month}/${year}`;
    document.getElementById("calendar").textContent = calendar;
}

function formatTime(time){
    if (time < 10) {
        time = "0" + time;
    }
    return time;
}

setInterval(showClock, 1000);
setInterval(showCalendar, 1000);

// Reloj y Calendario - fin
