
let outputscreen = document.getElementById("result");



function display(x){
 
    outputscreen.value = outputscreen.value + x
}

function Clear(){

      
      outputscreen.value="";

}
function del(){


    outputscreen.value=outputscreen.value.slice(0,-1);
}

function cal(){
   
  
   let allValues = outputscreen.value

   let splitvalue = allValues.split('')

  let firstNumber = splitvalue[0]
  let operator = splitvalue[1]
  let secondNumber = splitvalue[2] 

  final(firstNumber,operator,secondNumber)

}

function final (firstNumber,operator,secondNumber){
   
   if(operator === '+'){
    outputscreen.value = parseIn(firstNumber)+ parseInt(secondNumber)
   }
   else if( operator==='-'){
    outputscreen.value=parseInt(firstNumber) - parseInt(secondNumber)
   }
   else if( operator==='*'){
    outputscreen.value=parseInt(firstNumber) * parseInt(secondNumber)
   }
   else if( operator==='/'){
     outputscreen.value=parseInt(firstNumber) / parseInt(secondNumber)
   }
   else if(operator=='%'){
    outputscreen.value=parseInt(firstNumber) % parseInt(secondNumber)
   }

   



}























// let arr = [1,90,54,22]

// let big = arr[0]
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i] > big){
//     big = arr[i]
//    }
// }
// console.log(big);

// let arr = [1,2,3,4,5]
// let reverseArr = []
// for(i=arr.length-1;i>=0;i--){
//     reverseArr.push(arr[i])
// }

// console.log(reverseArr);




    
 
    

    
