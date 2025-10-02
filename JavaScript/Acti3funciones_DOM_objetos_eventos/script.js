//Punto1
function calcularCuadrado (numero) {
    const cuadrado= numero*numero;
    return cuadrado
    
}

console.log(calcularCuadrado(11));//Funcion declarativa

const cubo = function calcularCubo(numero) {
    return numero*numero*numero;
    
}
console.log(cubo(3));//Funcion expresada 
//punto 2 

const datosPersonales =(nombre,edad=18)=>console.log("Hola ",nombre," tienes ", edad, " años" )

datosPersonales("Miguel");//Funcion

//Punto 3
class persona{
constructor(nombre,edad){
this.nombre=nombre; 
this.edad=edad;

}
presentar(){
    console.log("Hola mi nombre es ",this.nombre," Y y mi edad es ", this.edad)
}
}

let persona1 = new persona("Miguel",39)
persona1.presentar();


//punto 4

 let {nombre,edad}=persona1;
 console.log(nombre); //Desestructuracion
 console.log(edad);


 //punto5

 let lista1 = [1,2,3,15];
 let lista2 = [...lista1,4,1,99,500];//Operador Spread

 console.log(lista2);

 function sumar(...numeros) {
    return numeros.reduce((a,b)=>a+b,0);  //Operador rest

    
 }
   console.log(sumar(2,4,4,7,8,9)); 
   console.log(sumar(20,35));

   //punto6
   //Dom
   const body = document.querySelector("body");
   const AgregarTitulo=document.createElement("h1");  //crear titulo
   AgregarTitulo.textContent="Este es mi primer DOOM";
   body.appendChild(AgregarTitulo);
    
   const listaDesordenada = document.querySelector("body");
const agregarUl = document.createElement("ul");

const item1 = document.createElement("li");
item1.textContent = "Elemento 1";
                                                       //Crear listas con dos elementos 
const item2 = document.createElement("li");
item2.textContent = "Elemento 2";

agregarUl.appendChild(item1);
agregarUl.appendChild(item2);                     

listaDesordenada.appendChild(agregarUl);



AgregarTitulo.classList.add("negrita");//Agregar clases.

//punto7 evento clicck

const input = document.getElementById("ingreso")
const boton = document.getElementById("boton");

boton.addEventListener("click",()=>{
    const lista1= document.createElement("li");
    lista1.textContent= input.value;
    agregarUl.appendChild(lista1);
    
})

//punto8 

const form = document.querySelector("form"); 

const input2 = document.getElementById("ingreso2")
const boton2 = document.getElementById("boton2");
form.addEventListener("submit", (event) => {
event.preventDefault();

console.log("Procesando datos...");
});

boton2.addEventListener("click", (e) => {
    e.preventDefault(); // evita que recargue el form
    if (input2.value.trim() !== "") {
        alert(input2.value);
    }
});


//punto9

input.addEventListener("keydown",()=>{
    const lista3= document.createElement("li"); //Agrego elemntos a lislita con enter
    lista3.textContent= input.value;
    agregarUl.appendChild(lista3);
    
})
const opciones = document.getElementById("opciones");

opciones.addEventListener("change", () => {
    const parrafo = document.createElement("p"); ///Agrego en un parrafo las opciones
    parrafo.textContent = opciones.value; 
    body.appendChild(parrafo);
});
