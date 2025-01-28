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



// const PI=3.14763833948;  // readonly 


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


// console.log(str2.includes("z"));

let name="Samir";
let lastname="KARIM";
age=20;

// Literal Templates
// console.log(`Hello My name is ${name} ${lastname} and i have ${age} years old `.toUpperCase())
// console.log(name+lastname);





// concat for concatenation
// console.log(name.concat(lastname," hello"," thank you ","jeje"))





// Exercice 



// First Instructions


// 5 prompt    (username,age,email, password,confirm password)



// Validation part 
/*

-username should be between 6 and 10 caracters
-age should be greater than or equal 18
-email should contains the username and the @ caracter
-password should be between 10 and 20 caracter
-confirm password should be equal to the password



*/


/*

if all of fields respect validation you display an alert of data inserted 
       
           Affichage:

                       // Username:CHaoukat99
                       // Email:Chaoukat99@gmail.com
                       // age:20
                       // password:chaoukat12345
                       // confirmpassword:chaoukat12345

else   you display an alert to annouce the error

*/

// \n pour sauter la ligne 
// console.log("username:Chaoukat99\nage:20")


// Correction





// let user=prompt("Veuillez Inserer votre username ?");
// age=prompt("Veuillez Inserer votre age ?");
// let email=prompt("Veuillez Inserer votre email ?");
// let passwordd=prompt("Veuillez Inserer votre password ?");
// let confirmPassword=prompt("Veuillez Inserer votre comfirm password ?");
// let error="";



// let testuser=user.length>5 && user.length<10?true:error=error+"Probléme de Username"  ;
// let testage=age>=18?true:error=error+" \n Probléme d'Age";
// let testemail=email.includes(user) && email.includes("@")?true:error=error+" \n Probléme d'Email";;
// let passtest=passwordd.trim().length>6 && passwordd.trim().length<12?true:error=error+" \n Probléme de Password";;
// let comfirmTest=confirmPassword.trim()==passwordd.trim()?true:error=error+" \n Probléme de confirmation de password ";;




// console.log(typeof("hello guys"))



// if(typeof(testuser) =="string" || typeof(testage) == "string" || typeof(testemail)== "string" || typeof(passtest) == "string" || typeof(comfirmTest) == "string"){
//    alert(error);
// }else{
//    alert(` Username : ${user}\n Age      : ${age}\nEmail    : ${email}\n Password : ${passwordd}\n ConfirmPass : ${confirmPassword}`); 
// }




// age=20;
// let test100;

// if(age>=18){
//    test100=true;
   
// }else{
//   test100=false;
   
// }

// test100=age>=18;
// console.log(age>=18?"Adulte":"Mineur");

// if(test100){
//    console.log("hello world");
// }else{
//    console.log("false result")
// }



//   Number & Math object methods
// let numberr1="20.5";
// let numberr2="2";
// console.log(+numberr1+ (+numberr2));
// parseInt("valeur");
// parseFloat("valeur");
// Number.isInteger(my_number)

// let stringNumber="20.5";
// let convertToNumber=+stringNumber;
// console.log(typeof(stringNumber));
// console.log(typeof(convertToNumber));
// console.log(parseInt(stringNumber));
// console.log(parseFloat(stringNumber));



// console.log(Number.isInteger(12.50));





// Math object 

// Max

let val1=200;
// console.log(Math.max(10,20,-5,14,0,-55,21,100,val1));
// console.log(Math.min(10,20,-5,14,0,-55,21,100));

// let floatnumber=12.01; 
// Floor diminuer

// console.log(Math.floor(floatnumber))

// Ceil augmente 
// console.log(Math.ceil(floatnumber))

// Round  automatique en se basant sur 5
// console.log(Math.round(floatnumber))

// Random


// console.log(Math.random()) // entre 0 et 1



// let RandomNum=Math.floor(Math.random()*6)
// console.log(RandomNum);






// let UpperC="AZERTYUIOPQSDFGHJKLWXCVBN";
// let LowerC=UpperC.toLowerCase();
// let Digits="0123456789";
// let special="&é'(-è_çà)=@!:;<>"

// let rand1=Math.floor(Math.random()*UpperC.length); 
// let rand2=Math.floor(Math.random()*LowerC.length);
// let rand3=Math.floor(Math.random()*Digits.length);
// let rand4=Math.floor(Math.random()*special.length);


