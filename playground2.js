const cardNoDisplay =document.getElementById("card-no-display")
const cardNo =document.getElementById("card-no")

const cardNameDisplay =document.querySelector("#card-name-display")
const cardholderName =document.getElementById("cardholder-name")

const expiryMonth =document.getElementById("expiry-month")
const month =document.getElementById("month")

const expiryYear =document.getElementById("expiry-year")
const year =document.getElementById("year")

const cvc =document.getElementById("cvc")
const cvcInp =document.getElementById("cvc-inp")

const btnConfirm =document.getElementById("btn-confirm")

const greetSection =document.getElementById("greet-section")

var regName = /^[a-zA-Z]/
var regNumber = /^[0-9]/



cardholderName.addEventListener("keypress",(e)=>{
  var user2 = document.getElementById("cardholder-name");

  var user = document.getElementById("card-name-display").textContent  = e.target.value

   if(regName.test(user)) {
    user2.style.border = "green solid 5px";

   } else {
     user2="Wrong format,letter only"
    user2.style.border = " red solid 5px";
   }
})
 

cardNo.addEventListener("keypress",(e)=>{
 
    var userno2 = document.getElementById("card-no")
    
  var userno =  document.getElementById("card-no-display").textContent = e.target.value.split("").map((num,i)=> i% 4==0?" " + num : num).join('').trim("") 

  
    if(regNumber.test(userno)) {

       userno2.style.border = "green solid 5px"

    } else {
        userno2.style.border = "red solid 5px"
    }
console.log(userno);
})

month.addEventListener("keypress",(e)=>{

  document.getElementById("month")

  document.getElementById("expiry-month").textContent = e.target.value

})



cvcInp.addEventListener("keypress",(e)=>{

  document.getElementById("cvc-inp")

  document.getElementById("cvc").textContent = e.target.value
  
})

function myFunction() {
   if (cardholderName.value != "" && cardNo.value != "" && month.value != "" && cvcInp.value != "") {

     document.getElementById("greet-section").style.visibility = "visible";

  } else {
    alert("Input your deatils");
} 
} 

// btnConfirm.addEventListener("onclick",()=>{
  
 
//   // } if (cardholderName.value == "" && cardNo.value == "" && month.value == "" && cvcInp.value == "") {
//   //    document.getElementById("greet-section").style.display ="block"
//   // } else {
//   //   alert("Input your deatils")
  
// })