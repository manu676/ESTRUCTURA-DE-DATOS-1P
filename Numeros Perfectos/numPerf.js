function numMenores(){
    if(num===sumaDiv(num)){
        return true
    }else{
        return false
    }
}
function sumaDiv(x){
    for(let i = 1; i <x; i++){
        if (x/i === 0){
            x+=i;
        }
    }
}
