
// let arr=[13,23,12,45,22,48,66,100]



// for(i=0;i<=arr.length;i++){
//      if(arr[i]%2 ==0){
//         console.log(" Evene number:"+arr[i]) ; 
//        }
// }

// let arr=[13,23,12,45,22,48,66,100]
// i=0
// while(i<=arr.length){
//       console.log(" Even number:"+arr[i]);
//       i++;
// }

// let arr=[13,23,12,45,22,48,66,100]
// let i=0;
// do{
//     if( i%2==0){
//        console.log("Even number:"+arr[i]);

//     }
//     i++;

// }
// while(i<=arr.length)




/*==============================2=========================*/
//    arr=[23,56,78,5,56,45,56,210,36];
//    for(i=0;i<=arr.length;i++){
//     if(arr[i]==56){
//         continue;
//     }
//     console.log(arr[i])
//    }




//   let  arr=[23,56,78,5,56,45,56,210,36]; 
//   var i=0;
//    while(i<arr.length){
//     if( arr[i]!=56)
//         console.log(arr[i])
//         i++;  
//     }

   
//      let  arr=[23,56,78,5,56,45,56,210,36]; 
//   var i=0;
//   do{
//     if( arr[i]!=56)
//         console.log(arr[i])
//          i++;
//   }while(i<arr.length)



/*==================4================*/

// let  x=8;
// function Pattern(x){
//     for (let i = 1; i <= x; i++) { 
//        let row = ""; 
//        for (let k= 1; k<= i; s++) { 
//           row += i;
//        } 
//        console.log(row)
//     } 
//  }
//    console.log (Pattern(x))


// let n = 3

// for(i=n;i>=1;i--)
// {
//  for(j=1;j<=i;j++)
// {
//  document.write('*');
//  }
//  document.write('</br>');
// }

// Problem - 5 solved

let str = 'technologies'

let count = 0;

function vowels(str){
let vowel = ['a','e','i','o','u']
for (let i = 0; i < str.length; i++) {
    if(vowel.includes(str[i])){
       count++
    }

}
// console.log(Number of Vowels ${count});
}
vowels(str)