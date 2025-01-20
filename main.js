/*
Single Comment //

Multiple Comment 



DRY(don't repeat yourself)

*/


/* 

console.log("hello gomycode");
console.log("hellooo")

*/


// Les Variables    =>>   let nom_de_variable='valeur de la donnée';



let a=20;

let A=11;
// console.log(a);



let username="Samir";


let ville="Casablanca";
ville="Marrakech";


ville="Fes";
ville="Eljadida";

// console.log(ville);
username="IBrahim";
let facebookUsername=username;    //  let  facebookUsername="Karim"



const PI=3.14763833948;  // readonly 


const Username2="SAMIR";

const my_constant="Hello";

// console.log(my_constant);







// console.log(facebookUsername);
// console.log(PI);
// console.log(Username2);




/*

Primitive Data Types
String(Texte)
Number (valeur numerique  entier float)
Boolean (true false)  
null

0
Non Primitive Data Types
undefined
Array
Set
Object
*/








//   School Management System 


let SchoolName="Université Internationale de Paris";  // String


let StudentMark=5;  // Number



let test=false;   // Boolean

let user_connected=true; // Boolean 

let NewInstructor=null;

let trophés=null;






// Typeof    typeof(variabe)=> type donné

// console.log(typeof("hello"));



// String Concatenation  (+)


let prenom="Samir";
let nom="Alaoui";
let profession ="Web developer";


// console.log("Bonjour je suis "+prenom+" "+nom+" J'ai "+age+" ans ");



let MainText="Hello i am "+prenom+" "+nom+" and I work as a "+profession;



// console.log(MainText);





// console.log("Bonsoir Mr "+User);



// Operateurs 


// Arithmétique   (+Addition - * / %)

// Comparaison 
// Logique



let num1=10;
let num2=20;



let Addition =num1+num2;
let Soustraction=num1-num2;
let Multiplication = num1*num2;

let Division =num1/num2;
let RestedeLaDivision=num1%num2;


// Addition +
// console.log(num1+num2)

// Soustraction -

// console.log(num1-num2);


// Multiplication *

// console.log(num1*num2);



// Division  /



// console.log(num2/num1);




// Modulo Reste de la divison %


// console.log(num2%num1);


// console.log(Addition);
// console.log(Soustraction);
// console.log(Multiplication);
// console.log(Division);
// console.log(RestedeLaDivision);



// let num3="10";
// let num4="20";



// console.log(num3+num4);
// console.log(30);
// console.log(true)




num1="10";
num2=10;



// Opérateur de comparaison    > < >= <= == === ! 

// console.log(num1!==num2);



// Opérateurs Logique   && || not (et ou not)


let age=20;

// test=age==19+1 && age>19 && age==25-5;
// and && 
// true && true =true 
// false && true=false
// false && false =false
// true  && false =false

// Or ||

test =age>10 || age<10;

// true || true = true
// true || false = true
// false || false = false
// false ||  true =true 


let expr1=10;
let expr2=5;
let expr3=expr1-expr2-2;
username="Nassim";
let expr4=expr2+5*0+5;



// let test2=expr1*2==expr2*4 && expr2+expr1-30!=-15;
let test4=!(expr2%expr1==0 || typeof(username)!="string" && expr1==10);

// let test3=expr1*2-expr2*2 >=10 && expr4+5!=15;


age="10";


let test99=typeof(age)=="number";
// console.log(test4);
// console.log(10%5);
// console.log(test99);

// console.log("hello");
// console.log(typeof(10));










// let test100=true;

// console.log(test4);


// Control Flow


//  Conditions   //  Boucles 

/*

Condition

if(expression boolean){
   // bloc of code a executer si l'exprsiion est true

}else{
 // bloc of code a executer si l'expression est false

}

*/


age=15;



// if(age>=18){
//     console.log("Adulte");
// }else{
//     console.log("Mineur");
// }



// let is_connected=false;


// if(is_connected){
//     console.log("Utilisateur Connécté");
// }else{
//     console.log("Utilisateur Deconnécté");
// }







// if(jour==1){
//     console.log("Lundi");
    
// }

// if(jour==2){
//     console.log("Mardi");
    
// }


// if(jour==3){
//     console.log("Mercredi");
    
// }
// if(jour==4){
//     console.log("Jeudi");
    
// }

// if(jour==5){
//     console.log("Vendredi");
    
// }else{
//     console.log("Invalid day");
// }




// if else nested(imbriqué)

// if(jour==1){
//     console.log("Lundi");
// }else if(jour==2){
// console.log("Mardi");

// }else if(jour==3){
//     console.log("Mercredi");
    
// }



// Switch Case
// let jour=1;

// switch(jour){

