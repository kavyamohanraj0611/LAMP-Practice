/*JavaScript Section*/

const form=document.getElementById('form');
const firstName=document.getElementById('firstname');
const lastName=document.getElementById('lastname');
const email=document.getElementById('email');
const phoneNumber=document.getElementById('phoneNumber');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',function (event){event.preventDefault();inputValidate();});

function inputValidate()
{
    const firstNameValue=firstName.value.trim();
    const lastNameValue=lastName.value.trim();
    const emailValue=email.value.trim();
    const phoneNumberValue=phoneNumber.value.trim();
    const passwordValue=password.value;
    const password2Value=password2.value;
    
    var inputCount=0;

    const regexFirstName=/^[a-zA-Z]{2,15}$/;
    const regexLastName=/^[a-zA-Z]{1,15}$/;
    const regexEmail=/^([a-zA-Z0-9_\.\-]+)@([a-zA-Z]+)\.([a-zA-Z]{2,5})$/;
    const regexPhoneNumber=/^[6-9]{1}[0-9]{9}$/;

    if (firstNameValue==='')
    {
        setError(firstName,'First Name cannot be blank');
    }
    else if (!regexFirstName.test(firstNameValue))
    {
        setError(firstName,'First Name can contain only letters and numbers');
    }
    else
    {
        setSuccess(firstName);
        inputCount++;
    }

    if (lastNameValue==='')
    {
        setError(lastName,'Last Name cannot be blank');
    }
    else if (!regexLastName.test(lastNameValue))
    {
        setError(lastName,'Last Name can contain only letters and numbers');
    }
    else
    {
        setSuccess(lastName);
        inputCount++;
    }

    if (emailValue==='')
    {
        setError(email,'Email cannot be blank');
    }
    else if (!regexEmail.test(emailValue))
    {
        setError(email,'Enter valid email (eg-tonystark3000@gmail.com)');
    }
    else
    {
        setSuccess(email);
        inputCount++;
    }

    if (phoneNumberValue==='')
    {
        setError(phoneNumber,'Phone Number cannot be blank');
    }
    else if (!regexPhoneNumber.test(phoneNumberValue))
    {
        setError(phoneNumber,'Enter valid Phone Number');
    }
    else
    {
        setSuccess(phoneNumber);
        inputCount++;
    }

    if (passwordValue==='')
    {
        setError(password,'Password cannot be blank');
    }
    else if(passwordValue.length<8)
    {
        setError(password,'Password must be at least 8 characters');
    }
    else
    {
        setSuccess(password);
        inputCount++;
    }

    if (password2Value==='')
    {
        setError(password2,'Password cannot be blank');
    }
    else if(password2Value!==passwordValue)
    {
        setError(password2,'Passwords does not match');
    }
    else
    {
        setSuccess(password2);
        inputCount++;
    }

    if(inputCount==6)
    {
        alert("Successfully Registered !!!");
    }
}

function setError(element,message)
{
    const inputElement=element.parentElement;
    const errorDisplay=inputElement.querySelector('small');
    errorDisplay.innerText=message;
    inputElement.className='elements error';
    small.innerText=message;
}

function setSuccess(element)
{
    const inputElement=element.parentElement;
    inputElement.className='elements success';
}