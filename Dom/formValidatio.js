// Bloquer event 



let form=document.forms[0];


form.onsubmit=(ev)=>{
// bloquer L'evenement
ev.preventDefault();


let nomTest=form.nom.value.length>5 && form.nom.value.length<10;

let ageTest=form.age.value>=18;

let emailTest=form.email.value.includes("@") && form.email.value.includes(form.nom.value);

let MobileTest=form.mobile.value.startsWith("212") || form.mobile.value.startsWith("213") ||  form.mobile.value.startsWith("216")


let DomaineTest= form.domaine.value =="IT";


let PasswordTest=form.pass.value.length >10 &&  form.pass.value.length <20;

let confirmPassTest = form.confirmpass.value == form.pass.value;


if(nomTest && ageTest && emailTest && MobileTest && DomaineTest && PasswordTest && confirmPassTest){
    form.submit();
}else{

    console.log(nomTest)
    console.log(ageTest)
    console.log(emailTest)
    console.log(MobileTest)
    console.log(DomaineTest)
    console.log(PasswordTest)
    console.log(confirmPassTest)
    Swal.fire({
        title: "Error",
        text: "Data Not valid",
        icon: "error"
      });
}





}



