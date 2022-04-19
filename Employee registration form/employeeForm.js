const steps = Array.from(document.querySelectorAll(".employeeForm .details"));
const nextBtn = document.querySelectorAll(".employeeForm .btn-nxt");
const prevBtn = document.querySelectorAll(".employeeForm .btn-prev");
const tabBtn = document.querySelectorAll(".employeeForm .btn-nxt1");

nextBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeStep('next');
    })
})

prevBtn.forEach(button => {
    button.addEventListener('click', () => {
        changeStep('prev');
    })
})
function jumpTab(stepNumber)
{
      index=stepNumber-1;
      tabStep(index);
}

function tabStep(tabIndex)
{
    const active = document.querySelector('.active');
    index = steps.indexOf(active);
    if(tabIndex<index){  
        steps[index].classList.remove('active')

    }
    else{
        if (index == 0) {
            if (emailIdValidate() == true && passwordValidate() == true && confirmPasswordValidate() == true && firstNameValidate() == true) {
                steps[index].classList.remove('active')
            }
            else {
                tabIndex = 0;
            }

        }
        else if (index == 1) {
            if (dateValidate() === true && genderValidate() == true && stateValidate() == true && phoneNumberValidate() == true) {
                steps[index].classList.remove('active')
            }
            else {
                tabIndex = 1;
            }
        }
        else if (index == 2) {
            if(tabIndex<=index+1){
                steps[index].classList.remove('active')
            }
            else{
                tabIndex=2;
            }
        }
        else if (index == 3) {
            if (graduateValidate() == true && yearOfPassValidate() == true) {
                steps[index].classList.remove('active')
            }
            else {
                tabIndex = 3;
            }
        }
        else if (index == 4) {
            steps[index].classList.remove('active')
        }
    }
    steps[tabIndex].classList.add('active')
}

function changeStep(btn) {
    let index = 0;
    const active = document.querySelector('.active');
    index = steps.indexOf(active);
    steps[index].classList.remove('active')
    if (btn == 'next') {
        if (index == 0) {
            if (emailIdValidate() == true && passwordValidate() == true && confirmPasswordValidate() == true && firstNameValidate() == true) {
                index++;
            }
            else {
                index = 0;
            }

        }
        else if (index == 1) {
            if (dateValidate() === true && genderValidate() == true && stateValidate() == true && phoneNumberValidate() == true) {
                index++;
            }
            else {
                index = 1;
            }
        }
        else if (index == 2) {
            index++;
        }
        else if (index == 3) {
            if (graduateValidate() == true && yearOfPassValidate() == true) {
                index++;
            }
            else {
                index = 3;
            }
        }
        else if (index == 4) {
            index++;
        }

    }
    else if (btn = 'prev') {
        index--;
    }
    steps[index].classList.add('active')
}

function emailIdValidate() {
    var idEmail = document.getElementById("id1");

    if (emailId.value.trim() === "") {
        onError(emailId, "Email Id must be filled.", idEmail);
    }
    else if (!emailIdValidation(emailId.value.trim())) {
        onError(emailId, "Invalid Email Id.Please enter a valid email id.", idEmail);
    }
    else {
        onSuccess(emailId, idEmail);
        return true;

    }
}

function passwordValidate() {
    var passId = document.getElementById("id2");
    if (password.value.trim() === "") {
        onError(password, "Password must be filled.", passId);
    }
    else if (!passwordValidation(password.value.trim())) {
        onError(password, "Password should have minimum 6 digits with atleast 1 uppercase,1 lowercase,1 special character and 1 number.", passId);
    }
    else {
        onSuccess(password, passId);
        return true;

    }
}
function confirmPasswordValidate() {
    var confirmPassId = document.getElementById("id3");
    if (confirmPassword.value.trim() === "") {
        onError(confirmPassword, "Enter your passsword again.", confirmPassId);
    }
    else if (password.value.trim() !== confirmPassword.value.trim()) {
        onError(confirmPassword, "Passwords does not match.", confirmPassId);
    }
    else {
        onSuccess(confirmPassword, confirmPassId);
        return true;

    }
}

function firstNameValidate() {
    var idFname = document.getElementById("id4");
    if (firstName.value.trim() === "") {
        onError(firstName, "First name cannot be empty.", idFname);
    }
    else if (!nameValidation(firstName.value.trim())) {
        onError(firstName, "First name should contain only letters.", idFname);
    }
    else {
        onSuccess(firstName, idFname);
        return true;

    }
}

function dateValidate() {
    var dateId = document.getElementById("id6");

    if (dob.value.trim() === "") {
        onError(dob, "Enter your date of birth.", dateId);
    }
    else {
        onSuccess(dob, dateId);
        return true;

    }
}

function genderValidate() {
    var genderId = document.getElementById("id7");
    if (genderMale.checked === false && genderFemale.checked === false && genderOther.checked===false) {
        onError(genderFemale, "Gender must be selected.", genderId);
    }
    else {
        onSuccess(genderFemale, genderId);
        return true;

    }
}

function stateValidate() {
    var stateId = document.getElementById("id8");
    if (!stateValidation(state.value.trim())) {
        onError(state, "State must be selected.", stateId);
    }
    else {
        onSuccess(state, stateId);
        return true;
    }
}

