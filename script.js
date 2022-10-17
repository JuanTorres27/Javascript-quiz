class User {
    constructor( firstName, lastName, age, job, blood, id, cellphone){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.job=job;
        this.blood=blood;
        this.id=id;
        this.cellphone=cellphone;
    }
}

function register (){

     
    let  person = {

    firstName: document.getElementById("firstName").value,
    lastName:document.getElementById("lastName").value,
    age: document.getElementById("age").value,
    job:document.getElementById("job").value,
    blood: document.getElementById("blood").value,
    id: document.getElementById("id").value,
   cellphone: document.getElementById("cellphone").value,}

   
   console.log (person)
   return

}


// calculator

function clean (){
    document.getElementById("clean").reset();
}

function add (){
   let num1 = parseInt(document.getElementById("num1").value)
   let num2 = parseInt(document.getElementById("num2").value)
   document.getElementById("result").innerHTML= num1+num2;
}

function substract (){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML= num1-num2;
 }

 function multiplication (){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML= num1*num2;
 }

 function division (){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    document.getElementById("result").innerHTML= num1/num2;
 }
 


