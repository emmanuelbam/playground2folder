const cardNoDisplay =document.getElementById("card-no-display")
const cardNo =document.getElementById("card-no")

const cardNameDisplay =document.getElementById("card-name-display")
const cardholderName =document.getElementById("cardholder-name")

const expiryMonth =document.getElementById("expiry-month")
const month =document.getElementById("month")

const expiryYear =document.getElementById("expiry-year")
const year =document.getElementById("year")

const cvc =document.getElementById("cvc")
const cvcInp =document.getElementById("cvc-inp")

const btnConfirm =document.getElementById("btn-confirm")


function myFunction() {
    let x =document.getElementById("cardholder-name").value
    document.getElementById("card-name-diplay").innerHTML = x;
}