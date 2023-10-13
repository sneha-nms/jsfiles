// /*==================1=========*/
// let arr=[ 23,89,10,66,4]
// for(i=0; i<=arr;i++)
// {
//    if(i> arr){
//       console.log( arr+" : Itis the largest number");
//    }
// }


// /*=========2  Odd or Even========*/
//   let str=50;
//   for(i=0;i<=50;i++){
//    if( i%2==0){
//       console.log("Even Number:"+i)
//    }
//    else if(i%2!==0){
//       console.log( "Odd number:"+i)
//    }
//    else{
//       console.log( "Another letter"+i)
//    }
//   }


//   /*==========3   Reverse an array=======*/


// // let arr1=[1,2,3,4,5,6]
// for(i=6;i<=1;i--){
//    console.log(i)
// }











//   /*====4 Pattern ===*/
      
//   let n=3;
//    let row="";

//    function Pattern(n){
//        for(i=1;i<=n;i++){
        

//          for(j=1;j<=i;j++){

//           row -=j;

//          }
//          console.log(*);
//        }
//    }
//    console.log(row);

   /*==========5 Count the vowels=======*/


   // let str=prompt(" enter a string")
   // let  vowels=a,e,i,o,u;
   // for(i=0;i<=str;i++){
   //    if(str==vowels ){
   //       count+=i;
   //    }
   // }

   //  console.log("Total count of Vowels:"+i);



   let n = 3

for(i=n;i>=1;i--)
{
 for(j=1;j<=i;j++)
{
 document.write('*');
 }
 document.write('</br>');
}

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