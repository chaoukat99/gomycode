// // // Single Comment
// // /*

// // line 1
// // line 2
// // line 3
// // line 4


// // -   variable / constante
// // -Type de données (String,Number,Boolean,null) primaire non primaire
// // String "Rabat"
// // Number(entier ,reel )  12 10.2

// // Boolean true false (1 0)

// // null

// // */


// // let username="Samir"; 


// // const PI=3.1467767;
// // // PI=10; Impossible de modifier une constante 
// // username="Karim";

// // // console.log()




// // let ville='Casablanca';

// // let age =20;

// // let note =17.25;

// // // Ecole 

// // let schoolName="Gomycode"; // String 

// // let StudentCount=100; // Number

// // let is_Private=true; // Boolean


// // let Hackaton=null;    // null => Object

// // let firstname="Karim "; 
// // let lastname="AlaouiF"; // AF
// //  age=21;
// // // console.log(lastname[0]+lastname[lastname.length-1])
// // // console.log(lastname.length)
// // // console.log("Bonjour je suis "+firstname+lastname+" j'ai "+age+" ans ");

// // // console.log(is_Private);
// // // console.log(schoolName,StudentCount,is_Private,Hackaton);



// // // console.log(username);
// // // console.log(PI);

// // // typeof(variable) pour afficher le type 

// // // console.log(typeof(Hackaton))



// // let chaine="ma chaine";
// // // ma chaine javascript
// // // chaine=chaine+" Javascript";
// // // chaine+=" Javascript";
// // // console.log(chaine);





// // // Les Opérateurs 

// // // Arithmétique

// // // + Addition  
// // // - Soustraction  
// // // * Multiplication 
// // // / devision
// // // % modulo

// // let num1=10;
// // let num2=20;

// // // Addition

// // console.log(num1+num2);
// // // Soustraction
// // console.log(num1-num2);
// // // Multiplication
// // console.log(num1*num2);
// // //  Division

// // console.log(num1/num2);

// // // Modulo % 

// // console.log(num1%num2);


// // let num3="10";
// // let num4="30";

// // console.log((+num4) + (+num3));

// // // Comparaison

// // // < > <= >= == != === !==

// // let motDePasse="hassan123";

// // console.log(motDePasse=="hasSan123");

// // let a="10";
// // let b=10;
// // console.log(10>20) // false
// // console.log(10+10-20==0) // true

// // console.log(typeof(a)=="number");
// // console.log(a===b); // false 
// // console.log(a==b); // true

// // // Logique

// // // and or !    &&(and )  ||(or)  !(not)


// // age =30;

// // console.log(age>10 || age<20); // true && false=false 

// // /*
// // && (and)
// // true && true = true 
// // false && false =false 
// // false && true =false 
// // true && false =false 

// // || (or)

// // true || true = true 
// // true || false = true 
// // false || true = true 
// // false || false = false

// // */

// // let a1=10;
// // let a2=a1-5;
// // let a3=a2-5;

// // let test1=a1+a3*5-a2>=5 && a1==a2+4+1 && typeof(a1)!="string" ; //true

// // let test2=!(a1*20-(100+50+25+25) !=0 || typeof(a1+"5")!="string" && a3*2+10>=10)


// // let test3=true
// // console.log(!test3);



// // console.log("Hello");



// // let h1= document.querySelector("h1");
// // h1.onclick=(ev)=>{


// //     ev.target.style.color="red";
// // }



// // single line comment 

// /*

// multiple
// line
// comment 


// String(texte)
// Number
// boolean true false

// null


// */

// let username="Karim";
// username="Samir";

// let age=20;


// console.log(username);


// const PI=3.146363678;

// // PI=4;
// console.log(PI);



// console.log(username);



// let ville = 'Casablanca' ;
// let Pays = "Maroc";

// console.log(ville+" C'est la ville économique du "+Pays);



// let year=2000;

// let userIsConneted=false;


// let MoroccoWorldCup=null;



// /*

// Arithmétiques     + * - / %
// Comparaison       <  >  <= >= == === !=
// Logique           &&  ||  !
// */



// let num1=4;

// let num2=4;


// // +

// // let resultas=num1%num2;
// // typeof()
// // console.log(resultas);

