var cantidad = document.querySelector("#numero");
var btn = document.querySelector("#btnAdd");

btn.addEventListener("click",primo);


function primo(){
    let valor =Number(cantidad.value);
    for(var i = 2; i<= valor; i++){
        if(i%2 === 0){
            if(i ===2){
                var row = resultado.insertRow(-1);
                var cell = row.insertCell(0);
                
                cell.innerHTML = i;
            }
        }
        else if (i%3===0){
            if(i ===3){
                var row = resultado.insertRow(-1);
                var cell = row.insertCell(0);
                
                cell.innerHTML = i;
            }
        }
        else if (i%5===0){
            if(i ===5){
                var row = resultado.insertRow(-1);
                var cell = row.insertCell(0);
                
                cell.innerHTML = i;
            }
        }
        else if (i%7===0){
            if(i ===49 || 77){
                false;
            }else{
                var row = resultado.insertRow(-1);
                var cell = row.insertCell(0);
                
                cell.innerHTML = i;
            }
        }
        else{
            var row = resultado.insertRow(-1);
            var cell = row.insertCell(0);
            
            cell.innerHTML = i;
        }
    }
}
