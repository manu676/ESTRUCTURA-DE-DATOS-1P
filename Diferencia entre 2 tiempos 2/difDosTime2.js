document.querySelector('#btnCalcular').addEventListener('click', () => {
    //Get timeIn and timeOut
    let timeIn =document.querySelector('#timeIn').value;
    timeIn = timeIn.split(":");
    let timeOut = document.querySelector('#timeOut').value;
    timeOut = timeOut.split(":");
    var diferenceResult = 0;
    //Do diference times
    diferenceResult = CalculateDiference(timeIn, timeOut);
    //Show on screen
    document.querySelector('#result').value = diferenceResult;
});

function CalculateDiference(x, n) {
    let horaIni = x[0];
    let minutoIni = x[1];
    let segIni = x[2];
    let horaFin = n[0];
    let minutoFin = n[1];
    let segFin = n[2];

    let hora = (horaFin-horaIni);
    let minuto = (minutoFin -minutoIni);
    let segundo = (segFin - segIni);
    if(segundo <0){
        minuto = minuto - 1;
        segundo = segundo + 60;
    }
    if(minuto <0){
        hora= hora-1;
        minuto = minuto + 60;
    }
    if(hora<0){
        return "error";
    }
    return "horas trabajadas: "+ hora + " horas "+ minuto + " minuto " + segundo + " segundos.";
}