// // console.log(num1>num2 && num1+20>num2);
// // console.log(age>12 && age<22); // 15
// // && (and)
// // true && true = true 
// // false && false =false 
// // false && true =false 
// // true && false =false 



// console.log(12>13+1 || 12>12);

// // || (or)

// // true || true = true 
// // true || false = true 
// // false || true = true 
// // false || false = false



// // Strings Methods 


let str="Hello";
// length  (la longueur du texte )


// toUppercase() toLowerCase()


console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let sentence="this is Javascript";
console.log(sentence.replace("Javascript","php"));



// let password="    karim123       "
// console.log(password.length);
// console.log(password.trim());

// console.log(password.trimEnd().length);

let search="Hello this is Js ";

let email="example@gmail.com another@gmail.com ";


// console.log(email.split(" ")) // ["example","gmail.com"]
// console.log(search.includes("t"));
// console.log(email.includes("@"));






// Control flow 

// conditions if else 
let age=10;

if(age>=18){
    // bloc of code 
    console.log("Adulte");
}else if(age==17){
    console.log("Presque")
}else{
    console.log("Non Adulte ");
}

// Boucles 



let day=13;


if(day==1){
    console.log("Lundi");
}else if(day==2){
    console.log("Mardi");
    
}else if(day==3){
    console.log("Mercredi");
    
}else if(day==6){
    console.log("Samedi");
    
}else if(day==7){
    console.log("Dimanche ");
    
}else{
    console.log("Invalid ");
}



day=1;
// switch(day){

// case 1:{
//     console.log("Lundi");
// }
// break;
// case 2:{
//     console.log("Mardi");
    
// }break;
// case 3:{
//     console.log("Mercredi");
    
// }break;
// case 4:{
//     console.log("Jeudi");
    
// }break;
// case 5:{
//     console.log("Vendredi");
    
// }break;
// case 6:{
//     console.log("Samedi");
    
// }break;
// case 7:{
//     console.log("Dimanche");
    
// }break;

// default:{
//     console.log("Invalid day")
// }
// }


let isConnected=false;


// if(isConnected){
//     console.log("User connected")
// }else{
//     console.log("User Disconneted");
    
// }


// Condition ternaire 


// condition?resultatsi la ccondition est true :resultatsi la ccondition est false

// console.log(isConnected?"User connected":"User Disconnected")



// Boucles 

// for loop while loop   do while loop

// for 

// let y=0;

// for(let i=0;i<100;i++){
//     console.log("Hello "+i);
// }


// 0  0<5  0+1  Hello 
// 1 1<5   1+1 Hello
// 2 2<5   2+1 Hello
// 3 3<5   3+1 Hello
// 4 4<5   4+1 Hello





// let i=1001
// while(i<1000){
//     // code a repeter 
//     console.log("WHile Loop "+(i+1));
//     i++;
// }


// i=1001
// do{
// console.log("Traitement :")
// }while(i<1000)

// break 
// continue

// 



// for(let i=0;i<10;i++){

//     if(i==3){
//         break;
//     }
//     console.log("User  "+(i+1))
// }


// for(let i=0;i<10;i++){
//     if(i==5 || i==6){
//         continue;
//     }
//     console.log("Thank You User "+ i)
// }


console.log("||".repeat(20))

// let users=["user1","User2","User3",12,false,null,20>12,"User5"];

// CRUD (CREATE READ UPDATE DELETE)


//Read tabname[position ]0

// console.log(users.length)


// console.log(users[0]);
// console.log(users[users.length-1]);


// UPDATE
// console.log(users);

// users[2]="User33";

// push
// users.push("Hassan",12,true,null);

// console.log(users);

// DRY
let products =["Product1","Product2","Product3","Product4","kjdjzh"];
// console.log("This is Product "+products[0])
// console.log("This is Product "+products[1])
// console.log("This is Product "+products[2])

for(let i=0;i<products.length;i++){
console.log("This is Product "+products[i])
}


console.log("||".repeat(20))

for(let i of products){
    console.log("This is Product : "+i)
}
// console.log(products);

// delete the last element 
// products.pop();
// products.pop();
// products.pop();

// products.length=0;


// console.log(products.includes("Product3"));
// key : value
let user={
    name:"Said",
    age:20,
    profession:"Web designer"
}

// OBJECT Functions Exception 


// DOM BOM (Documen Object Model)





