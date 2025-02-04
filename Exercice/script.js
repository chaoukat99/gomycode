// Array


let username="John";
let username2="Samir";


let Arr=["John","Samir","Sara","Karim"];

// for(let i of Arr){
//   console.log(i);
// }



// console.log(Arr);

Arr.push("Omar");
Arr.push("Nassim");
Arr.push("Khadija");






for(let i of Arr){
    
    //   if(i=="Sara" || i=="Khadija"){
    //     continue;
    //   }
      
    console.log(`Hello Mr ${i}`);

    if(i=="Samir"){
        break;
    }
  
}











// Consulter les elements  par position / index

// console.log(Arr.length)


// let firstElement=Arr[0];
// let lastElement=Arr[Arr.length-1];

// console.log(Arr[0]);
// console.log(Arr[1]);
// console.log(Arr[2]);
// console.log(Arr[3]);


let number=0;
// number=number+1; // number++
// console.log(number)

// i=i+1 // i++
// for(let i=0;i<Arr.length;i++){
    
// //    console.log(i);
//   console.log(Arr[i]);

// }

// alert(lastElement)



//  Exercices : 


// Calculer La somme & Moyenne 


let Notes=[20,12,15,7,20,13,17,0,6];


// elm%2==0(pair)   elm%2!=0(Impaire)




// let somme=0;

// for(let i of Notes){
//     somme=somme+i; 
// }



// let nombreDeModule=Notes.length;


// let moyenne =somme/nombreDeModule;

// console.log(Math.round(moyenne));

// Filtrage & Searching

let pairNums=[];
let ImpairNums=[];


// Code

for(let i of Notes){
    if(i%2==0){
        pairNums.push(i);
    }else{
        ImpairNums.push(i);
    }
}

console.log(pairNums);
console.log(ImpairNums);




// let users=["Samir","Houssem","Karim","Khalid"];

// let clientPromp=prompt("Inserer un Nom ?");
// let counter=0;
// for(let i of users){
//     if(i==clientPromp){
//         counter=counter+1;
//         break;
//     }
// }
// if(counter==0){
//     alert("User Unfound");
// }else{
//   alert("User Found");
// }


// HOF 
// users.forEach((el,i)=>{
//     console.log(el,i)
// })


// Inserting

let usersInserting=[];
// prompt user
// let count=prompt("How much elements you want to insert ");


// 


// for(let i=0;i<count;i++){

//    let ValeurAInserer=prompt(`Insert Your Data number  ${i+1}`);

//     usersInserting.push(ValeurAInserer) ;

// }



console.log(usersInserting);

// Updating



// indexOf  
// update 












let products =["product1","product2","product3","product4","Play station","Ipad","Tv"];


function UpdateProduct(){
// Searching product
let valueToUpdate=prompt("Inserer le nom du produit a modifier ");

let index=products.indexOf(valueToUpdate) 
 
if(index==-1){
    alert(`Le produit ${valueToUpdate} n'existe pas ! `)
}else{

    let newValue=prompt("Can you insert the new value :")
    products[index]=newValue;
    alert("Trés bien le produit a ete modifié ");
}


console.log(products)
}

// console.log(products);

// products[1]="Ipad";


// console.log(products);


// Delete Items












// UpdateProduct();


// for(let i=0;i<5;i++){
//     console.log("Hello "+i);
// }





// 0 <5 true = Hello 0 => i=i+1(i++)  i =0+1=1
// 1 <5 true = Hello 1 =>  i=i+1      i=1+1=2

// 2 <5 true =Hello 2 => 
 // -------
// 4 <5 true = Hello 4 => i=i+1(i++)   i=4+1=5
// 5<5  false  
















function Replace(arr,oldvalue,newvalue){

    if(arr.includes(oldvalue)){
        let position=arr.indexOf(oldvalue);
        arr[position]=newvalue
        return newvalue;
    }else{
        return "Impossible de Modifier "
    }
}








// let nums = ["str1","str2","str3"];

// console.log(nums);

// Replace(nums,"str1","Samir");

// console.log(nums);



/*
   String
   Number 
   Boolean
   Null
   arrays []
   object  {
   key : value 
   }

   Objet.key


   Objet :
   -les attributs(Properties)  id name price brand shippingzone
   -les methodes   afficher


 */

//  let produitstr="TV" ;
//  let produit = {
//       id:1,
//       name:"Tv",
//       price:2000.99,
//       brand:"LG",
//       ShippingZone:["UK","US","Egypt"],
//       afficher:function(){
//         console.log(`Product Name : ${this.name}`)
      
