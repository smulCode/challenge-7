// import {example} from "./modules/example.js"

const firstName = document.getElementById("fname");
const phoneNumber = document.getElementById("phone");
const streetName = document.getElementById("streetname");
const houseNumber = document.getElementById("housenumber");
const zipCode = document.getElementById("zipcode");
const city = document.getElementById("city");
const email = document.getElementById("email");
const sendButton = document.getElementById("btn-send");

sendButton.addEventListener("click",getInput)

function getInput() {
  document.querySelector(".name").innerText = `name: ${firstName.value}`;
  document.querySelector(".phonenumber").innerText = `phone number: ${phoneNumber.value}`;
  document.querySelector(".adress").innerText = 
  `adress: ${streetName.value} ${houseNumber.value} ${zipCode.value} ${city.value}`;

  document.querySelector(".email").innerText = `email: ${email.value}`;


}
