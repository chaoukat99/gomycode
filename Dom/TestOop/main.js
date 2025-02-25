// 


class User{
    id;
    nom;
    email;
    password;

    constructor(n,em,pass){
        this.id=Math.floor(Math.random()*9999999);
        this.nom=n;
        this.email=em;
        this.password=pass;
    }



Presenter(){
   return `<ul>
            <li>${this.id}</li>
            <li>${this.nom}</li>
            <li>${this.email}</li>
            <li>${this.password}</li>
        <ul>`
}



}


function Selection(str){
    return document.querySelector(str);
}
let btn=document.querySelectorAll("button")
let input=document.querySelectorAll("input");



// 
// btn[0].onclick=()=>{
//    let nomValue=input[0].value;
//    let emailValue = input[1].value;
//    let passwordValue = input[2].value;

// let newObject=new User(nomValue,emailValue,passwordValue);
// console.log(newObject);

// let div=document.querySelector("div");
// btn[1].onclick=()=>{
//     div.innerHTML=newObject.Presenter();
//     let JsonStr=JSON.stringify(newObject);
//     console.log(JsonStr);
//     localStorage.setItem("user",JsonStr);
// }

// }





if(localStorage.getItem("user")!=null){
    let div = document.querySelector("#cls");
    let objet = JSON.parse(localStorage.getItem("user"));
    div.innerHTML=`<ul>
    <li>${objet.id}</li>
    <li>${objet.nom}</li>
    <li>${objet.email}</li>
    <li>${objet.password}</li>
    
    <ul>`
 
}else{
    console.log("Pas de user ")
}


// console.log(user1);