//     case 1:{
//         console.log("Lundi");
        
//     }
//     break;
//     case 2:{
//         console.log("Mardi")
//     }
//     break;
//     case 3:{
//         console.log("Mercredi")
//     }
//     break;
//     case 4:{
//         console.log("Jeudi")
//     }
//     break;
//     case 5:{
//         console.log("Vendredi")
//     }
//     break;
//     case 6:{
//         console.log("Samedi")
//     }
//     break;
//     case 7:{
//         console.log("Dimanche")
//     }
//     break;
//     default:{
//         console.log("Invalid day");
//     }
    
// }



// Prompt confirm alert | exercices pour maitriser les conditions



// let status=confirm("Select yes or No ");



// if(status){
//     alert("Trés bien tu a confirmé");
// }else{

//     alert("Tu as Refuser");
    
// }


// let userAge=prompt("Insert Your Age");

// if(userAge>5 && userAge<100){

//     if(userAge>=18){
   
//         alert("Age Valide");
//     }else{
//         alert("Age non Valide");
//     }
// }else{
//     alert("tranche d'age Invalide")
// }





/*
prompt pour remplir le premier nombre
prompt pour remplir le deuxiéme nombre
un texte sous format prompt doit eter afficher:
(+) Addition (-)Soustraction x(multiplication) /(division)

alert qui affiche le resultas de calcul



*/


// let number1=prompt("Inserer le premier Nombre ")
// let number2=prompt("Inserer le deuxiéme Nombre ")
// let operation=prompt("(+) Addition (-)Soustraction x(multiplication) /(division)");

// If condition nested



// let resultat=0;



// if(operation=="+"){
//     resultat= +number1 + (+number2);
//     alert(resultat);
// }else if(operation=="-"){
//     resultat=number1-number2;
//     alert(resultat);
// }else if(operation=="x"){
//     resultat=number1*number2;
//     alert(resultat);
// }else if(operation=="/"){
//     if(number2!=0){

//         resultat=number1/number2;
//         alert(resultat);
//     }else{
//         alert("Impossible de diviser par 0");
//     }
// }


// Switch Case Method


// switch(operation){
//     case "+":{
//         alert(+number1+(+number2));
//     }
//     break;
//     case "-":{
//      alert(number1-number2);   
//     }
//     break;
//     case "x":{
//         alert(number1*number2);
//     }
//     break;
//     case "/":{
//         if(number2==0){
//             alert("Impossible de diviser par 0");
//         }else{
//             alert(number1/number2);
//         }
//     }
//     break;

//     default:{
//         alert("Invalid Operator");
//     }
// }



// Condition ternaire     (condition?si le resultat est true:si le resultat est false)




let clientAge=20;


// if(clientAge>=18){
//     console.log("Adulte");
// }else{
//     console.log("Mineur");
    
// }






// console.log(clientAge>=18?"Adulte":"Mineur");














// let test2=confirm("You want to see the sweet alert");
// if(test2){
//    Swal.fire({
//       title: "Congrats ",
//       text: "Thank you so much for contacting us",
//       icon:"success",
//       timer:1000,
//       showConfirmButton:true
//     });

// }else{
//    Swal.fire({
//       title: "Sorry , Try later",
//       htlm: "<b>Try it Next time</b>",
//       icon:"error",
//       timer:1000,
//       showConfirmButton:false
//     });
// }


//  DOM & BOM & navigator




// string Methods

let str ="hello my name is omar";



// let btn=document.querySelector("button");
// btn.onclick=()=>{
//    if(document.querySelector("input").value.length>5 && document.querySelector("input").value.length<10 ){
//       alert("Username valide "+document.querySelector("input").value.length)
//    }else{
//       alert("Username Non  valide "+document.querySelector("input").value.length)
//    }
// }
// length
let taille=str.length;


let upperText=str.toUpperCase();
let lowerText=upperText.toLowerCase();


// Replace 














// console.log(taille);
// console.log(upperText);
// console.log(lowerText);

// console.log(str.toUpperCase());


let newstr=str.replace("omar","samir")

// console.log(newstr);


let password="      azerty  123      ";
// Trim  TrimEnd
// console.log(password);
// console.log("Le nombre de caractere aprés le trim c'est "+password.trim().length+" ");



// Startswith && endsWith   (boolean)

let str2="username2@gmail.com";
 

// console.log(str2); 


// let commenceavec=str2.startsWith("ello");
// let termineavec=str2.endsWith("world");
// console.log(commenceavec);
// console.log(termineavec);


// slice

 username=str2.slice(0,9);

// console.log(username)

// includes 


console.log(str2.includes("z"));

let name="Samir";
let lastname="KARIM";


console.log(name.concat(lastname," hello"," thank you "))

