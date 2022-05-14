// variáveis

let cpf = document.querySelector('#cpf');
let cnpjCliente = document.querySelector('#cnpj-cliente');
let cnpjEmpresa = document.querySelector('#cnpj-empresa');
let segmentoMercado = document.querySelector('#segmento-mercado');
let nome = document.querySelector('#nome');
let senha = document.querySelector('#senha');
let senhaConfirmar = document.querySelector('#senha-confirmar');
let ver = document.querySelector('#ver');
let reSenha = document.querySelector('.resSenha');
let urlBi = document.querySelector('#url-bi');
let diaUtilBi = document.querySelector('#diautil-bi');
let verificaMin;
let verificaMaiu;
let verificaMinu;
let verificaNum;
let verificaEsp;

// regex  para a senha
const regexp = /[^0-9./-]/gi; 
const regexpl = /[^a-z]/gi; 
const regexpM = /[A-Z]/g; 
const regexpMi = /[a-z]/g; 
const regexpN = /[0-9]/;
const regexpNu = /[^0-9]/;
const regexpE = /[^a-zA-Z 0-9]+/g; 


function remove(arg) {
  arg.value = arg.value.slice(0, -1);
}
// Dia Util BI
diaUtilBi.addEventListener('keyup', function() {
  document.getElementById("diautil-bi").value = document.getElementById("diautil-bi").value.replace(regexpNu, '');
});

// CPF
cpf.addEventListener('keyup', function(event) { //pega o evento de pressionar uma tecla
  document.getElementById("cpf").value = document.getElementById("cpf").value.replace(regexp, '');
  if(event.keyCode === 190 || event.keyCode === 109 || event.keyCode === 189) {
    remove(document.getElementById("cpf"));
  }
  if(event.keyCode != 46 && event.keyCode != 8){//verifica se a tecla pressionada nao e um backspace (46) e delete (8)
    let i = document.getElementById("cpf").value.length; //pega o tamanho do input
    if (i === 3 || i === 7) //divisoes colocando um ponto no terceiro e setimo indice do cpf
      document.getElementById("cpf").value = document.getElementById("cpf").value + ".";
    else if (i === 11) // divisao colocando o tracinho no decimo primeiro indice
      document.getElementById("cpf").value = document.getElementById("cpf").value + "-";
  }
});
//CNPJ Cliente/Empresa
cnpjCliente.addEventListener('keyup', function(event) {
  document.getElementById("cnpj-cliente").value = document.getElementById("cnpj-cliente").value.replace(regexp, '');
  if(event.keyCode === 190 || event.keyCode === 109 || event.keyCode === 193 || event.keyCode === 189) {
    remove(document.getElementById("cnpj-cliente"));
  }
  if(event != 46 && event != 8){
    let i = document.getElementById("cnpj-cliente").value.length;
    if (i === 2 || i === 6) {
      document.getElementById("cnpj-cliente").value = document.getElementById("cnpj-cliente").value + ".";
    } else if(i === 10) {
      document.getElementById("cnpj-cliente").value = document.getElementById("cnpj-cliente").value + "/";
    } else if(i === 15) {
      document.getElementById("cnpj-cliente").value = document.getElementById("cnpj-cliente").value + "-";
    }
  }
});
cnpjCliente.addEventListener('blur', function() {
  if(document.getElementById("cnpj-cliente").value.length != 18) {
    alert("Cnpj Cliente inválido");
  }
});
cnpjEmpresa.addEventListener('keyup', function(event) {
  document.getElementById("cnpj-empresa").value = document.getElementById("cnpj-empresa").value.replace(regexp, '');
  if(event.keyCode === 190 || event.keyCode === 109 || event.keyCode === 193 || event.keyCode === 189) {
    remove(document.getElementById("cnpj-empresa"));
  }
  if(event != 46 && event != 8){
    let i = document.getElementById("cnpj-empresa").value.length;
    if (i === 2 || i === 6) {
      document.getElementById("cnpj-empresa").value = document.getElementById("cnpj-empresa").value + ".";
    } else if(i === 10) {
      document.getElementById("cnpj-empresa").value = document.getElementById("cnpj-empresa").value + "/";
    } else if(i === 15) {
      document.getElementById("cnpj-empresa").value = document.getElementById("cnpj-empresa").value + "-";
    }
  }
});
cnpjEmpresa.addEventListener('blur', function() {
  if(document.getElementById("cnpj-empresa").value.length != 18) {
    alert("Cnpj Empresa inválido");
  }
});

