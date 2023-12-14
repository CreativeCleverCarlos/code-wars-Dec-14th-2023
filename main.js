/**
 Define a method/function that removes from a given array of integers all the values contained in a second array.
**/

Array.prototype.remove_ = function(integer_list, values_list){
    //your code here
  }

  //solution but come back to

  Array.prototype.remove_ = function(integer_list, values_list){
	return integer_list.filter(function (element) {
  	return values_list.indexOf(element) === -1;
  });
}