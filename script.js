
//Improved each
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}


//Improved reduce
function reduce(array, f, acc) { 
 if (acc === undefined) { 
   acc = array[0]; 
   array = array.slice(1); 
 } 
 each(array, function(element, i) { 
   acc = f(acc, element, i); 
 }); 
 return acc; 
}

var $q1=$("#q1").value
console.log($q1)
var $q2=$("#q2").value
var $q3=$("#q3").value
var $q4=$("#q4").value
var $q5=$("#q5").value
var arrayValues=[$q1,$q2,$q3,$q4,$q5]
function myFunction(arrayValues){
  var result= reduce(arrayValues,function(start,value){
return start+value
  },0)
  alert("Your score is : " + result)
}