// // console.log(UpperC[rand1]+LowerC[rand2]+Digits[rand3]+special[rand4])
// // console.log(rand1+rand2+rand3+rand4)

// console.log(UpperC[12]);


// let options="ABCD";

// let my_random=Math.floor(Math.random()*options.length);


// let user_Prompt=prompt("Essaier de choisir entre A , B , C, D");



// if(user_Prompt==options[my_random]){
//    alert("Tu as Gagné car JS a choisi "+options[my_random])
// }else{
//    alert("Tu as Perdu car JS a choisi "+options[my_random])

// }

// Les Boucles
// For while do while


// for(let i=0;i<5;i++){
//    prompt(`Prompt ${(i+1)}`); 
// }



// For Loop





// While Loop






// Do While Loop 



// continue break 

// console.log(y);


// debut fin de la boucle 

// 


// let chaine="nassim";

// let somme=0;
// for(let i=0;i<10;i++){
    
//   somme=somme+i;

// }

// console.log(somme);
// for(let i=0;i<100;i++){

//    arrsomme=arrsomme+arr[i];
// }

// console.log(arrsomme);



// console.log("Fin de programme")

// 0 true 0+1  hello
// 1 true 1+1  hello 
// 2 true 2+1  hello
// 3 true 3+1  hello 
// 4 true 4+1  hello
// ---------------

// 100 false
// 5 false 



// while(condition){ } si  la condition est true on va repeter sinon on va briser la boucle
/*
while logic :

1-verifie si la condition est vraie (True)
2-SI la cond est Vraie elle va exexuter le code 
sion elle va pas l'éxécuter 

*/
// let counter=0;
// while(confirm("You to repeat the while loop ?")){

//    counter++;
   
//    console.log("Tu a accepter le confirme "+counter);


// }



// let y=0;

// while(y<10){

    
//    console.log(y);
//    y=y+1;
// }







// do while

/*




*/
// do{
//    console.log("Tu a accepter le confirme ");
// }
// while(confirm("You to repeat the while loop ?"))









// Break;

// 10000 client    200 



// for(let i=0;i<10;i++){


  
//    console.log("This is iteration number "+(i));
//    if(i==5){
//       break;
//    }
// }





// console.log("Le reste du ")





// for(let i=0;i<10;i++){
//   if(i==5){
//    continue;
//   }
//    console.log(i);
// }




// Tableaux Objects Date  Exceptions

// camelCase 

let githubUser="Karim"; 





let myEmail="www.google.fr"; 



//  string method (split)

// let newTab=myEmail.split(".");

// console.log(newTab[newTab.length-1]);



// Talbeaux 


// CRUD (CREATE READ UPDATE DELETE)

// let Tab=["Samir","Karim","Ilyas","Oussama","Salim"]; 

// for(let i of Tab){
//    console.log(`Bonjour MR ${i.toUpperCase()} `)
// }


// Tab.forEach(el=>console.log(`Bonjour MR ${el.toUpperCase()} `));

// Array.isArray(Tab)

// La taille du tableau length

// READ

// for(let i=0;i<Tab.length;i++){

//    console.log(Tab[i]);
   
// }



// for( let i of Tab){
//    console.log(i);
   
// }



// let salary=20000.55;


// console.log(`The salary of a software Engineer is ${salary}`)


// for(let i=0;i<6;i++){
//    console.log(Tab[i]);
   
// }

// console.log(Tab);

//
// console.log(Tab.length);

// console.log(Tab[Tab.length-1]);

// console.log(Tableau[Tableau.length-1])


// let Tab=["Samir","Karim","Ilyas","Oussama","Salim"]; 

// console.log(Tab);

// Tab[2]="SABIR";

// Tab[Tab.length-1]="KHADIJA";

// console.log(Tab);


// Array methodes

let arr=[10,20];

console.log(arr);

// Vider le tableau 
// arr.length=0;

// Delete the last item of the array  pop 


// arr.pop();

// Delete the first item of the array  pop 

// arr.shift();
// arr.shift();
// let deletedItem=arr.pop();
   
// arr.pop();




// arr=[];

// arr.length=0;



// console.log("La valeur supprimé est : "+deletedItem);




// Insert New Item on the back of the array 

arr.push(20,"SAMIr","Karim",40);

