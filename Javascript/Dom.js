// DOM(document object model)

// selection 


// ID
// let titre=document.getElementById("title");

// console.log(titre);



// Class


// let ClsClasses=document.getElementsByClassName("cls");
// console.log(ClsClasses);
// tagName

// let paras=document.getElementsByTagName("p");
// console.log(paras);
// querySelector
// let ps=document.querySelectorAll(".cls");
// console.log(ps);


// manipuler le contenu
// Manipuler les attributs

// style


// classList 


// Evenements



// Links
// let allLinks =document.links;


// Images

// let images = document.images;



// form

// let forms = document.forms;
// console.log(allLinks);
// console.log(forms);

// images
// formulaires


let h1 = document.querySelector("#title");


// Manipulation Contenu 
// Read
// innerText innerHTML

// console.log(h1.innerText)
// Write

// h1.innerHTML="<marquee>Hello gomycode<marquee>"



// let link = document.querySelector("a");

// console.log(link.innerHTML)

// link.innerHTML="Discord"



let inp = document.querySelector("input");

// Read 

console.log(inp.placeholder)


// document.querySelector("button").onclick=()=>{

//     console.log(inp.value)
// }

// Write

// inp.placeholder="Veuillez saisir votre Age";
// inp.type="password";


// let imageSources=[
//     "https://media.istockphoto.com/id/814423752/fr/photo/oeil-du-mod%C3%A8le-avec-le-maquillage-art-color%C3%A9-gros-plan.jpg?s=612x612&w=0&k=20&c=NeNYcLTUsVfcAyGmFHM7BWpwnFFXvCxsGfSwyZOB8nU=",
//     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
//     "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
// ]


// let image = document.querySelector("img");
// image.src=imageSources[1]
// console.log(inp);










// style
let p = document.querySelector("p");

// element.style.propertycss=value;
// p.style.color="red";
// p.style.backgroundColor="black";
// p.style.fontSize="20px"


// cssText

p.style.cssText="color:red;font-size:20px;background-color:yellow;padding:10px";

// classList

h1=document.querySelector("h1");
// add 

// h1.classList.add("active");



let btn=document.querySelector("button");


// btn.onclick=()=>{
//     document.body.classList.toggle("dark");
// }
// remove
// h1
// .classList.remove("active")
// toggle

// contains true || false 
console.log(h1.classList.contains("active"));

// Namde Function
// function Addition(a,b){
//     console.log(a+b);
// }

// Anonymous function 


// function(){

// }

// Arrow Function
// ()=>{
//     console.log(a+b)
// }



// click && dblclick



// mouse (mousemove  mouseenter mouseLeave )



// input (focus blur input)


// keyboard




// scroll


// contextmenu


// selection






// element.oneventname=()=>{
    // bloc of code
// }


let btn2 = document.querySelector("button");
let h11= document.querySelector("h1");
// h11.onclick=()=>{
//     alert("Hello gomycode ");
// }

// dblclick
// btn2.ondblclick=()=>{
//     alert("Hello gomycode ");
// }



// focus blur input (les inputs,textarea )

function Selection(elm){
return document.querySelector(elm)
}

// focus


let input =Selection("input");

// input.onfocus=()=>{
//     console.log("Input focused");
// }

// blur
// input.onblur=()=>{
//   if(input.value.length>5){
//     console.log("Valeur Valide")
//   }else{
//     alert("Valeur Non valide ")
//   }
// }


// input 
let span =document.querySelector("span");
input.oninput=()=>{
    if(!input.value.includes("@")){
       span.innerHTML="Veuiilez inserer un email valide"
    }else{
        span.innerHTML=""
    }
}




// Mouse 


p=document.querySelector("p");
// p.onmousemove=()=>{
//     console.log("mouse moved");
// }

// p.onmouseenter=()=>{
//     console.log("mouse entred");
// }

// p.onmouseleave=()=>{
//     console.log("mouse leave");
// }




// Keyboard 

// document.onkeypress=(ev)=>{
//     console.log(ev.key) // detecter le clavier 
//     console.log("key pressed")
// }

// document.onscroll=()=>{
//     console.log("Scrolling");
// }



// selection 


p.onselectstart=(ev)=>{
    ev.preventDefault(); // bloque un evenement 
    console.log("select text")
}


document.oncontextmenu=(ev)=>{

    ev.preventDefault();
    console.log("Menu ouvert")
}

// bloquer evenement 


let link = document.querySelector("a");


link.onclick=(ev)=>{
    ev.preventDefault();
    console.log("hello");
}