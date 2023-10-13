let btn=document.querySelectorAll('.btn')


// console.log(btn.length);
for(let i=0;i<btn.length;i++){
    // console.log("loop : "+i);
    btn[i].addEventListener('click',function(){
        // console.log("incoming")
        btn[i].style.backgroundColor='red'
        btn[i].innerHTML="click me"
        btn[i].style.color='black'

        btn[i].addEventListener('dblclick',function(){
            btn[i].style.backgroundColor='blue'
            btn[i].innerHTML="click here"
            btn[i].style.color='white'
        })




    })
  
}