function phoneNumberValidate() {
    var phoneId = document.getElementById("id9");
    if (mobile.value.trim() === "") {
        onError(mobile, "Phone Number must be filled.", phoneId);
    }
    else if (!phoneNumberValidation(mobile.value.trim())) {
        onError(mobile, "Phone Number should start with [6-9] followed by 9 digits.", phoneId);
    }
    else {
        onSuccess(mobile, phoneId);
        return true;

    }
}

function graduateValidate() {
    var graduateId = document.getElementById("id10")
    if (!graduateValidation(graduation.value.trim())) {
        onError(graduation, "Highest graduation not selected.", graduateId);
    }
    else {
        onSuccess(graduation, graduateId);
        return true;
    }
}

function yearOfPassValidate() {
    var yearId = document.getElementById("id11");
    if (yearOfPass.value.trim() === "") {
        onError(yearOfPass, "Year of passing must be filled.", yearId);
    }
    else if (!yearOfPassValidation(yearOfPass.value.trim())) {
        onError(yearOfPass, "Enter a valid year", yearId);
    }
    else {
        onSuccess(yearOfPass, yearId);
        return true;

    }
}

function departmentValidate() {
    var deptId = document.getElementById("id12")
    if (!departmentValidation(department.value.trim())) {
        onError(department, "Department must be selected.", deptId);
    }
    else {
        onSuccess(department, deptId);
        return true;
    }
}

function conditionsValidate() {
    var conditionsId = document.getElementById("id13");
    if (!checkValidation(terms.value.trim())) {
        onError(terms, "Please select the checkbox to complete registration.", conditionsId);
    }
    else {
        onSuccess(terms, conditionsId);
        return true;
    }
}

let emailId = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmpass")
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let dob = document.getElementById("dob");
let genderMale = document.getElementById("male");
let genderFemale = document.getElementById("female");
let genderOther=document.getElementById("others");
let state = document.getElementById("state");
let mobile = document.getElementById("mobile");
let graduation = document.getElementById("education");
let yearOfPass = document.getElementById("year")
let department = document.getElementById("department");
let terms = document.getElementById("conditions");

emailId.addEventListener('blur', emailIdValidate)
password.addEventListener('blur', passwordValidate);
confirmPassword.addEventListener('blur', confirmPasswordValidate)
firstName.addEventListener('blur', firstNameValidate);
dob.addEventListener('blur', dateValidate);
genderMale.addEventListener('blur', genderValidate);
genderFemale.addEventListener('blur', genderValidate);
genderOther.addEventListener('blur',genderValidate);
state.addEventListener('blur', stateValidate);
mobile.addEventListener('blur', phoneNumberValidate);
graduation.addEventListener('blur', graduateValidate);
yearOfPass.addEventListener('blur', yearOfPassValidate);
department.addEventListener('blur', departmentValidate);
terms.addEventListener('blur', conditionsValidate);

function onSuccess(input, id) {
    id.innerHTML = "";
}

function onError(input, message, id) {
    id.innerHTML = message;
    input.classList.add('error');
}

function emailIdValidation(emailId) {
    var emailIdRegx = /^[a-z0-9]{5,13}@[a-z]+\.[a-z\.]{2,6}$/;
    if (emailId.match(emailIdRegx)) {
        return true;
    }
    else {
        return false;
    }

}

function passwordValidation(password) {
    var passwordRegx = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9!@#$%^&*]{6,15}$/;
    if (password.match(passwordRegx)) {
        return true;
    }
    else {
        return false;
    }
}

function nameValidation(name) {
    var nameRegx = /^[a-zA-Z]{3,15}$/;
    if (name.match(nameRegx)) {
        return true;
    }
    else {
        return false;
    }
}

// function dateValidation(dob) {
//     if (dob.value.trim() === undefined) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

function stateValidation(state) {
    if (state === "") {
        return false;
    }
    else {
        return true;
    }
}

function phoneNumberValidation(mobile) {
    var phoneNumberRegx = /^[6-9]{1}[0-9]{9}$/;
    if (mobile.match(phoneNumberRegx)) {
        return true;
    }
    else {
        return false;
    }
}

function graduateValidation(graduation) {
    if (graduation === "") {
        return false;
    }
    else {
        return true;
    }
}

function yearOfPassValidation(yearOfPass) {
    var yearRegex = /^[1]{1}[9]{1}[5-9]{1}[0-9]{1}$/;
    var yearRegex1 = /^[2]{1}[0]{1}[0-2]{1}[0-9]{1}$/;
    if (yearOfPass.match(yearRegex) || yearOfPass.match(yearRegex1)) {
        return true;
    }
    else {
        return false;
    }
}

function departmentValidation(department) {
    if (department === "") {
        return false;
    }
    else {
        return true;
    }
}

function conditionsValidate(terms) {
    if (terms.checked === false) {
        return false;
    }
    else {
        return true;
    }
}

function validateForm() {
    if (department.value.trim() === "") {
        document.getElementById("id12").innerHTML = "Department must be selected.";
        if (terms.checked == false) {
            document.getElementById("id13").innerHTML = "Select the above checkbox to complete registration.";
        }
    }
    else {
        if (departmentValidate() == true && terms.checked == true) {
            return true;
        }
    }
    return false;

}
