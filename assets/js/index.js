const boton=document.getElementById("clickBoton");
const cantidadProduct = document.getElementById("cantidad");
const colorInput=document.getElementById("color");
const precio= document.getElementById("precio").innerHTML;
const total= document.getElementById("totalCompra");
const cantidadTotal=document.getElementById("cantidadFinal");
const colorFinal=document.getElementById("showColor");

let colorElegido=null;
let productos="";
let totalCompra=null;

colorInput.addEventListener("change", (event)=>{
    colorElegido= event.target.value;
    console.log(colorElegido);
});

cantidadProduct.addEventListener("change", (event)=>{
    productos= event.target.value;
    console.log(productos);
});


boton.addEventListener("click", (event) =>{
    totalCompra = "$"+(productos * Number(precio));
    total.innerHTML=totalCompra;
    cantidadTotal.innerHTML= productos;
    colorFinal.style.backgroundColor=colorElegido;
});







