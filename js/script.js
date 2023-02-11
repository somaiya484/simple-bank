document.getElementById('btn-submit').addEventListener('click', function(){
    //get email
    const emailField = document.getElementById('enter-email');
    const email = emailField.value;

    //get password
    const passwordField = document.getElementById("enter-password");
    const password = passwordField.value;

    if(email === 'somaiya@gmail.com' && password === 'somaiya'){
        window.location.href = 'bank.html';
    }
})