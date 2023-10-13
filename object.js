//  let Laptop ={
//      Nmae:"DELL ",
//      Price: 25000,
//      Color:" black",
//      Quentity:1,
//      Categories:[[ " Lanenova","Dell"],
//      ["mack","apple"],
//      ["ThinkPad",] ], 
//      deimentation:{
//         RAM: "32gb",
//         Lap_id: 23,
//          }
      
     
//  }
//  console.log(Laptop)
//  console.log( Laptop.Categories)
//  console.log( Laptop.Categories[2][0])
//  console.log( Laptop.deimentation.RAM)

/*============================exes=============*/
let user={
    UserName:"sneha",
    Password:12345,
    Email_id:" snehandckap@gmail.com",
    Mobile_no: 9361625014,
    Categories:{
        Dress:["Shirt","top"],
        cars:[" BMW"," SUV","Hatchbacke"],
        bikes:[" KTM","RN5",["FZ", "FZ-s"]],
        electorinc_items:["switch box"," wires"],
      Register:{
         Adimin_name: "Hari",
         Password:12345,
        Email_id:" harisdckap@gmail.com"
      }  
    },



    login: function(){
        console.log(" login successfully");
    },
    Register(){
        console.log(" Register successfully")
    }
  
    

}
console.log(user.Categories.Register.Email_id)
console.log(user.Email_id)
user.login()
user.Register()
console.log(user)
console.log( user.Categories)

console.log( user.Categories.bikes[2][0])



