
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





var clr = $('<button id="clear-tasks" >Clear</button>')
$(".input-container").append(clr)

$("#main-header").on("click",function (){
$("#main-header").css({"color":"#FCFCFC","background-color":"#ff9999"})
})

$("#p1").on("click",function (){
$("#p1").css({"color":"black","background-color":"#ff8080"})
})

$("#p2").on("click",function (){
$("#p2").css({"color":"black","background-color":"#ff4d4d"})
})

$("#add-task").click(function addTask(){
 
        var str = $("input").val();
        if(str.length===0){
          alert("You must write something!")
        }
        else{ 
            
    
     $("#add-here").append("Hi " +str ).css({"margin-left":"50px"
     })
        }
})
      

$("#add-task").click(function (){
$("#input-task").val('')
})





 $("#clear-tasks").click(function clearTask(){
  $("#add-here").remove()
 })





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


