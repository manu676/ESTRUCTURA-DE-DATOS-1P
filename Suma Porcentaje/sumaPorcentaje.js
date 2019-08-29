var sueldo= document.querySelector("#sueldo");
var Ptexto = document.querySelector("#texto");
var btn = document.querySelector("#btnAdd");

btn.addEventListener("click",sumaPorcentaje);

function sumaPorcentaje (){
    let sueldoGeneral = Number(sueldo.value);
    let respuesta = Ptexto;
    let aumento = 0;
    let resultado = 0;
    if(sueldoGeneral>0 && sueldoGeneral <=1000){
        aumento = sueldoGeneral * 0.15;
        resultado = sueldoGeneral + aumento;
        respuesta.innerHTML =  sueldoGeneral + " con un aumento del 15%, es igual a:" + resultado;
    }
    else if (sueldoGeneral <=1200) {
        aumento= sueldoGeneral * 0.12;
        resultado = sueldoGeneral + aumento;
        respuesta.innerHTML= sueldoGeneral + " con un aumento del 12%, es igual a:" + resultado;
        
    }
    else if (sueldoGeneral <=1400) {
        aumento= sueldoGeneral * 0.10;
        resultado = sueldoGeneral + aumento;
        respuesta.innerHTML= sueldoGeneral + " con un aumento del 10%, es igual a:" + resultado;
        
    }
    else if (sueldoGeneral <=1500) {
        aumento= sueldoGeneral * 0.08;
        resultado = sueldoGeneral + aumento;
        respuesta.innerHTML= sueldoGeneral + " con un aumento del 8%, es igual a:" + resultado;
        
    }
    else if(sueldoGeneral >1500){
        aumento= sueldoGeneral * 0.05;
        resultado = sueldoGeneral + aumento;
        respuesta.innerHTML= sueldoGeneral + " con un aumento del 5%, es igual a:" + resultado;
        
    }
}