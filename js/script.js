// document.getElementById('btn-submit').addEventListener('click', function(){
//     //get email
//     const emailField = document.getElementById('enter-email');
//     const email = emailField.value;

//     //get password
//     const passwordField = document.getElementById("enter-password");
//     const password = passwordField.value;

//     //navigate to another page
//     if(email === 'somaiya@gmail.com' && password === 'somaiya'){
//         window.location.href = 'bank.html';
//     }else{
//         alert('your email or password is not matched.')
//     }
// })






document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('enter-email');
    const email = userEmail.value;
    const userPassword = document.getElementById('enter-password');
    const password = userPassword.value;

    // check validation and navigate to another page
    if(email === 'somaiya@gmail.com' && password === '123'){
        window.location.href = 'bank.html'
    }else{
        alert('Your email or password is wrong. Try tto give valid user or password')
    }
    userEmail.value = '';
    userPassword.value = '';
})