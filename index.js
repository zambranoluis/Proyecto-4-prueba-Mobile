// document.getElementById("cuerpo").innerHTML = ``;


let categorias = [
    {
        titulo: "Hogar Muebles y Cocina",
        fondo: "./imagenes/fondoHogar.jpg",
        productos: [
            {
                id: "101001",
                titulo: "Cocina Mabe a Gas a 4 hornillas",
                imagen: "./imagenes/cocina1.png",
                precio: 60,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0,
                descripcion: "DESCRIPCIÓN DEL PRODUCTO: \n*Producto Oficial Mabe*\n·Variedad de platos con diferentes potencias para preparar todos tus platillos.\n·Grill superior a Gas, tú decides qué toque final necesitan tus platillos: asado, dorado, tostado o gratinado.\n·Parrilla autodeslizable con amplia extensión para evitar posiciones incómodas o inseguras al momento de retirar tus alimentos.\n·Recubrimiento interior Easy Clean Pro.\n·La evolución de la limpieza continua, tan fácil de limpiar como un vidrio."
            },
            {
                id: "101002",
                titulo: "Cocina Starlux a Gas a 4 hornillas",
                imagen: "./imagenes/cocina2.png",
                precio: 70,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0,
                descripcion: "DESCRIPCIÓN DEL PRODUCTO: \n*Producto Oficial Starlux*\n·Variedad de platos con diferentes potencias para preparar todos tus platillos.\n\n·Grill superior a Gas, tú decides qué toque final necesitan tus platillos: asado, dorado, tostado o gratinado.\n·Parrilla autodeslizable con amplia extensión para evitar posiciones incómodas o inseguras al momento de retirar tus alimentos.\n·Recubrimiento interior Easy Clean Pro.\n·La evolución de la limpieza continua, tan fácil de limpiar como un vidrio."
            },
            {
                id: "101003",
                titulo: "Cocina Venezia a Gas a 4 hornillas",
                imagen: "./imagenes/cocina3.png",
                precio: 80,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0,
                descripcion: "DESCRIPCIÓN DEL PRODUCTO: \n*Producto Oficial Venezia*\n·Variedad de platos con diferentes potencias para preparar todos tus platillos.\n\n·Grill superior a Gas, tú decides qué toque final necesitan tus platillos: asado, dorado, tostado o gratinado.\n·Parrilla autodeslizable con amplia extensión para evitar posiciones incómodas o inseguras al momento de retirar tus alimentos.\n·Recubrimiento interior Easy Clean Pro.\n·La evolución de la limpieza continua, tan fácil de limpiar como un vidrio."
            },
            {
                id: "101004",
                titulo: "Microondas Oster",
                imagen: "./imagenes/microondas1.png",
                precio: 60,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0,
                // descripcion: "Microondas Oster Digital Negro 0.7 Pies 20 Litros 700W Modelo: OGGE3702. \n\nEl microonda Oster de 20 litros es una excelente opción para calentar y cocinar alimentos de manera rápida y eficiente. Con funciones preestablecidas y un diseño moderno, es fácil de usar y se adapta a cualquier cocina.\n\n-Capacidad 20 Litros.\n-Blanco Y Negro.\n-700 Watts Potencia.\n-0.7 Pies Cubicos.\n-Control Digital.\n-10 Ajustes De Potencia.\n-6 Programas De Cocion.\n-Función De Descongelado.\n-Display Con Relog Digital.\n-Puerta De Vidrio. \n\nCon su capacidad de 20 litros y potencia de 700W, puedes calentar y cocinar alimentos de manera rápida y eficiente, mientras que el interior y exterior de acero inoxidable y el plato giratorio de vidrio facilitan la limpieza y el mantenimiento."
            },
            {
                id: "101005",
                titulo: "Microondas Whirpool",
                imagen: "./imagenes/microondas2.png",
                precio: 70,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "101006",
                titulo: "Microondas Samsung",
                imagen: "./imagenes/microondas3.png",
                precio: 80,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "101007",
                titulo: "Microondas Frigilux",
                imagen: "./imagenes/microondas4.png",
                precio: 90,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "101008",
                titulo: "Nevera Haier",
                imagen: "./imagenes/nevera1.png",
                precio: 100,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
            {
                id: "101009",
                titulo: "Nevera Mabe",
                imagen: "./imagenes/nevera2.png",
                precio: 110,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
        ],
    },
    {
        titulo: "Alimentos Bebidas y Dulces",
        fondo: "./imagenes/fondoAlimentos.jpg",
        productos: [
            {
                id: "201001",
                titulo: "Tomate por kg",
                imagen: "./imagenes/tomate.png",
                precio: 2,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201002",
                titulo: "Cebolla por kg",
                imagen: "./imagenes/cebolla.png",
                precio: 2.5,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201003",
                titulo: "Brocoli por kg",
                imagen: "./imagenes/brocoli.png",
                precio: 3,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201004",
                titulo: "Zanahoria por kg",
                imagen: "./imagenes/zanahoria.png",
                precio: 3.5,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201005",
                titulo: "Paleta de ciervo por kg",
                imagen: "./imagenes/carne1.png",
                precio: 5,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201006",
                titulo: "Solomillo de gamo por kg",
                imagen: "./imagenes/carne2.png",
                precio: 5.5,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201007",
                titulo: "Pollo entero (precio por kg)",
                imagen: "./imagenes/pollo.png",
                precio: 6,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201008",
                titulo: "Sodas en Lata 6-pack",
                imagen: "./imagenes/sodasLata.png",
                precio: 12,
                cantidadDisponible: 200,
                cantidadEnCarrito: 0
            },
            {
                id: "201009",
                titulo: "Jugo de Mango 475mL 6-pack",
                imagen: "./imagenes/jugoMango.png",
                precio: 8,
                cantidadDisponible: 200,
                cantidadEnCarrito: 0
            },
            {
                id: "201010",
                titulo: "Jugo de Manzana 475mL 6-pack",
                imagen: "./imagenes/jugoManzana.png",
                precio: 8,
                cantidadDisponible: 200,
                cantidadEnCarrito: 0
            },
            {
                id: "201011",
                titulo: "Bandeja Chocolate Ferrero Rocher 8 piezas",
                imagen: "./imagenes/ferrero.png",
                precio: 15,
                cantidadDisponible: 300,
                cantidadEnCarrito: 0
            },
            {
                id: "201012",
                titulo: "Chocolate Snicker 6 piezas 316g",
                imagen: "./imagenes/snicker.png",
                precio: 16,
                cantidadDisponible: 300,
                cantidadEnCarrito: 0
            },
            {
                id: "201013",
                titulo: "Chocolate Milky Way 6 piezas 313g",
                imagen: "./imagenes/milkyway.png",
                precio: 17,
                cantidadDisponible: 300,
                cantidadEnCarrito: 0
            },
            {
                id: "201014",
                titulo: "Chocolate M&M 47g",
                imagen: "./imagenes/mm.png",
                precio: 18,
                cantidadDisponible: 300,
                cantidadEnCarrito: 0
            },
        ],
    },
    {
        titulo: "Tecnologia",
        fondo: "./imagenes/fondoTecnologia.jpg",
        productos: [
            {
                id: "301001",
                titulo: "PC Core i3 8GB RAM 256 SSD y componentes",
                imagen: "./imagenes/pc1.png",
                precio: 800,
                cantidadDisponible: 50,
                cantidadEnCarrito: 0
            },
            {
                id: "301002",
                titulo: "PC Core i5 16GB RAM 512 SSD y componentes",
                imagen: "./imagenes/pc2.png",
                precio: 900,
                cantidadDisponible: 50,
                cantidadEnCarrito: 0
            },
            {
                id: "301003",
                titulo: "PC Core i7 16GB RAM 1TB SSD y componentes",
                imagen: "./imagenes/pc3.png",
                precio: 1000,
                cantidadDisponible: 50,
                cantidadEnCarrito: 0
            },
            {
                id: "301004",
                titulo: "PC Core i9 32GB RAM 4TB SSD y componentes",
                imagen: "./imagenes/pc4.png",
                precio: 1100,
                cantidadDisponible: 50,
                cantidadEnCarrito: 0
            },
            {
                id: "301005",
                titulo: "Laptop Lenovo Core i3 8GB RAM 256 SSD",
                imagen: "./imagenes/laptop1.png",
                precio: 500,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "301006",
                titulo: "Laptop HP Core i5 16GB RAM 512 SSD",
                imagen: "./imagenes/laptop2.png",
                precio: 550,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "301007",
                titulo: "Laptop Cyberlux Core i7 32GB RAM 1TB SSD",
                imagen: "./imagenes/laptop3.png",
                precio: 600,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "301008",
                titulo: "Laptop Dell Core i7 32GB RAM 1TB SSD",
                imagen: "./imagenes/laptop4.png",
                precio: 700,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "301009",
                titulo: "PS4 1TB",
                imagen: "./imagenes/ps4.png",
                precio: 450,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
            {
                id: "301010",
                titulo: "PS5 1TB",
                imagen: "./imagenes/ps5.png",
                precio: 600,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
            {
                id: "301011",
                titulo: "Telefono Infinix Hot 20i",
                imagen: "./imagenes/telefono1.png",
                precio: 150,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "301012",
                titulo: "Telefono Xiaomi Redmi 12c",
                imagen: "./imagenes/telefono2.png",
                precio: 250,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "301013",
                titulo: "Telefono Xiaomi Redmi A1",
                imagen: "./imagenes/telefono3.png",
                precio: 300,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
        ],
    },
    {
        titulo: "Ropa Hombres Mujeres y Niños",
        fondo: "./imagenes/fondoRopa.jpg",
        productos:[
            {
                id: "401001",
                titulo: "Blusa para Mujer con estampado de Mickey Mouse",
                imagen: "./imagenes/mujer1.png",
                precio: 10,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "401002",
                titulo: "Blusa para Dama con diversos estilos atrevidos",
                imagen: "./imagenes/mujer2.png",
                precio: 8,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "401003",
                titulo: "Licras Kirius unicolor",
                imagen: "./imagenes/mujer3.png",
                precio: 12,
                cantidadDisponible: 70,
                cantidadEnCarrito: 0
            },
            {
                id: "401004",
                titulo: "Boxer Calvin Klein para Hombres",
                imagen: "./imagenes/hombre1.png",
                precio: 5,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0
            },
            {
                id: "401005",
                titulo: "Medias deportivas Tallas para Adultos",
                imagen: "./imagenes/hombre2.png",
                precio: 6,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0
            },
            {
                id: "401006",
                titulo: "Franela deportiva manga larga para hombres",
                imagen: "./imagenes/hombre3.png",
                precio: 7,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "401007",
                titulo: "Pijada de 2 piezas para niña o niño",
                imagen: "./imagenes/niña1.png",
                precio: 8,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
            {
                id: "401008",
                titulo: "Medias coloridas para niñas",
                imagen: "./imagenes/niña2.png",
                precio: 3,
                cantidadDisponible:50,
                cantidadEnCarrito: 0
            },
            {
                id: "401009",
                titulo: "Vestido blanco con estampado, para niñas",
                imagen: "./imagenes/niña3.png",
                precio: 6,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "401010",
                titulo: "Short y franela deportiva para niños",
                imagen: "./imagenes/niño1.png",
                precio: 6,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
        ],
    },
]

// Codigo cambiar de categoria y producto - inicio
    let indiceCategoria = 0;
    
    let indiceDisplay1 = 0;
    let indiceDisplay2 = 1;
    let indiceDisplay3 = 2;
    let indiceDisplay4 = 3;

    function cambiarCategoriaDerecha(){
        indiceCategoria++;
        indiceDisplay1 = 0;
        indiceDisplay2 = 1;
        indiceDisplay3 = 2;
        indiceDisplay4 = 3;
        if(indiceCategoria == categorias.length){
            indiceCategoria = 0;
        }
        principal();
    };

    function cambiarCategoriaIzquierda(){
        indiceCategoria--;
        indiceDisplay1 = 0;
        indiceDisplay2 = 1;
        indiceDisplay3 = 2;
        indiceDisplay4 = 3;
        if(indiceCategoria == -1){
            indiceCategoria = categorias.length-1;
        }
        principal();
    };

    function botonCambiarProductosDerecha(){
        indiceDisplay1++;
        indiceDisplay2++;
        indiceDisplay3++;
        indiceDisplay4++;
        if(indiceDisplay1 == categorias[indiceCategoria].productos.length){
            indiceDisplay1 = 0;
            indiceDisplay2 = 1;
            indiceDisplay3 = 2;
            indiceDisplay4 = 3;
        };
        if(indiceDisplay2 == categorias[indiceCategoria].productos.length){
            indiceDisplay1 = categorias[indiceCategoria].productos.length-1;
            indiceDisplay2 = 0;
            indiceDisplay3 = 1;
            indiceDisplay4 = 2;
        };
        if(indiceDisplay3 == categorias[indiceCategoria].productos.length){
            indiceDisplay1 = categorias[indiceCategoria].productos.length-2;
            indiceDisplay2 = categorias[indiceCategoria].productos.length-1;
            indiceDisplay3 = 0;
            indiceDisplay4 = 1;
        };
        if(indiceDisplay4 == categorias[indiceCategoria].productos.length){
            indiceDisplay1 = categorias[indiceCategoria].productos.length-3;
            indiceDisplay2 = categorias[indiceCategoria].productos.length-2;
            indiceDisplay3 = categorias[indiceCategoria].productos.length-1;
            indiceDisplay4 = 0;
        };
        principal();
    };

    function botonCambiarProductosIzquierda(){
        indiceDisplay1--;
        indiceDisplay2--;
        indiceDisplay3--;
        indiceDisplay4--;
        if(indiceDisplay1 == -1){
            indiceDisplay1 = categorias[indiceCategoria].productos.length-1;
            indiceDisplay2 = 0;
            indiceDisplay3 = 1;
            indiceDisplay4 = 2;
        }
        if(indiceDisplay2 == -1){
            indiceDisplay1 = categorias[indiceCategoria].productos.length-2;
            indiceDisplay2 = categorias[indiceCategoria].productos.length-1;
            indiceDisplay3 = 0;
            indiceDisplay4 = 1;
        }
        if(indiceDisplay3 == -1){
            indiceDisplay1 = categorias[indiceCategoria].productos.length-3;
            indiceDisplay2 = categorias[indiceCategoria].productos.length-2;
            indiceDisplay3 = categorias[indiceCategoria].productos.length-1;
            indiceDisplay4=0;
        }
        if(indiceDisplay4 == -1){
            indiceDisplay1 = categorias[indiceCategoria].productos.length-4;
            indiceDisplay2 = categorias[indiceCategoria].productos.length-3;
            indiceDisplay3 = categorias[indiceCategoria].productos.length-2;
            indiceDisplay4 = categorias[indiceCategoria].productos.length-1;
        }
        principal();
    };
// Codigo cambiar de categoria y producto - inicio


// Codigo Abrir y Cerrar el carrito - Inicio
let botonAbrirCarrito = document.getElementById('botonAbrirCarrito');
let ventanaEmergentecarrito = document.getElementById('ventanaEmergenteCarrito');
let botonCerrarCarrito = document.getElementById('botonCerrarCarrito');


botonAbrirCarrito.addEventListener('click', function() {
    ventanaEmergentecarrito.style.display = 'flex';
});

botonCerrarCarrito.addEventListener('click', function() {
    ventanaEmergentecarrito.style.display = 'none';
});
// Codigo Abrir y Cerrar el carrito - Inicio

// Codigo Abrir y Cerrar Factura - Inicio

    function abrirFactura(){
        setTimeout(()=>{
        document.getElementById(`factura`).style.display = 'flex'
        let numeroFactura = Math.round(Math.random()*999999)
        document.getElementById("numeroDeFactura").innerText = `${numeroFactura}`
    }, 3000)

    }

function cerrarFactura(){
    document.getElementById(`factura`).style.display = 'none'
}
// Codigo Abrir y Cerrar Factura - Final

// Codigo Abrir y Cerrar Descripcion - Inicio
function abrirDescripcionDisplay1(){
    document.getElementById(`displayProducto1`).style.display = 'none';
    document.getElementById(`displayDescripcionProducto1`).style.display = 'flex';
}

function cerrarDescripcionDisplay1(){
    document.getElementById(`displayProducto1`).style.display = 'flex';
    document.getElementById(`displayDescripcionProducto1`).style.display = 'none';
}

function abrirDescripcionDisplay2(){
    document.getElementById(`displayProducto2`).style.display = 'none';
    document.getElementById(`displayDescripcionProducto2`).style.display = 'flex';
}

function cerrarDescripcionDisplay2(){
    document.getElementById(`displayProducto2`).style.display = 'flex';
    document.getElementById(`displayDescripcionProducto2`).style.display = 'none';
}

function abrirDescripcionDisplay3(){
    document.getElementById(`displayProducto3`).style.display = 'none';
    document.getElementById(`displayDescripcionProducto3`).style.display = 'flex';
}

function cerrarDescripcionDisplay3(){
    document.getElementById(`displayProducto3`).style.display = 'flex';
    document.getElementById(`displayDescripcionProducto3`).style.display = 'none';
}

function abrirDescripcionDisplay4(){
    document.getElementById(`displayProducto4`).style.display = 'none';
    document.getElementById(`displayDescripcionProducto4`).style.display = 'flex';
}

function cerrarDescripcionDisplay4(){
    document.getElementById(`displayProducto4`).style.display = 'flex';
    document.getElementById(`displayDescripcionProducto4`).style.display = 'none';
}
// Codigo Abrir y Cerrar Descripcion - Final


// Codigo añadir y remover elementos del carrito - inicio
let productosEnCarrito = [];

let contadorDeCarrito = document.getElementById("contadorDeCarrito");

let contenedorDeCarrito = document.getElementById("contenedorDeCarrito");

let contenedorDescripcion = document.getElementById("productosEnFactura");
let contenedorCantidad = document.getElementById("cantidadesEnFactura");
let contenedorMontos = document.getElementById("montosEnFactura");

let ubicacionDeElementosEnCarrito = 0;

let idDeLaUbicacion = [];


let carritoCrudo = [];

let montoTotal=[];



function añadirAlCarritoDisplay1(){
    if (productosEnCarrito.length === 0){
        categorias[indiceCategoria].productos[indiceDisplay1].cantidadEnCarrito++;
        productosEnCarrito.push(categorias[indiceCategoria].productos[indiceDisplay1]);
    }else{
        let productoEnCarrito = productosEnCarrito.find(producto => producto.id === categorias[indiceCategoria].productos[indiceDisplay1].id);
        if (productoEnCarrito){
            productoEnCarrito.cantidadEnCarrito++;
        }else{
            categorias[indiceCategoria].productos[indiceDisplay1].cantidadEnCarrito++;
            productosEnCarrito.push(categorias[indiceCategoria].productos[indiceDisplay1]);
        }
    }
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    contenedorDeCarrito.innerHTML=``;
    
    productosEnCarrito.map(
        (indiceDeProducto)=>{
            // Agregando los productos al carrito
            let divProducto = document.createElement("div");
            divProducto.setAttribute("id", `${ubicacionDeElementosEnCarrito}`);

            idDeLaUbicacion[ubicacionDeElementosEnCarrito] = indiceDeProducto.id;


            let parrafoNombreDeProducto = document.createElement("p");
            let imagenDeProducto = document.createElement("img");
            let parrafoPrecioProductoEnCarrito = document.createElement("p");
            let parrafoCantidadEnCarritoDeProducto = document.createElement("p");
            let contenedorTitulo_y_RemoverProducto = document.createElement("p");
            let removerProducto = document.createElement("p");
            
            parrafoNombreDeProducto.innerText = `${indiceDeProducto.titulo}`;
            removerProducto.innerHTML = `<span onclick="removerElementoDelCarrito(this)" class="material-symbols-outlined">remove</span>`;
            contenedorTitulo_y_RemoverProducto.appendChild(parrafoNombreDeProducto);
            contenedorTitulo_y_RemoverProducto.appendChild(removerProducto);


            imagenDeProducto.src = `${indiceDeProducto.imagen}`;
            parrafoPrecioProductoEnCarrito.innerText = `Precio: ${indiceDeProducto.precio}$`;
            parrafoCantidadEnCarritoDeProducto.innerText = `Cantidad a comprar: ${indiceDeProducto.cantidadEnCarrito}`;


            divProducto.classList.add("flex", "flex-col", "justify-between", "bg-white", "rounded-lg", "p-[10px]", "w-[100%]", "min-[300px]:h-[90%]", "min-[400px]:h-[90%]", "sm:h-[100%]","lg:h-[80%]");
            contenedorTitulo_y_RemoverProducto.classList.add("flex", "justify-between", "items-center", "h-[10%]");
            parrafoNombreDeProducto.classList.add("text-[1rem]");
            imagenDeProducto.classList.add("h-[80%]");
            parrafoPrecioProductoEnCarrito.classList.add("h-[5%]");
            parrafoCantidadEnCarritoDeProducto.classList.add("h-[5%]");
            removerProducto.classList.add("select-none", "hover:cursor-pointer")


            divProducto.appendChild(contenedorTitulo_y_RemoverProducto);
            divProducto.appendChild(imagenDeProducto);
            divProducto.appendChild(parrafoPrecioProductoEnCarrito);
            divProducto.appendChild(parrafoCantidadEnCarritoDeProducto);



            contenedorDeCarrito.appendChild(divProducto);

            
            actualizarFactura()


            ubicacionDeElementosEnCarrito++;
        }
    )
    ubicacionDeElementosEnCarrito=0;
}

function añadirAlCarritoDisplay2(){
    if (productosEnCarrito.length === 0){
        categorias[indiceCategoria].productos[indiceDisplay2].cantidadEnCarrito++;
        productosEnCarrito.push(categorias[indiceCategoria].productos[indiceDisplay2]);
    }else{
        let productoEnCarrito = productosEnCarrito.find(producto => producto.id === categorias[indiceCategoria].productos[indiceDisplay2].id);
        if (productoEnCarrito){
            productoEnCarrito.cantidadEnCarrito++;
        }else{
            categorias[indiceCategoria].productos[indiceDisplay2].cantidadEnCarrito++;
            productosEnCarrito.push(categorias[indiceCategoria].productos[indiceDisplay2]);
        }
    }
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    contenedorDeCarrito.innerHTML=``;
    productosEnCarrito.map(
        (indiceDeProducto)=>{

            let divProducto = document.createElement("div");
            divProducto.setAttribute("id", `${ubicacionDeElementosEnCarrito}`);
            idDeLaUbicacion[ubicacionDeElementosEnCarrito] = indiceDeProducto.id;

            let parrafoNombreDeProducto = document.createElement("p");
            let imagenDeProducto = document.createElement("img");
            let parrafoPrecioProductoEnCarrito = document.createElement("p");
            let parrafoCantidadEnCarritoDeProducto = document.createElement("p");
            let contenedorTitulo_y_RemoverProducto = document.createElement("p");
            let removerProducto = document.createElement("p");
            
            parrafoNombreDeProducto.innerText = `${indiceDeProducto.titulo}`;
            removerProducto.innerHTML = '<span onclick="removerElementoDelCarrito(this)" class="material-symbols-outlined">remove</span>';
            contenedorTitulo_y_RemoverProducto.appendChild(parrafoNombreDeProducto);
            contenedorTitulo_y_RemoverProducto.appendChild(removerProducto)


            imagenDeProducto.src = `${indiceDeProducto.imagen}`;
            parrafoPrecioProductoEnCarrito.innerText = `Precio: ${indiceDeProducto.precio}$`;
            parrafoCantidadEnCarritoDeProducto.innerText = `Cantidad a comprar: ${indiceDeProducto.cantidadEnCarrito}`;


            divProducto.classList.add("flex", "flex-col", "justify-between", "bg-white", "rounded-lg", "p-[10px]", "w-[100%]", "min-[300px]:h-[90%]", "min-[400px]:h-[90%]", "sm:h-[100%]","lg:h-[80%]");
            contenedorTitulo_y_RemoverProducto.classList.add("flex", "justify-between", "items-center", "h-[10%]");
            parrafoNombreDeProducto.classList.add("text-[1rem]");
            imagenDeProducto.classList.add("h-[80%]");
            parrafoPrecioProductoEnCarrito.classList.add("h-[5%]");
            parrafoCantidadEnCarritoDeProducto.classList.add("h-[5%]");
            removerProducto.classList.add("select-none", "hover:cursor-pointer")


            divProducto.appendChild(contenedorTitulo_y_RemoverProducto);
            divProducto.appendChild(imagenDeProducto);
            divProducto.appendChild(parrafoPrecioProductoEnCarrito);
            divProducto.appendChild(parrafoCantidadEnCarritoDeProducto);



            contenedorDeCarrito.appendChild(divProducto);

            ubicacionDeElementosEnCarrito++;
            
            actualizarFactura();
        }
    )
    ubicacionDeElementosEnCarrito=0;
};

function añadirAlCarritoDisplay3(){
    if (productosEnCarrito.length === 0){
        categorias[indiceCategoria].productos[indiceDisplay3].cantidadEnCarrito++;
        productosEnCarrito.push(categorias[indiceCategoria].productos[indiceDisplay3]);
    }else{
        let productoEnCarrito = productosEnCarrito.find(producto => producto.id === categorias[indiceCategoria].productos[indiceDisplay3].id);
        if (productoEnCarrito){
            productoEnCarrito.cantidadEnCarrito++;
        }else{
            categorias[indiceCategoria].productos[indiceDisplay3].cantidadEnCarrito++;
            productosEnCarrito.push(categorias[indiceCategoria].productos[indiceDisplay3]);
        }
    }
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    contenedorDeCarrito.innerHTML=``;
    productosEnCarrito.map(
        (indiceDeProducto)=>{
            let divProducto = document.createElement("div");
            divProducto.setAttribute("id", `${ubicacionDeElementosEnCarrito}`);
            idDeLaUbicacion[ubicacionDeElementosEnCarrito] = indiceDeProducto.id;


            let parrafoNombreDeProducto = document.createElement("p");
            let imagenDeProducto = document.createElement("img");
            let parrafoPrecioProductoEnCarrito = document.createElement("p");
            let parrafoCantidadEnCarritoDeProducto = document.createElement("p");
            let contenedorTitulo_y_RemoverProducto = document.createElement("p");
            let removerProducto = document.createElement("p");
            
            parrafoNombreDeProducto.innerText = `${indiceDeProducto.titulo}`;
            removerProducto.innerHTML = '<span onclick="removerElementoDelCarrito(this)" class="material-symbols-outlined">remove</span>';
            contenedorTitulo_y_RemoverProducto.appendChild(parrafoNombreDeProducto);
            contenedorTitulo_y_RemoverProducto.appendChild(removerProducto)


            imagenDeProducto.src = `${indiceDeProducto.imagen}`;
            parrafoPrecioProductoEnCarrito.innerText = `Precio: ${indiceDeProducto.precio}$`;
            parrafoCantidadEnCarritoDeProducto.innerText = `Cantidad a comprar: ${indiceDeProducto.cantidadEnCarrito}`;


            divProducto.classList.add("flex", "flex-col", "justify-between", "bg-white", "rounded-lg", "p-[10px]", "w-[100%]", "min-[300px]:h-[90%]", "min-[400px]:h-[90%]", "sm:h-[100%]","lg:h-[80%]");
            contenedorTitulo_y_RemoverProducto.classList.add("flex", "justify-between", "items-center", "h-[10%]");
            parrafoNombreDeProducto.classList.add("text-[1rem]");
            imagenDeProducto.classList.add("h-[80%]");
            parrafoPrecioProductoEnCarrito.classList.add("h-[5%]");
            parrafoCantidadEnCarritoDeProducto.classList.add("h-[5%]");
            removerProducto.classList.add("select-none", "hover:cursor-pointer")
90

            divProducto.appendChild(contenedorTitulo_y_RemoverProducto);
            divProducto.appendChild(imagenDeProducto);
            divProducto.appendChild(parrafoPrecioProductoEnCarrito);
            divProducto.appendChild(parrafoCantidadEnCarritoDeProducto);



            contenedorDeCarrito.appendChild(divProducto);



            ubicacionDeElementosEnCarrito++;
            actualizarFactura();
        }
    )
    ubicacionDeElementosEnCarrito=0;
};

function añadirAlCarritoDisplay4(){
    if (productosEnCarrito.length === 0){
        categorias[indiceCategoria].productos[indiceDisplay4].cantidadEnCarrito++;
        productosEnCarrito.push(categorias[indiceCategoria].productos[indiceDisplay4]);
    }else{
        let productoEnCarrito = productosEnCarrito.find(producto => producto.id === categorias[indiceCategoria].productos[indiceDisplay4].id);
        if (productoEnCarrito){
            productoEnCarrito.cantidadEnCarrito++;
        }else{
            categorias[indiceCategoria].productos[indiceDisplay4].cantidadEnCarrito++;
            productosEnCarrito.push(categorias[indiceCategoria].productos[indiceDisplay4]);
        }
    }
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    contenedorDeCarrito.innerHTML=``;
    productosEnCarrito.map(
        (indiceDeProducto)=>{
            let divProducto = document.createElement("div");
            divProducto.setAttribute("id", `${ubicacionDeElementosEnCarrito}`);
            idDeLaUbicacion[ubicacionDeElementosEnCarrito] = indiceDeProducto.id;


            let parrafoNombreDeProducto = document.createElement("p");
            let imagenDeProducto = document.createElement("img");
            let parrafoPrecioProductoEnCarrito = document.createElement("p");
            let parrafoCantidadEnCarritoDeProducto = document.createElement("p");
            let contenedorTitulo_y_RemoverProducto = document.createElement("p");
            let removerProducto = document.createElement("p");
            
            parrafoNombreDeProducto.innerText = `${indiceDeProducto.titulo}`;
            removerProducto.innerHTML = '<span onclick="removerElementoDelCarrito(this)" class="material-symbols-outlined">remove</span>';
            contenedorTitulo_y_RemoverProducto.appendChild(parrafoNombreDeProducto);
            contenedorTitulo_y_RemoverProducto.appendChild(removerProducto)


            imagenDeProducto.src = `${indiceDeProducto.imagen}`;
            parrafoPrecioProductoEnCarrito.innerText = `Precio: ${indiceDeProducto.precio}$`;
            parrafoCantidadEnCarritoDeProducto.innerText = `Cantidad a comprar: ${indiceDeProducto.cantidadEnCarrito}`;


            divProducto.classList.add("flex", "flex-col", "justify-between", "bg-white", "rounded-lg", "p-[10px]", "w-[100%]", "min-[300px]:h-[90%]", "min-[400px]:h-[90%]", "sm:h-[100%]","lg:h-[80%]");
            contenedorTitulo_y_RemoverProducto.classList.add("flex", "justify-between", "items-center", "h-[10%]");
            parrafoNombreDeProducto.classList.add("text-[1rem]");
            imagenDeProducto.classList.add("h-[80%]");
            parrafoPrecioProductoEnCarrito.classList.add("h-[5%]");
            parrafoCantidadEnCarritoDeProducto.classList.add("h-[5%]");
            removerProducto.classList.add("select-none", "hover:cursor-pointer")


            divProducto.appendChild(contenedorTitulo_y_RemoverProducto);
            divProducto.appendChild(imagenDeProducto);
            divProducto.appendChild(parrafoPrecioProductoEnCarrito);
            divProducto.appendChild(parrafoCantidadEnCarritoDeProducto);



            contenedorDeCarrito.appendChild(divProducto);




            ubicacionDeElementosEnCarrito++;
            actualizarFactura();
        }
    )
    ubicacionDeElementosEnCarrito=0;
};

function removerTodoDelCarrito (){
    const miDiv = document.getElementById('contenedorDeCarrito');
    while (miDiv.firstChild) {
        miDiv.removeChild(miDiv.firstChild);
    }
    productosEnCarrito=[];
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
}

function removerElementoDelCarrito(boton) {
    // let divARemover = this.parentNode;
    let divARemover = boton.parentNode; /* caracter - */
    let padre = divARemover.parentNode; /* contenedor titulo item y caracter - */
    let display = padre.parentNode; /* display del producto */
    let contenedor = display.parentNode; /* contenedor de todos los displays en el carrito */
    
    let displayID = document.getElementById(`${display.id}`);
    let contenedorID = document.getElementById(`${contenedor.id}`);

    contenedorID.removeChild(displayID);
    

    if (contenedorDeCarrito.childElementCount === 0){
        carritoCrudo=[];
        idDeLaUbicacion=[];
    }else{
        carritoCrudo = productosEnCarrito.filter(producto =>  producto.id !== idDeLaUbicacion[display.id])
    }

    productosEnCarrito = carritoCrudo;
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    actualizarFactura()
    carritoCrudo=[];
};

// Codigo añadir y remover elementos del carrito - inicio

// Codigo realizar compra - inicio

function actualizarFactura(){
    // Agregando los productos a la factura
    let contador = 0;
    let total = 0;
    let IVA = 0;
    let IVA2D = 0;
    let totalFinal = 0;
    contenedorDescripcion.innerHTML=``;
    contenedorCantidad.innerHTML=``;
    contenedorMontos.innerHTML=``;
    // if (productosEnCarrito.isEmpty()){
    //     montoTotal=0;
    // }else{
        productosEnCarrito.map(
            (indiceDeProducto)=>{
                let parrafoNombreDeProductoEnFactura = document.createElement("p");
                let parrafoCantidadDeProductoEnFactura = document.createElement("p");
                let parrafoMontoDeProductoEnFactura = document.createElement("p");
        
                parrafoNombreDeProductoEnFactura.innerText = `${indiceDeProducto.titulo}`;
                parrafoCantidadDeProductoEnFactura.innerText = `${indiceDeProducto.cantidadEnCarrito}`;
                montoTotal[contador] = indiceDeProducto.cantidadEnCarrito * indiceDeProducto.precio;
                parrafoMontoDeProductoEnFactura.innerText = `${montoTotal[contador]}$`;
        
                contenedorDescripcion.appendChild(parrafoNombreDeProductoEnFactura);
                contenedorCantidad.appendChild(parrafoCantidadDeProductoEnFactura);
                contenedorMontos.appendChild(parrafoMontoDeProductoEnFactura);
                contador++;
            }
        )
    // }
    contador = 0;    
    // let parrafoTotalBase = document.getElementById("facturaTotalBase");
    // let parrafoIVA = document.getElementById("facturaTotalIVA");
    // let parrafoTotalFinal = document.getElementById("facturaTotalFinal");
    total = montoTotal.reduce((anterior, actual) =>anterior + actual, 0);
    IVA = (total * 0.16);
    IVA2D = IVA.toFixed(2)
    totalFinal = total + IVA;
    document.getElementById("facturaTotalBase").innerText = `${total}`;
    document.getElementById("facturaTotalIVA").innerText = `${IVA2D}`;
    document.getElementById("facturaTotalFinal").innerText = `${totalFinal}`;
}

// Codigo realizar compra - final



// Codigo Ver Descripcion y Cerrar Descripcion - inicio
// Codigo Ver Descripcion y Cerrar Descripcion - final


// Codigo mostrar pantalla principal - Inicio
function principal (){
        let fondoCategoria = document.getElementById("fondoCategoria");
        fondoCategoria.style.backgroundImage = `url(${categorias[indiceCategoria].fondo})`;
        let tituloCategoria = document.getElementById("tituloCategoria");
        tituloCategoria.innerText = `${categorias[indiceCategoria].titulo}`;

        

        let imagenProductoDisplay = document.getElementsByClassName("imagenProductoDisplay");
        imagenProductoDisplay[0].style.backgroundImage = `url('${categorias[indiceCategoria].productos[indiceDisplay1].imagen}')`;
        imagenProductoDisplay[1].style.backgroundImage = `url('${categorias[indiceCategoria].productos[indiceDisplay2].imagen}')`;
        imagenProductoDisplay[2].style.backgroundImage = `url('${categorias[indiceCategoria].productos[indiceDisplay3].imagen}')`;
        imagenProductoDisplay[3].style.backgroundImage = `url('${categorias[indiceCategoria].productos[indiceDisplay4].imagen}')`;

        
        let titulosProductosDisplays = document.getElementsByClassName("tituloProducto");
        titulosProductosDisplays[0].innerText = `${categorias[indiceCategoria].productos[indiceDisplay1].titulo}`;
        titulosProductosDisplays[1].innerText = `${categorias[indiceCategoria].productos[indiceDisplay2].titulo}`;
        titulosProductosDisplays[2].innerText = `${categorias[indiceCategoria].productos[indiceDisplay3].titulo}`;
        titulosProductosDisplays[3].innerText = `${categorias[indiceCategoria].productos[indiceDisplay4].titulo}`;

        let precioProductosDisplays = document.getElementsByClassName("precioProducto");
        precioProductosDisplays[0].innerText = `Precio: ${categorias[indiceCategoria].productos[indiceDisplay1].precio}$`;
        precioProductosDisplays[1].innerText = `Precio: ${categorias[indiceCategoria].productos[indiceDisplay2].precio}$`;
        precioProductosDisplays[2].innerText = `Precio: ${categorias[indiceCategoria].productos[indiceDisplay3].precio}$`;
        precioProductosDisplays[3].innerText = `Precio: ${categorias[indiceCategoria].productos[indiceDisplay4].precio}$`;

        let cantidadDisponibleProductosDisplays = document.getElementsByClassName("cantidadDisponibleProducto");
        cantidadDisponibleProductosDisplays[0].innerText = `Cantidad disponible: ${categorias[indiceCategoria].productos[indiceDisplay1].cantidadDisponible}`;
        cantidadDisponibleProductosDisplays[1].innerText = `Cantidad disponible: ${categorias[indiceCategoria].productos[indiceDisplay2].cantidadDisponible}`;
        cantidadDisponibleProductosDisplays[2].innerText = `Cantidad disponible: ${categorias[indiceCategoria].productos[indiceDisplay3].cantidadDisponible}`;
        cantidadDisponibleProductosDisplays[3].innerText = `Cantidad disponible: ${categorias[indiceCategoria].productos[indiceDisplay4].cantidadDisponible}`;

        let titulosDescripcionProductosDisplays = document.getElementsByClassName("tituloDescripcionProducto");
        titulosDescripcionProductosDisplays[0].innerText = `${categorias[indiceCategoria].productos[indiceDisplay1].titulo}`;
        titulosDescripcionProductosDisplays[1].innerText = `${categorias[indiceCategoria].productos[indiceDisplay2].titulo}`;
        titulosDescripcionProductosDisplays[2].innerText = `${categorias[indiceCategoria].productos[indiceDisplay3].titulo}`;
        titulosDescripcionProductosDisplays[3].innerText = `${categorias[indiceCategoria].productos[indiceDisplay4].titulo}`;

        let imagenDescripcionProductoDisplay = document.getElementsByClassName("imagenDescripcionProductoDisplay");
        imagenDescripcionProductoDisplay[0].style.backgroundImage = `url('${categorias[indiceCategoria].productos[indiceDisplay1].imagen}')`;
        imagenDescripcionProductoDisplay[1].style.backgroundImage = `url('${categorias[indiceCategoria].productos[indiceDisplay2].imagen}')`;
        imagenDescripcionProductoDisplay[2].style.backgroundImage = `url('${categorias[indiceCategoria].productos[indiceDisplay3].imagen}')`;
        imagenDescripcionProductoDisplay[3].style.backgroundImage = `url('${categorias[indiceCategoria].productos[indiceDisplay4].imagen}')`;

        // let parrafoDescripcionProductosDisplays = document.getElementsByClassName("parrafoDescripcionProducto");
        // parrafoDescripcionProductosDisplays[0].innerText = `${categorias[indiceCategoria].productos[indiceDisplay1].descripcion}`;
        // parrafoDescripcionProductosDisplays[1].innerText = `${categorias[indiceCategoria].productos[indiceDisplay2].descripcion}`;
        // parrafoDescripcionProductosDisplays[2].innerText = `${categorias[indiceCategoria].productos[indiceDisplay3].descripcion}`;
        // parrafoDescripcionProductosDisplays[3].innerText = `${categorias[indiceCategoria].productos[indiceDisplay4].descripcion}`;
}
principal();
// Codigo mostrar pantalla principal - Inicio







// Reloj y Calendario - inicio
function showClock(){
    let date = new Date();
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    let clock = `${hours} : ${minutes} : ${seconds}`;
    document.getElementById("clock").textContent = clock;
    document.getElementById("relojFactura").textContent = clock;
}

function showCalendar(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let calendar = `${day}/${month}/${year}`;
    document.getElementById("calendar").textContent = calendar;
    document.getElementById("fechaFactura").textContent = calendar;
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
