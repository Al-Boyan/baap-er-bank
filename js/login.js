document.getElementById('login-submit').addEventListener('click', function () {

    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;


    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;

    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        console.log('matched');
        window.location.href = 'banking.html';
    }
})

