let num = prompt('Immetti un numero per capire se è pari o dispari', '');

function oddOrEven(){
    if((num % 2) == 0){
        alert('Il numero è pari');
    }
    else {
        alert('Il numero è dispari');
    }
}
oddOrEven();