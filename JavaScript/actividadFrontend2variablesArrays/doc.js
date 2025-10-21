let lista=[];

for (let index = 0; index < 5; index++) {
    let elemnto= prompt("Ingrese el elemento");

    lista.push(elemnto);
    
}

console.log("el punto 1 es:" , lista);


lista.unshift(28);
lista.push("Arbol");
lista.splice(1,1);

console.log("la lista actualizada es: ", lista);
let max =0;
    let palabraMax = null;
lista.forEach(element => {
    

    if (typeof element === "string") {
       let conteo=element.length;
        console.log("la palabra ",element ,"tiene " , conteo);

        if (element.toLowerCase().includes("a")) {console.log("el elemnto ",element, " inclye a" )}
    if (conteo> max) { max = conteo;
        palabraMax= element;
        
    }

        
     
        
    }
});console.log("la palabra mas larga es ", palabraMax);

let lista2=["leugiM", "eusoJ", "oiggaB"];
let listaPalabr=[];

let listainvertidaFinali=[];

lista2.forEach(element => {
    let listainVertida=[];
 listaPalabr= element.split("");
    for (let index = 0; index < listaPalabr.length; index++) {
        listainVertida.unshift(listaPalabr[index])
        
    }
    listainvertidaFinali.push(listainVertida.join(""));
});

console.log(listainvertidaFinali);
alert("La lista invertida es: " + listainvertidaFinali.join(", "));