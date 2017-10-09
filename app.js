function isValidCard(){

   var cardNumber = prompt("Ingrese su número de tarjeta");
  var array = [];
  var reverse = function(array){
  for( var i = 0; i< array.length; i++){
  var newNumber= array.pop();
  array.splice(i,0,item);
  }
  return array;
};
}

isValidCard(array);
