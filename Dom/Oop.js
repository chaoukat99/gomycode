// // OOP

// // classes et les objects 
// // des Attributs et l'encapsulation

// // des constructeur 

// // Accesseurs (Getters / Setters ) => Methode qui aide l'objet a etre consulté ou bien modifier

// // Heritage 

// // Polymorphisme



// // Appel


// // console.log(SendEmail("test@gmail.com"))
// // console.log(AddTwoNumbers(20,10))



// let date=new Date();


// // let my_obj={
// //     name:"Karim",
// //     age:20,
// //     method:function(){
// //     return "This Is Just a test ";
// //     }
// // }


// // Créer une classe 

// // Encapsulation public private protected final abstract package 


// class Personne{
// // Properties(Les Attribus )

// #nom; // private 
// #prenom; // 
// #age;
// #adresse;



// // Constructeur

// constructor(n,p,age,adress){
//   this.#nom=n;
//   this.#prenom=p;
//   this.#age=age;
//   this.#adresse=adress
// }


// // Methodes(fonctions lié a l'objet )

// Parler(){
//     return "La pesonne est en train de parler";
// }

// }


// // class Formateur{

// //     matricule;
// //     nom;
// //     prenom;
// //     module;
// //     salaire;


// //     Enseigner(){
// //         return "Le formateur est en train de former les apprenants";
// //     }

// // }
// // Objets



// let myFisrtPerson=new Personne("Karimi","alae",30,"Casablanca Maroc ");
// let mySecondPerson=new Personne("Alaoui","Sara",27,"Rabat Maroc");
// let myThirdPerson=new Personne("Samiri","Safae",29,"Paris France");


// console.log(myFisrtPerson);
// // console.log(myFisrtPerson.adresse);


// // class Vehicule{

// // // caractéristiques de l'objet vehicule

// //     couleur ;
// //     marque ;
// //     vitesse;
// //     carburant;

// // // contsructeur par defaut 


// // //   constructor(){

// // //   }


// // //   constructeur avec parametres 

// //     constructor(c,m,v,car){
// //     this.couleur=c;
// //     this.marque=m;
// //     this.vitesse=v;
// //     this.carburant=car;

// //     }


// // // Comportement (behavior)
// //     Demarrer(){

// //     }

// //     DiminierLavitesse(){

// //     }
// // }


// // let date2 =new Date();
// // console.log(date2.getFullYear())

// // let str=new String("hello");
// // let number =new Number(23);



// // let bmw=new Vehicule("blue","bmw",300,"diesel");

// // let Mercedes=new Vehicule();

// // console.log(bmw.couleur);
// // console.log(mySecondPerson.adresse);




// class CompteBancaire{

// #numero;
// #type;
// #solde;
// #client;
// #banque;


// constructor(n,type,sol,clt,bq){
//     this.numero=n;
//     this.#type=type;
//     this.#solde=sol;
//     this.#client=clt;
//     this.#banque=bq;
// }

// // getter  readonly 
// getSolde(){
//     return this.#solde;
// }

// getType(){
//     return this.#type;
// }

// // setter

// setSolde(newvalue){
//     this.#solde=newvalue;
//     return "Solde Modifié"
// }

// }



// let FirstAccount=new CompteBancaire(200109,"CC",28008.19,"Nassim","BanqueX");

// // console.log()
// // FirstAccount.numero=300009;
// // console.log(FirstAccount.numero);

// // console.log(FirstAccount.setSolde(100))
// // console.log(FirstAccount.getSolde());







// // Heritage


// class Medecin extends Personne{
//     #specialité;


//     constructor(n,p,a,adress,spec){
//       super(n,p,a,adress);
//       this.#specialité=spec;
       
//     }
// }

// let Medecin1=new Medecin("Samiri","Karim",30,"Toulouse France","specialitéx")





// class Vehicule{
//     // le code class
// }


// class Camion extends Vehicule{

// }

// class Voiture extends Vehicule{
    
// }




// // function Add(a,b){
// //     return  a+b;
// // }

// // function Sous(a,b){
// //     return a-b
// // }


// // Sous(23,27);



// // Class 


// class Calcul{
// // encapsulation public 
// // attributs / properties
// #num1; // prive 
// #num2; // prive


// // constructeur

// constructor(n1,n2){

//     this.#num1=n1;
//     this.#num2=n2;
// }

// // Getter 

// getNum1(){
//     return this.#num1;
// }

// // Setter

// setNum1(newvalue){
//    this.#num1=newvalue;
// }



// // methods

// Addition(){
//     return this.#num1+this.#num2;
// }


// Soustration(){
//     return this.#num1-this.#num2
// }
// Multiplication(){
//     return this.#num1*this.#num2
// }

// Divison(){

// return this.#num2!=0?this.#num1/this.#num2:"Syntax Error";
// }

// }





// // il fau créer des objets (instances)

// let CalculObject=new Calcul(10,5);
// let Objet2=new Calcul(20,0);


// // console.log(CalculObject.getNum1());

// // CalculObject.setNum1(90)


// console.log(CalculObject.Multiplication());
// console.log(Objet2.Divison());


// let str=new String("Hello");

// console.log(str.trim());


// // --------------------------------------------



// // function Addition(a,b){
// //     return a+b;

// // }


// // Addition(10,20);


// classe de base 
class Pesronne{

#nom;
#prenom;
#age;


constructor(n,p,a){
    this.#nom=n;
    this.#prenom=p;
    this.#age=a;

}

// methode 


Presenter(){
    return `Bonjour je suis ${this.#prenom} ${this.#nom} et j'ai ${this.#age} ans `;
}

}


// Etudiant

// Heritage 
class Etudiant extends Pesronne{
  
    #note;
    constructor(n,p,a,marks){
        super(n,p,a);
        this.#note=marks;
       
    }
// Override (redifinition)
Presenter(){
    return super.Presenter()+`et la note maximale que j'ai réaliser est ${Math.max(...this.#note)} `
}


}








let peronne1=new Pesronne("Salimi","Doae",19);
let etudiant = new Etudiant("Karimi","Karim",28,[12,20,21]);



console.log(peronne1.Presenter())
console.log(etudiant.Presenter())




class Product {
    #nom;
    #price;
}









// User (id , nom_d'uitlisatuer ,email ,password)
// Se connecter methode boolean  qui prend on parametres email et le password 
// doit verifier si email = etudiant@gmail.com et password = etudiant123;

// Deconnecter vider les valeur d'email et de password 




// Admin est Un utulisateur  (id , nom_d'uitlisatuer ,email ,password,role)

// changerEmail par un email donner en parametre 
// changerMotdePasse par un password donner en parametre 