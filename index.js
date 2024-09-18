const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if (validateName() && validateEmail() && validatePassword()) {
        alert('Form submitted successfully');
    }
});

function validateName(){
    let name = document.getElementById('name').value;

    if (name.length == 0) {
        nameError.innerHTML ='Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML ='Write your full Name';
        return false;
    }
    nameError.innerHTML='';
    return true;
};


function validateEmail(){
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML ='Email is required';
        return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.innerHTML ='Write your full Email';
        return false;
    }
    emailError.innerHTML='';
    return true;
};

function validatePassword(){
    let password = document.getElementById('password').value;

    if (password.length == 0) {
        passError.innerHTML ='Password is required';
        return false;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)
    ) {
        passError.innerHTML ='Password should contain 1 Uppercase , 1 Lowercase , 1 Digit & 1 Alphabet'; 
        return false;
    }
    passError.innerHTML='';
    return true;
};