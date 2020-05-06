
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


 
function returnResult(queryString){
  var queryString = $('#myform').serialize();

var a=queryString.split("&")
var arr2=[]

 var marks= each(a,function(element){
var arr=(element.split("="))
arr2.push(arr[1])
})
var result =   reduce(arr2,function(initial,element){
return initial+parseInt(element)
},0)
alert ("Your result is :" + result )

}
