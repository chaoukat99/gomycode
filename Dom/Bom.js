// Vanilla Javascript

// BOM (Browser Object Model ) => Navigateur => window 




// alert prompt confirm   print()


// setTimeOut /  setInterval

// Timeout en ms   1000ms = 1s  // 1OOOO = 10s  1s = 1000ms

// window.setTimeout(()=>{
//     // bloc of code

//    console.log("Hello world")
// },5000) 



// window.setTimeout(()=>{
//     let a =1;
//     let  b=2;
//     console.log(a+b);
// },2000)
// i=0;
// setInterval(()=>{
  
// console.log("verification ");   
// },3000)

let btn = document.querySelector("button")


// btn.onclick=()=>{
//     window.print();
// }


// location Object 


// let lien = window.location.href;
// window.location.href   



// window.location.href="https://www.google.com";
// window.location.reload();
// window.location.reload pour recharger la page    
let password="jhzdghzf-é(éI829829"
btn.onclick=()=>{
       
       i=10;
      const interval=setInterval(()=>{
         i--;

         document.querySelector("p").innerHTML=`Le password va etre generé en ${i} secondes`;
         if(i==0){
            clearInterval(interval);
            document.querySelector("span").innerHTML=password.toUpperCase();
            document.querySelector("p").remove();
         }
      },1000)
    


}

// Redirection vers google aprés 5 s

// setTimeout(()=>{
//    window.location.href="https://www.google.com"
// },5000)





// Localstorage vs Cookies 

// btn = document.querySelector("button");
// const text="hello World";

// let p=document.querySelector("p");

// btn.onclick=()=>{
//    p.innerHTML=text;
// }


// Localstorage

// Stocker ou bien insérer une valeur su L.S



// LS value => key -> value 


let btn1=document.querySelector("button");
let inp=document.querySelector("input");

btn1.onclick=()=>{

   window.localStorage.setItem("utilisateur2",inp.value);

}



// Afficher / lire les donner du localstorage

// document.querySelector("span").innerHTML=window.localStorage.getItem("utilisateur2");


// document.querySelectorAll("button")[1].onclick=()=>{

//    window.localStorage.setItem("dark","black");
  
//    document.body.classList.toggle("mode");
// }



// if(window.localStorage.getItem("dark")!=null){
//     document.body.style.background=window.localStorage.getItem("dark");

// }else{
//    window.localStorage.setItem("dark","black");

//    document.body.style.background="black";
// }



btn=document.querySelector("button");





if(window.localStorage.getItem("count") != null){
   document.querySelector("h2").innerHTML=window.localStorage.getItem("count");
}

btn.onclick=()=>{
   if(window.localStorage.getItem("count") != null){
      let i=+(window.localStorage.getItem("count"))
      i++
      window.localStorage.setItem("count",i);
      document.querySelector("h2").innerHTML=i;
   }
}


// 

document.querySelectorAll("button")[1].onclick=()=>{
 
   
localStorage.clear();

}// JSON (parse / stringify )




// JSON (Javascript object notation ) // string 


let obj ={
   name:"samir",
   age:30
}


console.log(typeof(obj))

// JSON


// Convertir objet js en json

let newJsonObject=JSON.stringify(obj);
// console.log(typeof(obj))
// console.log(typeof(newJsonObject))

// Convertir   json en objet js

let newJsObject=JSON.parse(newJsonObject);

console.log(newJsObject)

// Promise 




// alert prompt confirm print 
// setTimeout et setInterval
// location
// Localstorage 
// history   window.history.back() 
// Bom (window) -> Dom 

//  