//       },
//       Supprimer:()=>{
//         // bloc of code 

//         console.log("Supprimé")
//       }
//  }

// produit.afficher();
// console.log(produit.price);

let etud={
    nom:"Karim",
 
}



let etudiant={
    nom:"koumi",
    prenom:"mourad",
    cin:"ge4512",
    age:20,
    classe:"2eme annee",
    note:15,

    afficher:()=>{
        console.log(`la note de l etudiant est ${etudiant.note} `)
    }
}

etudiant.afficher();

//  

let machaine="Hello";
console.log(machaine.toUpperCase())




// let num=10;

// Math.random();

//  named Function 

function Named(){
    return "something";
}


Named();





// anonymous Function

// function(){
// console.log("hello")
// }

// fonction  fleché arrow function


// ()=>{
// console.log("Hello")
// }



// OOP(oriente object programming) class object 




// declarer  des objets avec des methodes et des attributs 

//  Programmation procedurable et fonctionnelle



// function Add(){

// }



// Programmation Hybride(procedurale && objet  )





// class objet method attribut enums interface abstarct heritage polymorphism encapsulation 




// attr / Method

let personne={
    nom:"Samiri",
    prenom:"Alae",
    age:49,
    profession:"Directeur Génerale de La societé X",
    adresse:{
        ville:"Casablanca",
        codePostal:20000,
        long:23.7,
        latt:12.7
    },
    is_conneced:false,
    Presenter:function(){
       console.log(`Bonjour je suis ${this.nom} ${this.prenom} j'ai ${this.age} et je suis un ${this.profession} `)  
    }
}
console.log("***".repeat(60))

// Objet


// Consultation (personne)


// 1er method

console.log(personne.nom.toUpperCase());

// 2éme method

console.log(personne["age"]);


console.log(personne); 


// Modification
personne.age=20;
console.log(personne.age)
personne.Presenter();









// Suppression 


delete personne.adresse;


let my_string="Hello";
console.log(my_string.length)

// my_string.replace()

// console.log(Math.round(Math.PI));


// Ajouter (CREATE NEw attribute)


personne.situationFam="marié"; 



// READ UPDAT CREATE DELETE








let Orders=[
    {
        id:Math.floor(Math.random()*20000)+"Id",
        client:"Samir",
        price:2000,
        product:"Tv",
        quantite:2
    },
    {
        id:Math.floor(Math.random()*20000)+"Id",
        client:"Nassim",
        price:40000,
        product:"Ipad",
        quantite:1
    },
    {
        id:Math.floor(Math.random()*20000)+"Id",
        client:"imane",
        price:7000,
        product:"Iphone",
        quantite:3
    },
    {
        id:Math.floor(Math.random()*20000)+"Id",
        client:"Houssem",
        price:10000,
        product:"PC GAMER",
        quantite:1
    },

]



// console.log(`Id: ${Orders[1].id}\nClient:${Orders[1].client}\nProduit:${Orders[1].product}   `);


/* 1-  Afficher Pour Tout les client le message suivant :
   Id: 17639Id
   Client:Nassim
   Produit:Ipad
   Price:2000,
   Quantite:2


   2-Afficher Le nom  client en majuscule qui a Acheté le produit le plus Chére
   
   3- Calculer Le Chiffre D'affaire Total 
*/



// 1- Affichage



for(let i of Orders){
    console.log(`Id: ${i.id}\nClient:${i.client}\nProduit:${i.product}\nPrix:${i.price} $\nQuantité:${i.quantite}   `);
    console.log("-".repeat(10))
}


// 2-Le maximux price


let nomClient;
let maxPrice=0;

for(let i of Orders){
    if(i.price>maxPrice){
        maxPrice=i.price;

        nomClient=i.client;
    }
}

console.log(`lE client qui a acheté le produit le plus chére c'est ${nomClient.toUpperCase()}`)



// 3- Calculer Le C.A Total (la somme de la q x price)


let CA_AMOUNT=0;

for(let i of Orders){
    CA_AMOUNT=CA_AMOUNT+(i.price*i.quantite)
}


console.log(`Le chiffre d'affaire Total C'est  ${CA_AMOUNT} `)




// DATE  

let date= new Date();


// getFullYear (recupere l'année actuelle)
// 
let hour=date.getHours();

if(hour<20 ){
    console.log("Bonjour");
}else{
    console.log("Bonsoir");
}