// Insert New Item on the front of the array


// arr.unshift("Sara")

// console.log(arr);









// Functions 



// DOM & BOM 





//OOP 





// HOF 



/*


Exercice : 


- tu vas demande a l'utilisateur d'inserer combien de fois les utilisateur (prompt)

- Prompt ou tu vas insérer le nom d'utilisateur 


- Afficher les utilisateurs insérer en format Tableaux

utilisez Les tableux les boucles el la methode Push

*/ 
let Username="Karim";
let Users=["hzjhdz", 20,20];


// ...

// console.log(Users);[Users.length-1]




// let userCount=prompt("How much users you want to insert");

// for(let i=0;i<userCount;i++){

//    let User=prompt("Enter User Data");
//    Users.push(User)
  
// }


// console.log(Users);





// HOF   forEach Filter map reduce find findIndex
 

let USERS=["Karim","Samir","Omar","Khadjia"];

let nums=[12,15,3,17,20,22,"4",-5,"24","Omar"];


// nombre%2=0
// let PairNums=[];

// Bloc of code 


// for(let i of nums){
//    if( typeof(i)=="number" && i%2 == 0){
//       PairNums.push(i)
//    }
// }


// console.log(nums);
// console.log(PairNums);


// let NewUsers=[];


// for(let i of USERS){

//    if(i!="Omar"){
//       NewUsers.push(i);
    
//    }
// }

// console.log(USERS);

// console.log(NewUsers);




// let notes=[12,18,5,19,20];



// let nombreDeMatiere =notes.length;



// let somme=0;


// for(let i of notes){

//    somme=somme+i; 
                 
// }
// Moyenne


// let Moyenne=somme/nombreDeMatiere


// console.log(somme);

// Methode Des Tableau


// let ProductTable=["Product1","Product2","Product3","Product4"];

// include
// console.log(ProductTable.includes("Product44"));


// let stringBasedOnTable=ProductTable.join(" ");

// console.log(stringBasedOnTable);


// console.log(ProductTable);

// console.log("-".repeat(200))


// console.log(ProductTable.concat("Procut5","Product6"))


// console.log(ProductTable.slice(0,2))


// console.log(ProductTable.reverse());


// const names=[7,9,5,6]



// console.log(names.sort().reverse());







// let chaine="hello@world@les@amis";



// console.log(chaine.split("@"))


// Join 






let phrase="hello My name Is Omar and Omar is an arabian name";


let OneLine=phrase.split(" ").filter(omar=>omar!=="Omar").join(" ");
console.log(OneLine);
// let newTable=phrase.split(" ");

// let newTab=[];

// for(let i of newTable ){
//    if(i!=="Omar"){
//       newTab.push(i)
//    }
// }
// console.log(newTable);
// console.log(newTab);

// console.log(newTab.join(" "))


// console.log(phrase.replace("Omar",""));





/* -Commentaire


 Notions de base  / Web (dom bom) / React js
 Notions de base : 
   -Variables / Constante
   -Types de Données 
   -Concatenation (string)
   -Operateurs (Arithmetique comparaison Logique)
   -Control Flow:
       -Condition (if , if else , if else imbriqué, switch , conditon?true:false )
       -Methode de string (replace , trim ,toUppercase())
       -Methode de number (ParseInt +)  (Math round floor max min random)
       -Boucle (for    while    do while)
       -Tableaux(Crud & methodes de tableau )
       -Functions (Programmation procedurale )
       -Objects 
       -HOC
       -Date
       -Exceptions 





*/




//  


let option =["rock","paper","cisor"];



let random_num=Math.floor(Math.random()*option.length)  


let userEntry=prompt("Veuillez Selectionné soit : Rock Paper Cisor");


let computerChoice=option[random_num];



if(computerChoice=="rock" && userEntry=="rock"){
   alert(`Egalité par ce que le jeu a chois ${computerChoice}`)
}else if(computerChoice=="rock" && userEntry=="paper"){
   alert(`You win because the game select ${computerChoice}`)
}else if(computerChoice=="rock" && userEntry=="cisor"){
   alert(`You lost because the game select ${computerChoice}`)

}else if(computerChoice=="paper" && userEntry=="paper"){
   alert(`Egalité par ce que le jeu a chois ${computerChoice}`)

}



console.log()


