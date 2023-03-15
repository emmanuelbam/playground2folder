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





cardholderName.addEventListener("keypress",(e)=>{
   document.getElementById("card-name-display").textContent  = e.target.value
    if(checkVals(e)){

    }
})

cardNo.addEventListener("keypress",(e)=>{
 
    document.getElementById("card-no-display").textContent = e.target.value
})

const checkVals = (e) => {
    return (e.target.value.match(/[A-Za-z]/i  ));
}