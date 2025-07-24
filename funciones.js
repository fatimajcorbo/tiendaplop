// JavaScript Document

//roll over de imagenescuerpo
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}



function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//validacion formulario
function MM_validateForm() { //v4.0
  if (document.getElementById){
    var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments;
    for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=document.getElementById(args[i]);
      if (val) { nm=val.name; if ((val=val.value)!="") {
        if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
          if (p<1 || p==(val.length-1)) errors+='- '+nm+' debe contener una direccion de email v�lida.\n';
        } else if (test!='R') { num = parseFloat(val);
          if (isNaN(val)) errors+='- '+nm+' debe contener un n�mero.\n';
          if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
            min=test.substring(8,p); max=test.substring(p+1);
            if (num<min || max<num) errors+='- '+nm+' debe contener un numero entre '+min+' y '+max+'.\n';
      } } } else if (test.charAt(0) == 'R') errors += '- '+nm+' es obligatorio.\n'; }
    } if (errors) alert('ocurrieron los siguientes errores:\n'+errors);
    document.MM_returnValue = (errors == '');
} }

// abre ventana nueva
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

// script 

//se crea un timer y una veriable numerica
var timer=setTimeout('cambiarimg()',1000);
var num = 1;
// se le suma 1 y si es 5 vuelve a 0, luego se filtra ese numero en un case y dependiendo el mismo se modifica el src del banner




function cambiarimg(){
num++
if(num==4){
num=0;
if(num==0){
num=1;
}
}

switch(num){
	//  URL que indica el path o ruta del documento actual en el servidor
	case 1:
	       if(document.location == 'https://fatimajcorbo.github.io/tiendaplop/' ){
		   document.getElementById('frase').src = 'img/frase1.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else if(document.location == 'https://fatimajcorbo.github.io/tiendaplop/index.html' ){
		   document.getElementById('frase').src = 'img/frase1.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else{  
		   document.getElementById('frase').src = '../img/frase1.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }
		   break;
	
	case 2: 
		   if(document.location == 'https://fatimajcorbo.github.io/tiendaplop/' ){
		   document.getElementById('frase').src = 'img/frase2.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else if(document.location == 'https://fatimajcorbo.github.io/tiendaplop/index.html' ){
		   document.getElementById('frase').src = 'img/frase2.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else{  
		   document.getElementById('frase').src = '../img/frase2.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }
		   break;
	  
	 case 3: 
		   if(document.location == 'https://fatimajcorbo.github.io/tiendaplop/' ){
		   document.getElementById('frase').src = 'img/frase3.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else if(document.location == 'https://fatimajcorbo.github.io/tiendaplop/index.html' ){
		   document.getElementById('frase').src = 'img/frase3.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }else{  
		   document.getElementById('frase').src = '../img/frase3.png';
		   var timer2=setTimeout('cambiarimg()',3000);
		   }
		   break;
 }
}


const productos = [
    {
        id: "01",
        imagen: "img/ACEITE-DE-PEPITAS-DE-UVA.jpg",
        alt: "Foto de un envase de crema",
        nombre: "Aceite de semillas de uva",
        precio: 5000
    },
    {
        id: "02",
        imagen: "img/CREMA-HIDRATANTE-CON-EXTRACTO-DE-UVA.jpg",
        nombre: "Crema hidratante",
        precio: 7000
    },
    {
        id: "03",
        imagen: "img/EXFOLIANTE-DE-SEMILLAS-DE-UVA.webp",
        nombre: "Exfoliante de semillas de uva",
        precio: 4000
    },    
];

// Función de comparación para ordenar productos por ID de forma ascendente.
// Para usar con sort
function compararProductosPorIdAscendente(a, b) {
    if(a.id < b.id) {
        return 1;
    }
    if(a.id > b.id) {
        return -1;
    }
    return 0;
}

// Ordenar los productos por ID de forma descendente
productos.sort(compararProductosPorIdAscendente);

// Array para almacenar los productos en el carrito
let carrito = [];

// Agrega un producto al carrito o incrementa su cantidad si ya existe.
function agregarProductoAlCarrito(idProducto) {
        // Buscar si el producto ya está en el carrito
        let productoEnCarrito = null;
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break; // Salir del bucle una vez que se encuentra el producto
        }
    }

    if (productoEnCarrito) {
        // Si el producto ya está, incrementar la cantidad
        productoEnCarrito.cantidad++;
    } else {
        // Si no está, buscar el producto en el array 'productos' original
        let productoOriginal = null;
        for (let i = 0; i < productos.length; i++) {
            if (productos[i].id === idProducto) {
                productoOriginal = productos[i];
                break; // Salir del bucle
            }
        }        
        
        // Añadir el producto al carrito con cantidad 1
        carrito.push({ ...productoOriginal, cantidad: 1 });
    }
    actualizarCarritoHTML(); // Actualizar la vista del carrito
}

