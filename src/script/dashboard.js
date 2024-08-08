const displayLogin = document.querySelector('.display-login');
const displaySystem = document.querySelector('.display-system');

const formLogar = document.querySelector('#login');
const formCadastro = document.querySelector('#cadastro');

const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
const logado = JSON.parse(localStorage.getItem('logado')) || [];

function displayCadastrar() {
    formLogar.style.display = 'none';
    formCadastro.style.display = 'flex';
}

function displayLogar() {
    formCadastro.style.display = 'none';
    formLogar.style.display = 'flex';
}

function mostrarDisplaySystem(){
    displayLogin.style.display = 'none';
    displaySystem.style.display = 'block';
}


async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(hash)));
}

async function cadastrar(){
    
    const nome = document.querySelector('#cadUser');
    const email = document.querySelector('#cadEmail');
    const senha = document.querySelector('#cadSenha');
    const confirmarSenha = document.querySelector('#cadConfirmarSenha');

    if (nome.value == '' || email.value == '' || senha.value == '' || confirmarSenha.value == '') {
        alert('Todos os campos precisam ser preenchidos');
        return;
    }

    if (senha.value != confirmarSenha.value) {
        alert("As senhas precisam ser iguais");
        return;
    }
    const usuario = usuarios.find(user => user.nome === nome.value);
    if(usuario) {
        alert('Já existe um usuário com esse nome');
        return
    }
    const hashedPassword = await hashPassword(senha.value);
    const novoUsuario = {
        nome: nome.value,
        email: email.value,
        senha: hashedPassword
    };

    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro efetuado com sucesso');

    
    nome.value = '';
    email.value = '';
    senha.value = '';
    confirmarSenha.value = '';
}

async function login() {
    
    const nome = document.querySelector("#usuario");
    const senha = document.querySelector("#senha");
    const hashedPassword = await hashPassword(senha.value);
    
    const usuario = usuarios.find(user => user.nome === nome.value);

    if (usuario && usuario.senha === hashedPassword) {
        alert('Parabéns, você logou');
        const statusLOG = {
            username: usuario.nome,
            log: 'logado'
        };
        logado.push(statusLOG);
        localStorage.setItem('logado', JSON.stringify(logado));
        mostrarDisplaySystem();
    } else {
        alert('Usuário ou senha incorretos');
    }
}
