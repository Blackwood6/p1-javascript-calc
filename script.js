
// recherchons tous les elements html ayant la classe text
var result = document.getElementsByClassName("text")

function button(value){
    console.log(value);
    console.log(result[0]);
    result[0].value += value;
}
function resultat(){
    console.log(result[0].value);
    result[0].value = eval(result[0].value)
}
/* reinitialison la propriete value du premier element 
de la collection result*/
function effacer_resultat(){
    result[0].value =''
}
