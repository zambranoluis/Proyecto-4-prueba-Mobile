// document.getElementById("cuerpo").innerHTML = ``;
let categorias = [
    {
        titulo: "Hogar Muebles y Cocina",
        fondo: "./imagenes/fondoHogar.jpg",
        productos: [
            {
                id: "101001",
                titulo: "Cocina1",
                imagen: "./imagenes/cocina1.png",
                precio: 60,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0
            },
            {
                id: "101002",
                titulo: "Cocina2",
                imagen: "./imagenes/cocina2.png",
                precio: 70,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0
            },
            {
                id: "101003",
                titulo: "Cocina3",
                imagen: "./imagenes/cocina3.png",
                precio: 80,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0
            },
            {
                id: "101004",
                titulo: "Microondas1",
                imagen: "./imagenes/microondas1.png",
                precio: 60,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "101005",
                titulo: "Microondas2",
                imagen: "./imagenes/microondas2.png",
                precio: 70,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "101006",
                titulo: "Microondas3",
                imagen: "./imagenes/microondas3.png",
                precio: 80,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "101007",
                titulo: "Microondas4",
                imagen: "./imagenes/microondas4.png",
                precio: 90,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "101008",
                titulo: "Nevera1",
                imagen: "./imagenes/nevera1.png",
                precio: 100,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
            {
                id: "101009",
                titulo: "Nevera2",
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
                titulo: "Tomate",
                imagen: "./imagenes/tomate.png",
                precio: 2,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201002",
                titulo: "Cebolla",
                imagen: "./imagenes/cebolla.png",
                precio: 2.5,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201003",
                titulo: "Brocoli",
                imagen: "./imagenes/brocoli.png",
                precio: 3,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201004",
                titulo: "Zanahoria",
                imagen: "./imagenes/zanahoria.png",
                precio: 3.5,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201005",
                titulo: "Carne1",
                imagen: "./imagenes/carne1.png",
                precio: 5,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201006",
                titulo: "Carne2",
                imagen: "./imagenes/carne2.png",
                precio: 5.5,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201007",
                titulo: "Pollo",
                imagen: "./imagenes/pollo.png",
                precio: 6,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "201008",
                titulo: "Sodas en Lata",
                imagen: "./imagenes/sodasLata.png",
                precio: 12,
                cantidadDisponible: 200,
                cantidadEnCarrito: 0
            },
            {
                id: "201009",
                titulo: "Jugo de Mango",
                imagen: "./imagenes/jugoMango.png",
                precio: 8,
                cantidadDisponible: 200,
                cantidadEnCarrito: 0
            },
            {
                id: "201010",
                titulo: "Jugo de Manzana",
                imagen: "./imagenes/jugoManzana.png",
                precio: 8,
                cantidadDisponible: 200,
                cantidadEnCarrito: 0
            },
            {
                id: "201011",
                titulo: "Chocolate Ferrero Rocher",
                imagen: "./imagenes/ferrero.png",
                precio: 15,
                cantidadDisponible: 300,
                cantidadEnCarrito: 0
            },
            {
                id: "201012",
                titulo: "Chocolate Snicker",
                imagen: "./imagenes/snicker.png",
                precio: 16,
                cantidadDisponible: 300,
                cantidadEnCarrito: 0
            },
            {
                id: "201013",
                titulo: "Chocolate Milky Way",
                imagen: "./imagenes/milkyway.png",
                precio: 17,
                cantidadDisponible: 300,
                cantidadEnCarrito: 0
            },
            {
                id: "201014",
                titulo: "Chocolate M&M",
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
                titulo: "PC 1",
                imagen: "./imagenes/pc1.png",
                precio: 800,
                cantidadDisponible: 50,
                cantidadEnCarrito: 0
            },
            {
                id: "301002",
                titulo: "PC 2",
                imagen: "./imagenes/pc2.png",
                precio: 900,
                cantidadDisponible: 50,
                cantidadEnCarrito: 0
            },
            {
                id: "301003",
                titulo: "PC 3",
                imagen: "./imagenes/pc3.png",
                precio: 1000,
                cantidadDisponible: 50,
                cantidadEnCarrito: 0
            },
            {
                id: "301004",
                titulo: "PC 4",
                imagen: "./imagenes/pc4.png",
                precio: 1100,
                cantidadDisponible: 50,
                cantidadEnCarrito: 0
            },
            {
                id: "301005",
                titulo: "Laptop 1",
                imagen: "./imagenes/laptop1.png",
                precio: 500,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "301006",
                titulo: "Laptop 2",
                imagen: "./imagenes/laptop2.png",
                precio: 550,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "301007",
                titulo: "Laptop 3",
                imagen: "./imagenes/laptop3.png",
                precio: 600,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "301008",
                titulo: "Laptop 4",
                imagen: "./imagenes/laptop4.png",
                precio: 700,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "301009",
                titulo: "PS4",
                imagen: "./imagenes/ps4.png",
                precio: 450,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
            {
                id: "301010",
                titulo: "PS5",
                imagen: "./imagenes/ps5.png",
                precio: 600,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
            {
                id: "301011",
                titulo: "Telefono 1",
                imagen: "./imagenes/telefono1.png",
                precio: 150,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "301012",
                titulo: "Telefono 2",
                imagen: "./imagenes/telefono2.png",
                precio: 250,
                cantidadDisponible: 90,
                cantidadEnCarrito: 0
            },
            {
                id: "301013",
                titulo: "Telefono 3",
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
                titulo: "Mujer 1",
                imagen: "./imagenes/mujer1.png",
                precio: 10,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "401002",
                titulo: "Mujer 2",
                imagen: "./imagenes/mujer2.png",
                precio: 8,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "401003",
                titulo: "Mujer 3",
                imagen: "./imagenes/mujer3.png",
                precio: 12,
                cantidadDisponible: 70,
                cantidadEnCarrito: 0
            },
            {
                id: "401004",
                titulo: "Hombre 1",
                imagen: "./imagenes/hombre1.png",
                precio: 5,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0
            },
            {
                id: "401005",
                titulo: "Hombre 2",
                imagen: "./imagenes/hombre2.png",
                precio: 6,
                cantidadDisponible: 100,
                cantidadEnCarrito: 0
            },
            {
                id: "401006",
                titulo: "Hombre 3",
                imagen: "./imagenes/hombre3.png",
                precio: 7,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "401007",
                titulo: "Niña 1",
                imagen: "./imagenes/niña1.png",
                precio: 8,
                cantidadDisponible: 80,
                cantidadEnCarrito: 0
            },
            {
                id: "401008",
                titulo: "Niña 2",
                imagen: "./imagenes/niña2.png",
                precio: 3,
                cantidadDisponible:50,
                cantidadEnCarrito: 0
            },
            {
                id: "401009",
                titulo: "Niña 3",
                imagen: "./imagenes/niña3.png",
                precio: 6,
                cantidadDisponible: 60,
                cantidadEnCarrito: 0
            },
            {
                id: "401010",
                titulo: "Niño 1",
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


// Codigo añadir y remover elementos del carrito - inicio
let productosEnCarrito = [];

let contadorDeCarrito = document.getElementById("contadorDeCarrito");

let contenedorDeCarrito = document.getElementById("contenedorDeCarrito")


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
    console.table(productosEnCarrito);
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    contenedorDeCarrito.innerHTML=``;
    productosEnCarrito.map(
        (indiceDeProducto)=>{
            let divProducto = document.createElement("div");


            let parrafoNombreDeProducto = document.createElement("p");
            let imagenDeProducto = document.createElement("img");
            let parrafoPrecioProductoEnCarrito = document.createElement("p");
            let parrafoCantidadEnCarritoDeProducto = document.createElement("p");
            let contenedorTitulo_y_RemoverProducto = document.createElement("p");
            let removerProducto = document.createElement("p");
            
            parrafoNombreDeProducto.innerText = `${indiceDeProducto.titulo}`;
            removerProducto.innerHTML = '<span class="material-symbols-outlined">remove</span>';
            contenedorTitulo_y_RemoverProducto.appendChild(parrafoNombreDeProducto);
            contenedorTitulo_y_RemoverProducto.appendChild(removerProducto)


            imagenDeProducto.src = `${indiceDeProducto.imagen}`;
            parrafoPrecioProductoEnCarrito.innerText = `Precio: ${indiceDeProducto.precio}$`;
            parrafoCantidadEnCarritoDeProducto.innerText = `Cantidad a comprar: ${indiceDeProducto.cantidadEnCarrito}`;


            divProducto.classList.add("flex", "flex-col", "justify-between", "bg-white", "rounded-lg", "p-[10px]", "w-[100%]", "min-[300px]:h-[80%]", "min-[400px]:h-[90%]", "sm:h-[100%]");
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
            
        }
    )
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
    console.table(productosEnCarrito);
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    contenedorDeCarrito.innerHTML=``;
    productosEnCarrito.map(
        (indiceDeProducto)=>{
            let divProducto = document.createElement("div");


            let parrafoNombreDeProducto = document.createElement("p");
            let imagenDeProducto = document.createElement("img");
            let parrafoPrecioProductoEnCarrito = document.createElement("p");
            let parrafoCantidadEnCarritoDeProducto = document.createElement("p");
            let contenedorTitulo_y_RemoverProducto = document.createElement("p");
            let removerProducto = document.createElement("p");
            
            parrafoNombreDeProducto.innerText = `${indiceDeProducto.titulo}`;
            removerProducto.innerHTML = '<span class="material-symbols-outlined">remove</span>';
            contenedorTitulo_y_RemoverProducto.appendChild(parrafoNombreDeProducto);
            contenedorTitulo_y_RemoverProducto.appendChild(removerProducto)


            imagenDeProducto.src = `${indiceDeProducto.imagen}`;
            parrafoPrecioProductoEnCarrito.innerText = `Precio: ${indiceDeProducto.precio}$`;
            parrafoCantidadEnCarritoDeProducto.innerText = `Cantidad a comprar: ${indiceDeProducto.cantidadEnCarrito}`;


            divProducto.classList.add("flex", "flex-col", "justify-between", "bg-white", "rounded-lg", "p-[10px]", "w-[100%]", "min-[300px]:h-[80%]", "min-[400px]:h-[90%]", "sm:h-[100%]");
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
            
        }
    )
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
    console.table(productosEnCarrito);
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    contenedorDeCarrito.innerHTML=``;
    productosEnCarrito.map(
        (indiceDeProducto)=>{
            let divProducto = document.createElement("div");


            let parrafoNombreDeProducto = document.createElement("p");
            let imagenDeProducto = document.createElement("img");
            let parrafoPrecioProductoEnCarrito = document.createElement("p");
            let parrafoCantidadEnCarritoDeProducto = document.createElement("p");
            let contenedorTitulo_y_RemoverProducto = document.createElement("p");
            let removerProducto = document.createElement("p");
            
            parrafoNombreDeProducto.innerText = `${indiceDeProducto.titulo}`;
            removerProducto.innerHTML = '<span class="material-symbols-outlined">remove</span>';
            contenedorTitulo_y_RemoverProducto.appendChild(parrafoNombreDeProducto);
            contenedorTitulo_y_RemoverProducto.appendChild(removerProducto)


            imagenDeProducto.src = `${indiceDeProducto.imagen}`;
            parrafoPrecioProductoEnCarrito.innerText = `Precio: ${indiceDeProducto.precio}$`;
            parrafoCantidadEnCarritoDeProducto.innerText = `Cantidad a comprar: ${indiceDeProducto.cantidadEnCarrito}`;


            divProducto.classList.add("flex", "flex-col", "justify-between", "bg-white", "rounded-lg", "p-[10px]", "w-[100%]", "min-[300px]:h-[80%]", "min-[400px]:h-[90%]", "sm:h-[100%]");
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
            
        }
    )
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
    console.table(productosEnCarrito);
    contadorDeCarrito.innerText = (`${productosEnCarrito.length}`);
    contenedorDeCarrito.innerHTML=``;
    productosEnCarrito.map(
        (indiceDeProducto)=>{
            let divProducto = document.createElement("div");


            let parrafoNombreDeProducto = document.createElement("p");
            let imagenDeProducto = document.createElement("img");
            let parrafoPrecioProductoEnCarrito = document.createElement("p");
            let parrafoCantidadEnCarritoDeProducto = document.createElement("p");
            let contenedorTitulo_y_RemoverProducto = document.createElement("p");
            let removerProducto = document.createElement("p");
            
            parrafoNombreDeProducto.innerText = `${indiceDeProducto.titulo}`;
            removerProducto.innerHTML = '<span class="material-symbols-outlined">remove</span>';
            contenedorTitulo_y_RemoverProducto.appendChild(parrafoNombreDeProducto);
            contenedorTitulo_y_RemoverProducto.appendChild(removerProducto)


            imagenDeProducto.src = `${indiceDeProducto.imagen}`;
            parrafoPrecioProductoEnCarrito.innerText = `Precio: ${indiceDeProducto.precio}$`;
            parrafoCantidadEnCarritoDeProducto.innerText = `Cantidad a comprar: ${indiceDeProducto.cantidadEnCarrito}`;


            divProducto.classList.add("flex", "flex-col", "justify-between", "bg-white", "rounded-lg", "p-[10px]", "w-[100%]", "min-[300px]:h-[80%]", "min-[400px]:h-[90%]", "sm:h-[100%]");
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
            
        }
    )
};

function removerProductoDelCarrito(){

}
// Codigo añadir y remover elementos del carrito - inicio


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


// Codigo mostrar pantalla principal - Inicio
    function principal (){
            document.getElementById("categoria").innerHTML = `
                <div id="categoria">
                    <div id="fondo" class="flex justify-center items-center w-full h-[360px] bg-[url('${categorias[indiceCategoria].fondo}')] gap-[5px]">
                        <span id="botonCambiarCategoriaIzquierda" onclick="cambiarCategoriaIzquierda()" class="material-symbols-outlined hover:cursor-pointer select-none h-[20%] flex justify-center items-center  bg-[black]/70 rounded text-white text-[4.5rem]">chevron_left</span>
                        <h1 class="w-[70%] h-[20%] select-none flex justify-center items-center font-bold text-white text-center bg-[black]/70 rounded-[5px] px-[5px] min-[360px]:text-[2.5rem] sm:text-[3rem] md:text-[4rem]">${categorias[indiceCategoria].titulo}</h1>
                        <span id="botonCambiarCategoriaDerecha" onclick="cambiarCategoriaDerecha()" class="material-symbols-outlined hover:cursor-pointer select-none h-[20%] flex justify-center items-center  bg-[black]/70 rounded text-white text-[4.5rem]">chevron_right</span>
                    </div>
                    <div class="flex mt-[10px]">
                            <span id="botonCambiarProductosIzquierda" onclick="botonCambiarProductosIzquierda()" class="material-symbols-outlined hover:cursor-pointer border h-[280px] flex items-center select-none text-white">arrow_back</span>
                        <div id="gridProductos" class="grid min-[300px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center h-[280px] w-full min-[300px]:bg-[#Efba34] min-[400px]:bg-[darkgray] sm:bg-[green] md:bg-[darkred] lg:bg-[blue] xl:bg-[white] gap-[3%] px-[10%]">
                            <div id="displayProducto" class="flex flex-col  flex px-[5px] py-[2.5%] justify-between h-[95%] w-[100%] bg-[gray]">
                                <h1 class="tituloProducto font-bold text-[1.3rem] h-[10%]">${categorias[indiceCategoria].productos[indiceDisplay1].titulo}</h1>
                                <div class="h-[65%] bg-contain bg-no-repeat bg-center bg-[url('${categorias[indiceCategoria].productos[indiceDisplay1].imagen}')]"></div>
                                <div id="precio_y_cantidad" class="h-[15%]">
                                    <h3 class="precioProducto">Precio: ${categorias[indiceCategoria].productos[indiceDisplay1].precio}$</h3>
                                    <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${categorias[indiceCategoria].productos[indiceDisplay1].cantidadDisponible}</h3>
                                </div>
                                <div class="flex justify-between items-center h-[10%]">
                                    <button class=" flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.6rem] min-[400px]:text-[0.8rem] md:text-[1rem]">Ver descripción</button>
                                    <button id="botonAñadirCarrito1" onclick="añadirAlCarritoDisplay1()" class=" flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.6rem]  min-[400px]:text-[0.8rem] md:text-[1rem]">Añadir al carrito</button>
                                </div>
                            </div>
                            <div id="displayProducto" class="flex flex-col  flex px-[5px] py-[2.5%] justify-between h-[95%] w-[100%] bg-[gray]">
                                <h1 class="tituloProducto font-bold text-[1.3rem] h-[10%]">${categorias[indiceCategoria].productos[indiceDisplay2].titulo}</h1>
                                <div class="h-[65%] bg-contain bg-no-repeat bg-center bg-[url('${categorias[indiceCategoria].productos[indiceDisplay2].imagen}')]"></div>
                                <div id="precio_y_cantidad" class="h-[15%]">
                                    <h3 class="precioProducto">Precio: ${categorias[indiceCategoria].productos[indiceDisplay2].precio}$</h3>
                                    <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${categorias[indiceCategoria].productos[indiceDisplay2].cantidadDisponible}</h3>
                                </div>
                                <div class="flex justify-between items-center h-[10%]">
                                    <button class=" flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.6rem] min-[400px]:text-[0.8rem] md:text-[1rem]">Ver descripción</button>
                                    <button id="botonAñadirCarrito2" onclick="añadirAlCarritoDisplay2()" class=" flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.6rem] min-[400px]:text-[0.8rem] md:text-[1rem]">Añadir al carrito</button>
                                </div>
                            </div>
                            <div id="displayProducto" class="hidden sm:flex flex-col  flex px-[5px] py-[2.5%] justify-between h-[95%] w-[100%] bg-[gray]">
                                <h1 class="tituloProducto font-bold text-[1.3rem] h-[10%]">${categorias[indiceCategoria].productos[indiceDisplay3].titulo}</h1>
                                <div class="h-[65%] bg-contain bg-no-repeat bg-center bg-[url('${categorias[indiceCategoria].productos[indiceDisplay3].imagen}')]"></div>
                                <div id="precio_y_cantidad" class="h-[15%]">
                                    <h3 class="precioProducto">Precio: ${categorias[indiceCategoria].productos[indiceDisplay3].precio}$</h3>
                                    <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${categorias[indiceCategoria].productos[indiceDisplay3].cantidadDisponible}</h3>
                                </div>
                                <div class="flex justify-between items-center h-[10%]">
                                    <button class=" flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.6rem] min-[400px]:text-[0.8rem] md:text-[1rem]">Ver descripción</button>
                                    <button id="botonAñadirCarrito3" onclick="añadirAlCarritoDisplay3()" class=" flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.6rem] min-[400px]:text-[0.8rem] md:text-[1rem]">Añadir al carrito</button>
                                </div>
                            </div>
                            <div id="displayProducto" class="hidden lg:flex flex-col  flex px-[5px] py-[2.5%] justify-between h-[95%] w-[100%] bg-[gray]">
                                <h1 class="tituloProducto font-bold text-[1.3rem] h-[10%]">${categorias[indiceCategoria].productos[indiceDisplay4].titulo}</h1>
                                <div class="h-[65%] bg-contain bg-no-repeat bg-center bg-[url('${categorias[indiceCategoria].productos[indiceDisplay4].imagen}')]"></div>
                                <div id="precio_y_cantidad" class="h-[15%]">
                                    <h3 class="precioProducto">Precio: ${categorias[indiceCategoria].productos[indiceDisplay4].precio}$</h3>
                                    <h3 class="cantidadDisponibleProducto">Cantidad disponible: ${categorias[indiceCategoria].productos[indiceDisplay4].cantidadDisponible}</h3>
                                </div>
                                <div class="flex justify-between items-center h-[10%]">
                                    <button class=" flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.6rem] min-[400px]:text-[0.8rem] md:text-[1rem]">Ver descripción</button>
                                    <button id="botonAñadirCarrito4" onclick="añadirAlCarritoDisplay4()" class=" flex text-center items-center bg-[red] rounded-lg px-[3px] min-[300px]:text-[0.6rem] min-[400px]:text-[0.8rem] md:text-[1rem]">Añadir al carrito</button>
                                </div>
                            </div>
                        </div>
                        <span id="botonCambiarProductosDerecha" onclick="botonCambiarProductosDerecha()" class="material-symbols-outlined hover:cursor-pointer border h-[280px] flex items-center select-none text-white">arrow_forward</span>
                    </div>
                </div>
            `;
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
