// // DOM (document object model)

// // - Selection
// // - HTML content 
// // - Attributs HTML
// // - nodes(parent children siblings)
// // - style
// // - classList
// // - Creation des elements 
// // - Evenements 



// // Charts 
// // Intro js 
// // SweetAlerts2





// // BOM (Browser object Model)  BOM c'est le parent du dom


// // - alert confirm prompt print 
// // - setTimeout & SetInterval
// // - open close (Popups )

// // - History
// // - Location 

// // - LocalStorage & SessionsStorage & Cookies 





// // BOM->DOM



// // Navigator 







// // DOM Selection   document  DOM (document object model )


// // By id  getElementById("id")

// let paragraphe=document.getElementById("mypara");

// let YoutubeLink=document.getElementById("youtube");


// // By ClassNAME getElementsByClassName


// let ClsClasses=document.getElementsByClassName("cls"); //  [p,input,div...]

// console.log(ClsClasses[2]);




// // By Tagname (le nom de la balise )


// let links=document.getElementsByTagName("a");

// console.log(links[1]);



// // QuerySelector Un seul / plusieur elements  (c'est la comme la selection CSS)



// let FirstElement=document.querySelector(".cls");
// let Classess=document.querySelectorAll(".cls");

// console.log(FirstElement);
// console.log(Classess);


// // images form links


// console.log(paragraphe.innerText)
// paragraphe.innerHTML="Hello nassim"
// paragraphe.style.color="teal";
// paragraphe.style.backgroundColor="black";


// // let produits=[
// //     {nom:"Ipad",prix:400},
// //     {nom:"Ipad",prix:500},
// //     {nom:"Ipad",prix:600},
// // ]
// // appilqueRemis(produits,0.2)  // 20%


// // selectionner l'element qui a id imgid


// // let seletion1 = document.querySelector("#imgid");
// // console.log(seletion1);



// // // selectionner toutes les input de la page
// // let inputs = document.querySelectorAll("input");
// // console.log(inputs);



// // // selectionner la balise script

// // let script=document.querySelector("script");


// // selectionner l'input de type password

// // let passwordInput=document.querySelector("input[type='password']");

// // console.log(passwordInput);




// // images formulaire liens



// let allimage=document.images; // [img1,img2...]

// let formulaires=document.forms; // [form1,form2...]
// let allLinks=document.links;  // [a1,a2,...]


// let FirstForm=formulaires[0];







// // pour selectionner des inputs en se basant sur le name => form.name

// console.log(FirstForm.username);



// console.log(document.title);
// console.log(document.body);


// let is_admin=true;

// if(is_admin){
//     document.title="admin"
// }else{
//      document.title="user"
// }

// Accés La lecture

// La modfication







// let h2=document.querySelectorAll("h2");
// let age=h2[0].innerText;

// if(age>18){
//     h2[1].innerText+=" Adulte";
// }else{
//     h2[1].innerText+=" Mineur";
// }




// Gérer Le content(Read Write )


// innerText (Read & Write the content )

// innerHTML 

// let link = document.links[0]

// Read
// console.log(link.innerText)
// console.log(link.innerHTML)

// Write

// link.innerText="<mark>Youtube Link<mark>"
// link.innerHTML="<mark>Youtube Link</mark>"

// Gérer les attributs (READ WRITE )



// let button=document.querySelector("button");
// let input=document.querySelector("input");
// let resulta=document.querySelector(".resultas");


// button.onclick=()=>{
//     resulta.innerHTML=input.value;
// }



// let titre2=document.querySelector("h2");

// titre2.innerText=titre2.innerText.slice(7);



// READ & Write attributes (2 ways)

// 1ere method


let input= document.querySelector("input");

// READ
// console.log(input.required)
// Write 

// input.type="email";
// input.placeholder="Saisir votre Email"

// input.required=false;




let button=document.querySelector("#btn");

let check = document.querySelector("[type='checkbox']");

// let imagesSrc=[
//     "https://cdn.futura-sciences.com/cdn-cgi/image/width=1024,quality=60,format=auto/sources/images/dossier/773/01-intro-773.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6zoRR_FPG7f2knECoYTgOuETejMYPg71vg&s",
//     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
// ]
// let counter=-1;


// let button2= document.querySelector("#next");
// let prec= document.querySelector("#prec");
// let image =document.images[0];


 // className

// check.onclick=()=>{
//     if(check.class){
//         document.body.style.background="black";
//     }else{
//         document.body.style.background="white";

//     }
// }

// console.log(check.className)



// 2eme method 


let button2= document.querySelector("#next");




// console.log(button2.id)

// Lire le contenui des attributs
// console.log(button2.getAttribute("id"))

// Modifier le contenu des attributs
// button2.setAttribute("id","next2")
// console.log(button2.getAttribute("id"))




// Style


let prec= document.querySelector("#prec");
// style

// prec.style.background="green";
// prec.style.color="white";
// prec.style.padding="10px";
// prec.style.borderRadius="10px";
// prec.style.marginTop="10px";



// cssText

prec.style.cssText="background-color:red;color:white;padding:10px";