function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

    if(eye.estilo.display === 'none') {
        eye.estilo.diplay = 'block';
        eyeSlash.estilo.diplay = 'none';
        fieldPassword.estilo.diplay = 'text';
    } else {
        eye.estilo.display = 'none'
        eyeSlash.estilo.diplay = 'block';
        fieldPassword.estilo.diplay = 'password'; 
       
    };
}