// DOM (document object model)

// - Selection
// - HTML content 
// - Attributs HTML
// - nodes(parent children siblings)
// - style
// - classList
// - Creation des elements 
// - Evenements 



// Charts 
// Intro js 
// SweetAlerts2





// BOM (Browser object Model)  BOM c'est le parent du dom


// - alert confirm prompt print 
// - setTimeout & SetInterval
// - open close (Popups )

// - History
// - Location 

// - LocalStorage & SessionsStorage & Cookies 





// BOM->DOM



// Navigator 







// DOM Selection   document  DOM (document object model )


// By id  getElementById("id")

let paragraphe=document.getElementById("mypara");

let YoutubeLink=document.getElementById("youtube");


// By ClassNAME getElementsByClassName


let ClsClasses=document.getElementsByClassName("cls"); //  [p,input,div...]

console.log(ClsClasses[2]);




// By Tagname (le nom de la balise )


let links=document.getElementsByTagName("a");

console.log(links[1]);



// QuerySelector Un seul / plusieur elements  (c'est la comme la selection CSS)



let FirstElement=document.querySelector(".cls");
let Classess=document.querySelectorAll(".cls");

console.log(FirstElement);
console.log(Classess);


// images form links


console.log(paragraphe.innerText)
paragraphe.innerHTML="Hello nassim"
paragraphe.style.color="teal";
paragraphe.style.backgroundColor="black";







// selectionner l'element qui a id imgid


// let seletion1 = document.querySelector("#imgid");
// console.log(seletion1);



// // selectionner toutes les input de la page
// let inputs = document.querySelectorAll("input");
// console.log(inputs);



// // selectionner la balise script

// let script=document.querySelector("script");


// selectionner l'input de type password

// let passwordInput=document.querySelector("input[type='password']");

// console.log(passwordInput);




// images formulaire liens



let allimage=document.images; // [img1,img2...]

let formulaires=document.forms; // [form1,form2...]
let allLinks=document.links;  // [a1,a2,...]


let FirstForm=formulaires[0];







// pour selectionner des inputs en se basant sur le name => form.name

console.log(FirstForm.username);



console.log(document.title);
console.log(document.body);


let is_admin=true;

if(is_admin){
    document.title="admin"
}else{
     document.title="user"
}

// Accés La lecture

// La modfication







let h2=document.querySelectorAll("h2");
let age=h2[0].innerText;

if(age>18){
    h2[1].innerText+=" Adulte";
}else{
    h2[1].innerText+=" Mineur";
}