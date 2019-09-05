document.querySelector('#btnCalcular').addEventListener('click', () => {
    //Get timeIn and timeOut
    let timeIn =document.querySelector('#timeIn').value;
    timeIn = timeIn.split(":");
    let timeOut = document.querySelector('#timeOut').value;
    timeOut = timeOut.split(":");
    var diferenceResult = 0;
    //Do secuence
    diferenceResult = CalculateDiference(timeIn, timeOut);
    console.log(timeIn);
    console.log(timeOut);
    //Show on screen
    document.querySelector('#result').value = diferenceResult;
});

function CalculateDiference(x, n) {
    let horai = x[0];
    let minutoi = x[1];
    let horaf = n[0];
    let minutof = n[1];

    let hora = (horaf-horai);
    let minuto = (minutof -minutoi);
    if(minuto <0){
        hora= hora-1;
        minuto = minuto + 60;
    }
    if(hora<0){
        return "error";
    }
    return "horas trabajadas: "+ hora + " horas "+ minuto + " minuto";
}
