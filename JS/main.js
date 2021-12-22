// import {example} from "./modules/example.js"

const fullName = document.getElementById("fname");
const phoneNumber = document.getElementById("phone");
const streetName = document.getElementById("streetname");
const houseNumber = document.getElementById("housenumber");
const zipCode = document.getElementById("zipcode");
const city = document.getElementById("city");
const email = document.getElementById("email");
const sendButton = document.getElementById("btn-send");
const form = document.getElementById("form");

class user  {
    constructor(fullName,phoneNumber,streetName,houseNumber,zipCode,city,email){
    this.fullName = fullName;
    this.phoneNumber = phoneNumber;
    this.streetName = streetName;
    this.houseNumber = houseNumber;
    this.zipCode = zipCode;
    this.city = city;
    this.email = email;
}
}

sendButton.addEventListener("click",getInput)

function getInput() {
  document.querySelector(".name").innerText = `Name: ${fullName.value}`;
 let nr = phoneNumber.value.toString()
  if(phoneNumber.value.charAt(0) == 0){
    document.querySelector(".phonenumber").innerText = `Phone number: ${nr.replace('0', '+31')}`
  }else{ document.querySelector(".phonenumber").innerText = `Phone number: ${nr}`}
  ;

  document.querySelector(".adress").innerText = 
  `Adress: ${streetName.value} ${houseNumber.value} ${zipCode.value} ${city.value}`;

  let emailAddress = email.value;
  if (emailAddress.includes('@techgrounds')){
      document.querySelector(".email").innerText = `email: ${emailAddress}`;
  }else{ 
    let message = "Please enter email with @techgrounds.com";
    let result = window.confirm(message);
  }
  saveInput()
 
}



function saveInput(){
    const user1 = new user(fullName.value,phoneNumber.value,streetName.value,houseNumber.value,zipCode.value,city.value,email.value);
    console.log(user1);


    
    fullName.value = "";
    phoneNumber.value = "";
    streetName.value = "";
    houseNumber.value = "";
    zipCode.value = "";
    city.value = "";
    email.value = "";

}


