let user = "Yassine";

let obj={
    name:"Samir",
    age:20,
    profession:"Web developer"
}

let product1={
    id:122499,
    name:"TV",
    marque:"LG",
    price:20000,
    stock:20
}
// Accéder (Lire)
// console.log(product1.name);
// Modifier
product1.name="Smart Tv";

// Supprimer
// console.log(product1)

// delete product1.stock;

// console.log(product1.name);
// console.log(product1)
// key:value




// Functions 

// creation et implementation
// Appel
// function AddTwoNumbers(){
//     console.log(12+20);
// }






// AddTwoNumbers();
// AddTwoNumbers();
// DRY


// DOM(document Object model)

// console.log(prenom);





// let str="samir";
// str=20;
function Addition(a,b){
    // console.log(a+b);
    return a+b;
}


// console.log(Addition(20,10));


function SayHello(user){
    return "Hello "+user;
}


// Procedure / Function 


// Addition(10,50);

// SayHello("Samir"); 
// console.log(SayHello("Khalid"));



function Add(num1,num2){
    return num1+num2;
}


function Soustraction(num1,num2){
    return num1-num2;
}

function Multiplication(num1,num2){
    return num1*num2;
}

function Division(num1,num2){
    if(num2==0){
     return "Syntax Error";
       
    }else{
        return num1/num2;
    }
}


let resultasSomme=Add(10,20)
let resultasSous=Soustraction(10,20);
let resultasMulti=Multiplication(10,20);
let resultasDiv=Division(10,10);



console.log(resultasSomme)
console.log(resultasSous)
console.log(resultasMulti);
console.log(resultasDiv);









































console.log(Add(10,30));