//Segmento Mercado 
segmentoMercado.addEventListener('keyup', function(event) {
  document.getElementById("segmento-mercado").value = document.getElementById("segmento-mercado").value.replace(regexpl, '');
  let segmentoMercadoValue = segmentoMercado.value;
  if (segmentoMercadoValue.length >= 3) {
    document.querySelector('.segMer').style.display = 'none';
  } else {
    document.querySelector('.segMer').style.display = 'block';
  }
});

//Nome 
nome.addEventListener('keyup', function(event) {
  document.getElementById("nome").value = document.getElementById("nome").value.replace(regexpl, '');
  let nomeValue = nome.value;
  if (nomeValue.length >= 3) {
    document.querySelector('.nome').style.display = 'none';
  } else {
    document.querySelector('.nome').style.display = 'block';
  }
});


//Senha
senha.addEventListener('keyup', function() {
  senhaValue = senha.value;
  if(senhaValue.length >= 8) {
    document.querySelector('.mincaractere').classList.add('success');
    verificaMin = true;
  } else {
    document.querySelector('.mincaractere').classList.remove('success');
    verificaMin = false;
  }
  if(senhaValue.match(regexpM)) {
    document.querySelector('.maiuscula').classList.add('success');
    verificaMaiu = true;
  } else {
    document.querySelector('.maiuscula').classList.remove('success');
    verificaMaiu = false;
  }
  if(senhaValue.match(regexpMi)) {
    document.querySelector('.minuscula').classList.add('success');
    verificaMinu = true;
  } else {
    document.querySelector('.minuscula').classList.remove('success');
    verificaMinu = false;
  }
  if(senhaValue.match(regexpN)) {
    document.querySelector('.numero').classList.add('success');
    verificaNum = true;
  } else {
    document.querySelector('.numero').classList.remove('success');
    verificaNum = false;
  }
  if(senhaValue.match(regexpE)) {
    document.querySelector('.especial').classList.add('success');
    verificaEsp = true;
  } else {
    document.querySelector('.especial').classList.remove('success');
    verificaEsp = false;
  }
});
senhaConfirmar.addEventListener('keyup', function() {
  senhaConfirmarValue = senhaConfirmar.value;
  senhaValue = senha.value;
  if(senhaValue === senhaConfirmarValue) {
    reSenha.classList.add('success');
    reSenha.innerHTML = 'Senhas conferem';
  } else {
    reSenha.classList.remove('success');
    reSenha.innerHTML = 'Senhas não conferem';
  }
});

senhaConfirmar.addEventListener('blur', function() {
  if(verificaMin && verificaMaiu && verificaMinu && verificaNum && verificaEsp && senhaValue === senhaConfirmarValue) {
    document.querySelector('#submit-button').removeAttribute('disabled');
  } else {
    document.querySelector('#submit-button').setAttribute('disabled', 'disabled');
  }
})
ver.addEventListener('click', function(e) {
  e.preventDefault();
  if(senha.type == "password") {
    senha.type = "text";
    senhaConfirmar.type = "text";
    ver.style.background = 'url("show.png") #fff no-repeat';
    ver.style.backgroundPosition = 'center';
    ver.style.backgroundSize = 'cover';
    ver.style.backgroundOrigin = 'content-box';
  } else {
    senha.type = "password";
    senhaConfirmar.type = "password";
    ver.style.background = 'url("visibility.png") #fff no-repeat';
    ver.style.backgroundPosition = 'center';
    ver.style.backgroundSize = 'cover';
    ver.style.backgroundOrigin = 'content-box';
  }
});

//URL

var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regexUrl = new RegExp(expression);
urlBi.addEventListener('blur', function() {
  let urlBiValue = urlBi.value;
  if (urlBiValue.match(regexUrl)) {
    document.querySelector('.url').style.display = 'none';
  } else {
    document.querySelector('.url').style.display = 'block';
  }
});
