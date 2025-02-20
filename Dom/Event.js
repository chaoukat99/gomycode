// Evenement

// 1ere methode

//  element.on(nom_de_levement)=()=>{
    // le code a executer lorseque event se declenche 

// }

// 2eme methode

// //  element.addEventListener("nom_de_levenement",()=>{
    


// }) 



// let username:string="Saber";

// Click  && doubleClick

let btn = document.querySelector("button");

btn.ondblclick=()=>{
    // let num1=prompt("Donner le nombre1 ")
    // let num2=prompt("Donner le nombre 2 ")
    // alert(`le resulas de m'addition est : ${+num1+(+num2)} `);
    alert("Hello world");
}


// btn.addEventListener("click",()=>{
//     alert("Event works with AddEventListener");
// })
// callback function


// Mouse Events 


// mouseover  ./ hover du css
// mouseenter
// mouseleave
// mousemove

// btn.onmousemove=()=>{
//     console.log("Mouse moved")
// }
btn.onmouseenter=()=>{
    console.log("tu as entrée ");
}





// Inputs (focus , blur , input / change  )


// focus


let inp = document.querySelector("input");

let span=document.querySelector("span");

// inp.oninput=()=>{
  
//     if(inp.value.includes("@")){
//         span.innerText="supprime le caractére @"
//         inp.blur();
//         inp.value="";
//     }else{
//          span.innerText="";
//     }
// }

// input.onfocus=()=>{
//     console.log("Input focused");
// }


// blur
// input.onblur=()=>{
    
//    if(input.value>18){
//     alert("Adulte");
//    }else{
//     alert("Mineur");
//    }

// }


let date=new Date();

if(date.getDate()==17){
    document.body.style.display="none";
}

// // keyboard clavier 

// // keypress

// // document.onkeypress=()=>{

// // }

// // Scroll
// let valeur=1;

// document.onscroll=(ev)=>{
// if(window.scrollY==1200 || window.scrollY<1200){
//     valeur=1;
//     document.body.style.opacity=valeur;
//     console.log("Inrement ",valeur);
//     console.log(window.src)

// }else{
//     valeur=valeur-0.009;
//     document.body.style.opacity=valeur;
//     console.log("Decrement ",valeur);
//     console.log(window.scrollY)
    
   
// }
    
 

// }

// contextmenu




// selection 



//  submit(formulaire) 






let p = document.querySelector("p");


p.onclick=()=>{
    p.classList.toggle("testp");
}


btn.ondblclick=()=>{
    alert("Doubleclick est déclenché");
}



let img = document.images[0];


// document.onmousemove=()=>{
//     console.log("You are moving the cursor on the cat")
// }


// let a = document.querySelector("a");
// img.onmouseleave=()=>{

// }

// img.onmouseenter=()=>{


// }

let para=document.querySelector("#para2");
// window.oncontextmenu=()=>{
//     document.body.style.background="black";
//     document.body.style.color="white";
// }



para.onselectstart=()=>{
    // console.log("tu as selectionné le texte")
}




let form=document.forms[0];


form.onsubmit=(ev)=>{
    // Bloquer Le submit 
    ev.preventDefault(); // interdire un evenement

    // valider les données 

    let inp=document.querySelector("#username");
   
    if(inp.value.length>10){
        form.submit();
    }else{
        alert("Donnée Invalide");
    }
}




// Form Validation 








// PreventDefault()


//  BOM(browser object model)


// let link = document.querySelector("a");


// link.onclick=(ev)=>{
//    ev.preventDefault();
//    console.log(ev);
// }



// document.oncontextmenu=(ev)=>{
    
//    console.log(ev);
// }


function Selection(el){
    return document.querySelector(el);
}
let mode=Selection("#mode");

let h1=Selection("h1");

h1.onclick=()=>{
    alert(h1.innerText)
}

mode.addEventListener("click",()=>{
    document.body.classList.toggle("mode")
})