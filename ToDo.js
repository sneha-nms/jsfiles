let todolist=document.getElementById('warpper')
let input=document.getElementById('input') 
let button=document.getElementById('add')

let clear=document.createElement('button')



button.addEventListener('click',addtodo)



function addtodo(){
    let subdiv=document.createElement('div');
       subdiv.setAttribute('class','subdiv');
    let para=document.createElement('p');
       para.setAttribute('class','para')
    
        para.innerText = input.value;

    let button1=document.createElement('button');
        button1.setAttribute('class','btn1')
        button1.innerText="editi";
    let button2=document.createElement('button');
        button2.setAttribute('class','btn2')
        button2.innerText='remove';

    todolist.appendChild(subdiv);
    subdiv.appendChild(para);
    subdiv.appendChild(button1);
    subdiv.appendChild(button2);

    button2.addEventListener('click',remove) 

    function remove(){
        button2.parentElement.remove();
    }  


   button1.addEventListener('click',(e)=>{
   let editContent = e.target.previousElementSibling.innerText;
   input.value=editContent;
   })

    input.value=''
    
   
    clear.setAttribute('class','clear')
    todolist.appendChild(clear);
    clear.innerText='clear all';
    clear.addEventListener('click',clear_all)
    function clear_all(){
        para.parentElement.remove();
    }


    

}












