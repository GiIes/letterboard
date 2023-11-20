function logar(e){
    e.preventDefault();
    var Login = document.querySelector('input[type="text"]').value;
    var Senha = document.querySelector('input[type="password"]').value;
    if (Login === "admin" && Senha === 'admin') {
        alert('Sucesso');
        location.href = 'home.html';
    } else {
        alert('Erro');
    }
}

const formulario = document.querySelector('.formulario');
const loginlink = document.querySelector('.loginlink');
const linkregistro = document.querySelector('.linkregistro');

linkregistro.addEventListener('click', () => {
    formulario.classList.add('Active');
});

loginlink.addEventListener('click', () => {
    formulario.classList.remove('Active');
});



