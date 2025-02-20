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


// setTimeout(()=>{
//    window.location.href="https://www.google.com"
// },5000)





// JSON (parse / stringify )