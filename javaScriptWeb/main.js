console.log(document);
console.log(document.head);
console.log(document.body);
// --------------ACESSANDO OS ELEMENTOS ------------------------

let div = document.getElementById("app"); // por ID
console.log(div);

let paises = document.getElementsByClassName("paises"); // por Class
console.log(paises);

let containers = document.getElementsByTagName("div"); // por Tag
console.log(containers.length);
console.log(containers);
// ---------- Utilizando o mesmo metodo
let container = document.querySelector("#container"); // acessando por ID
console.log(container);

console.log(document.querySelector(".texto")); // acessando por Class

console.log(document.querySelector("#container p")); // selecionando a tag p pelo ID

// ------------MODIFICAR OS ELEMENTOS ------------------------

let titulo = document.getElementById("titulo");
console.log(titulo.innerText);
titulo.innerText = "Olá Coder!";
console.log(titulo.innerText); // alterando o texto
const DateTime = luxon.DateTime;
container = document.getElementById("container");
container.innerHTML = `<h2> ${DateTime.fromISO("2025-05-25")}</h2>`; // alterando o html

let nome = document.getElementById("nome");
let idade = document.getElementById("idade");

nome.value = "Carolina";
idade.value = 29;

// Criar lista a partir de um Array

let alunos = ["Mariana", "Michel", "Thamirys", "Juan", "Leonardo"];

let listaAlunos = document.getElementById("alunos");

for (const aluno of alunos) {
  let li = document.createElement("li");
  li.innerHTML = aluno;
  listaAlunos.append(li);
}

// ---------- EVENTOS

let botao = document.getElementById("botao1");
let botao2 = document.getElementById("botao2");
// 1 metodo
botao.addEventListener("click", () => {
  alert("Cliquei no primeiro botao");
});
// 2 metodo
botao2.onclick = () => {
  alert("Cliquei no segundo botao");
};
// 3 metodo
function functionMetodo3() {
  let inputBotao = document.getElementById("nomeBotao").value;
  console.log(inputBotao);
}

// EXERCICIO 2

// let tarefas = [];

// let botaoEnviar = document.getElementById("enviar");
// botaoEnviar.addEventListener("click", acaoEnviar);

// let entrada = document.getElementById("entrada");

// function acaoEnviar() {
//   tarefas.push(entrada.value);
// }

// let botaoVisualizar = document.getElementById("visualizar");
// botaoVisualizar.addEventListener("click", acaoVisualizar);

// function acaoVisualizar() {
//   var resultado = document.getElementById("resultado");
//   resultado.innerText = "";

//   tarefas.forEach((t) => {
//     var item = document.createElement("li");
//     item.innerText = t;
//     resultado.append(item);
//   });
// }
// let botaoLimpar = document.getElementById("limpar");
// botaoLimpar.addEventListener("click", acaoLimpar);

// function acaoLimpar() {
//   tarefas = [];
//   acaoVisualizar();
// }

let meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
  //Cancelamos o comportamento do evento
  e.preventDefault();
  //Obtemos o elemento a partir de onde o evento foi disparado
  let formulario = e.target;

  //Obtemos o valor do primeiro filho <input type="text">
  console.log(formulario.children[0].value);
  //Obtemos o valor do segundo filho <input type="number">
  console.log(formulario.children[1].value);
}