// Maneja el evento de clic en los botones "Comprar".
function manejarClicComprar(evento) {    
    const productoId = evento.target.dataset.id;
    agregarProductoAlCarrito(productoId);    
}

// Agrega los productos del array 'productos' al DOM y configura los listeners de "Comprar".
function agregarProductos() {
    const divProductos = document.querySelector(".productos");

    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];

        divProductos.insertAdjacentHTML("afterbegin",
            `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-contenido">
                    <h4>${producto.nombre}</h4>
                    <span>Código: ${producto.id}</span>
                    <span>Precio: $ ${producto.precio}</span>
                    <button class="btn-comprar" type="button" data-id="${producto.id}">Comprar</button>
                </div>
            </div>
            `
        );
    }

    // Delegación de eventos para los botones "Comprar"
    divProductos.addEventListener("click", manejarClicComprar); //handler
}

// Maneja el evento de clic en los botones de cantidad y eliminar del carrito.
function manejarClicCarrito(evento) {
    const target = evento.target;

    if (target.classList.contains("btn-cantidad") || target.classList.contains("btn-eliminar")) {
        const productoId = target.dataset.id;
        const accion = target.dataset.action;

        if (accion === "eliminar") {
            eliminarProductoDelCarrito(productoId);
        } else if (accion === "restar") {
            restarCantidadProducto(productoId);
        } else if (accion === "sumar") {
            sumarCantidadProducto(productoId);
        }
    }
}

// Actualiza el contenido HTML del carrito de compras basado en el array 'carrito'.
function actualizarCarritoHTML() {
    const carritoCompras = document.querySelector(".carritoCompras");

    if (!carritoCompras) {
        console.error("Error: No se encontró el contenedor con la clase 'CarritoCompras'. Asegúrate de que exista en tu HTML.");
        return;
    }

    // Limpiar el contenido actual del carrito y recrear la estructura base
    carritoCompras.innerHTML = `
        <h2>Tu Carrito de Compras</h2>
        <ul class="lista-carrito"></ul>
        <p class="total-carrito"></p>
        <p class="cantidad-carrito"></p>
    `;
    
    const listaCarrito = carritoCompras.querySelector(".lista-carrito");
    let totalPagar = 0;
    let cantidadProductosUnicos = 0;

    // Verificar si el carrito está vacío
    if (carrito.length === 0) {
        listaCarrito.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        for (let i = 0; i < carrito.length; i++) {
            const item = carrito[i];
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item.nombre} - $${item.precio} x ${item.cantidad}</span>
                <div>
                    <button class="btn-cantidad" data-id="${item.id}" data-action="restar">-</button>
                    <button class="btn-cantidad" data-id="${item.id}" data-action="sumar">+</button>
                    <button class="btn-eliminar" data-id="${item.id}" data-action="eliminar">x</button>
                </div>
            `;
            listaCarrito.appendChild(li);
            totalPagar += item.precio * item.cantidad;
            cantidadProductosUnicos++;
        }
    }

    // Mostrar el total a pagar y la cantidad de productos
    carritoCompras.querySelector(".total-carrito").textContent = `Total a pagar: $${totalPagar}`;
    carritoCompras.querySelector(".cantidad-carrito").textContent = `Productos en carrito: ${cantidadProductosUnicos}`;

    // Configurar el Event Listener para los botones de cantidad y eliminar
    const nuevoListaCarrito = carritoCompras.querySelector(".lista-carrito");
    nuevoListaCarrito.addEventListener("click", manejarClicCarrito);
}

// Suma una unidad a la cantidad de un producto en el carrito.
function sumarCantidadProducto(idProducto) {
    let productoEnCarrito = null;

    // Buscar el producto en el carrito
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break;
        }
    }

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
        actualizarCarritoHTML(); // Actualizar la vista
    }
}

// Resta una unidad a la cantidad de un producto en el carrito.
function restarCantidadProducto(idProducto) {
    let productoEnCarrito = null;
    // Buscar el producto en el carrito
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].id === idProducto) {
            productoEnCarrito = carrito[i];
            break;
        }
    }

    if (productoEnCarrito) {
        productoEnCarrito.cantidad--;
        if (productoEnCarrito.cantidad <= 0) {
            eliminarProductoDelCarrito(idProducto); // Eliminar si la cantidad llega a 0
        } else {
            actualizarCarritoHTML(); // Solo actualizar si la cantidad aún es positiva
        }
    }
}

// Elimina completamente un producto del carrito.
function eliminarProductoDelCarrito(idProducto) {
    // Reconstruir el array carrito sin el producto a eliminar
    const nuevoCarrito = [];
    for (let i = 0; i < carrito.length; i++) {
        // Buscar los elementos distintos al que hay que eliminar
        if (carrito[i].id !== idProducto) {
            nuevoCarrito.push(carrito[i]);
        }
    }
    carrito = nuevoCarrito;
    actualizarCarritoHTML();
}


// Inicializar la aplicación
agregarProductos();
actualizarCarritoHTML(); // Llamar al inicio para mostrar el carrito vacío si no hay productos