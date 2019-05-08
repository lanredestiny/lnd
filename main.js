
let emailError = document.getElementById('email-error');
let bounce = document.getElementById('bounce');
let email = document.getElementById('email');
let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function checkEmail() {
    if (!filter.test(email.value)) {
        emailError.style.display = 'block';
        email.focus;
        return false;
    }else {
        bounce.style.display = 'block';
        email.focus;
        return false;
    }
}


email.addEventListener('blur', emailVerify, true);
function emailVerify() {
    if (email.value != "") {
        emailError.style.display = 'none';
        return true;
    }
}

// Prevent form submit
document.getElementById('emailForm').addEventListener('submit', submitEmail);
function submitEmail(e) {
    e.preventDefault();
}
