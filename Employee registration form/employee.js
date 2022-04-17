const steps = Array.from(document.querySelectorAll(".employeeForm .details"));  
const nextBtn = document.querySelectorAll(".employeeForm .btn-nxt");  
const prevBtn = document.querySelectorAll(".employeeForm .btn-prev");  
const form = document.querySelector(".employeeForm");  
nextBtn.forEach((button) => {  
  button.addEventListener("click", (e) => {  
    e.preventDefault(); 
    changeStep("next");   
  });  
});  
prevBtn.forEach((button) => {  
  button.addEventListener("click", () => {  
   changeStep("prev");  
  });  
});  

 form.addEventListener("submit", (e) => {  
  e.preventDefault(); 
 });

function changeStep(btn) {  
  let index = 0;
  const active = document.querySelector(".active"); 
  index = steps.indexOf(active);  
  steps[index].classList.remove("active");  
  if (btn === "next") {  
   index++;  
  } else if (btn === "prev") {  
   index--;  
  }  
  steps[index].classList.add("active");  
}  



let emailId=document.getElementById("email");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmpass")
let firstName=document.getElementById("firstname");
let lastName=document.getElementById("lastname");

// let dob=document.getElementById("dob");
// let address=document.getElementById("address");
// let state=document.getElementById("state");
// let mobile=document.getElementById("mobile");

// let occupation=document.getElementById("occupation");
// let yearsOfExp=document.getElementById("experience");

// let graduation=document.getElementById("education");
// let yearOfPass=document.getElementById("year");

// let department=document.getElementById("department");
// let terms=document.getElementById("conditions");


emailId.addEventListener('blur',emailIdValidate());
password.addEventListener('blur',passwordValidate());
confirmPassword.addEventListener('blur',confirmPassValidate());
firstName.addEventListener('blur',firstNameValidate());
lastName.addEventListener('blur',lastNameValidate());

// dob.addEventListener('blur',dobValidate);
// gender.addEventListener('blur',genderValidate)
// state.addEventListener('blur',stateValidate);
// mobile.addEventListener('blur',mobileValidate);

// graduation.addEventListener('blur',graduationValidate);
// yearOfPass.addEventListener('blur',yearOfPassValidate);

// department.addEventListener('blur',departmentValidate);
// terms.addEventListener('blur',termsValidate);

function emailIdValidate(){
    var id1=document.getElementById("id1");
    if(emailId.value.trim()==="")
        onError(emailId,"Email id name should be filled",id1);
    else if(!nameValidation(emailId.value.trim()))
        onError(emailId,"Invalid Email id",id1);
    else{
        onSuccess(emailId,id1);
        return true;
    }
}   

function passwordValidate(){
    var id2=document.getElementById("id2");
    if(password.value.trim()==="")
        onError(password,"password cannot be blank",id2);
    else if(!passwordValidation(password.value.trim()))
        onError(password,"Password must be atleast 8 characters",id2);
    else{
        onSuccess(password,id1);
        return true;
    }

function confirmPassValidate(){
    var id3=document.getElementById("id3");
    if(confirmPassword.value.trim()==="")
        onError(confirmPassword,"Confirm password must be filled",id3);
    else if(!confirmPassValidation(password.value.trim(),confirmPassword.value.trim()))
        onError(confirmPassword,"Passwords does not match",id3);
    else{
        onSuccess(confirmPassword,id3);
        return true;
    }
}

function firstNameValidate(){
    var id4=document.getElementById("id4");
    if(firstName.value.trim()==="")
        onError(firstName,"Firstname must be filled",id4);
    else if(!nameValidation(firstName.value.trim()))
        onError(firstName,"Firstname should contain only alphabets",id4);
    else{
        onSuccess(firstName,id4);
        return true;
    }
}

function onSuccess(input, id) {
    id.innerHTML = "";
}

function onError(input, message, id) {
    id.innerHTML = message;
}

}


function emailIdValidation(email){
    var emailIdRegx = /^[a-z0-9]{5,13}@[a-z]+\.[a-z\.]{2,6}$/;
    if (emailId.match(emailIdRegx)) {
    return true;
    }
    else {
    return false;
    }
}

function passwordValidation(password)
{
    if(password.length()>=8)
    {
        return true;
    }
    else{
        return false;
    }
}

function confirmPassValidation(password,confirmPassword)
{
    if(password===confirmPassword){
        return true;
    }
    else{
        return false;
    }
}

function nameValidation(name){
    var nameRegx = /^[a-zA-Z]{2,15}$/;
    if (name.match(nameRegx)) {
    return true;
    }
    else {
    return false;
    } 
}

function validateForm() {

    if (emailId.value.trim() === "") {
    document.getElementById("id1").innerHTML = "This field is neccesary";
    if (password.value.trim() === "") {
        document.getElementById("id2").innerHTML = "This field is neccesary";
        if (confirmPassword.value.trim() === "") {
        document.getElementById("id3").innerHTML = "This field is neccesary";
        if (firstName.value.trim() === "") {
            document.getElementById("id4").innerHTML = "This field is neccesary";
        }
        }
    }
    }  
    else
    {
    if(emailIdValidate()==true && passwordValidate()==true && confirmPassValidate()==true && firstNameValidate()==true 
    && lastNameValidate()==true){
        return true;
    }
    }
    return false;   
}


function nextTab(event, stepName) {
    var count,stepDetails, stepNum;
    stepDetails = document.querySelector("aboveTab");
    for (count = 0; count <stepDetails.length; count++) {
    stepDetails[count].style.display = "none";
    }
    stepNum = document.querySelector("tablinks");
    for (count = 0; count < stepNum.length; count++) {
      stepNum[count].className = stepNum[count].className.replace("active", "");
    }
    document.getElementById(stepName).style.display = "block";
    event.currentTarget.className += " active";
}
