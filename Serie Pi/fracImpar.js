var saltos= document.querySelector("#saltos");
var Ptexto = document.querySelector("#texto");
var btn = document.querySelector("#btnAdd");

btn.addEventListener("click",fracPi);

function fracPi(){
    let n = Number(saltos.value);
    let respuesta = Ptexto;
    let base = 0;
    let imparDedo = 1;
    let signo = 1;
    for(var i =1; i<=n;i++){
        base+= (4/imparDedo)*signo;
        imparDedo+=2;
        signo*=-1;
        respuesta.innerHTML= base;
    }
}