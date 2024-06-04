class Pousada {
  constructor(
    nome,
    localizacao,
    numeroQuartos,
    avaliacao,
    precoPorNoite,
    disponibilidade,
    cupomDesconto,
    novoUsuario // se é um novo usuario do site
  ) {
    this.nome = nome;
    this.localizacao = localizacao;
    this.numeroQuartos = numeroQuartos;
    this.avaliacao = avaliacao;
    this.disponibilidade = disponibilidade;
    this.cupomDesconto = cupomDesconto;
    this.novoUsuario = novoUsuario;
    this.precoPorNoite = precoPorNoite;
  }

  getDescricaoCompleta() {
    return `A pousada ${this.nome} está localizada em ${this.localizacao}. 
    Possui ${this.numeroQuartos} quartos e avaliação de ${this.avaliacao} estrelas.`;
  }

  calularPrecoFinal() {
    let precoTotal = this.precoPorNoite;
    if (this.cupomDesconto) {
      if (this.cupomDesconto === "POUSADA2") {
        // desconto de 2%
        precoTotal *= 0.98;
      } else if (this.cupomDesconto === "POUSADA5") {
        precoTotal *= 0.95;
      } else if (this.novoUsuario && this.cupomDesconto === "POUSADA10") {
        precoTotal *= 0.9;
      }
    }
    return precoTotal;
  }
}

const pousadas = [
  new Pousada(
    "Pousada Maravilha",
    "Belo Horizonte - MG",
    4,
    5,
    150,
    ["seg", "ter", "qua", "qui"],
    "POUSADA2",
    false
  ),
  new Pousada(
    "Pousada X",
    "Belo Horizonte - MG",
    4,
    5,
    100,
    ["seg"],
    "POUSADA2",
    false
  ),
];

console.log(pousadas[0].getDescricaoCompleta());

function cadastrarPousada() {
  const nome = prompt("Digite o nome da pousada:");
  const localizacao = prompt("Digite a localização da pousada:");
  const numeroQuartos = parseInt(
    prompt("Digite o número de quartos da pousada:")
  );
  const avaliacao = parseInt(prompt("Digite a avaliação da pousada (1 a 5):"));
  const disponibilidade = prompt(
    "Digite os dias de disponibilidade da pousada (separados por vírgula):"
  ).split(",");
  const cupomDesconto = prompt("Digite o cupom de desconto (ou deixe vazio):");

  const novoUsuario =
    prompt("É um novo usuário? (sim/não)").toLowerCase() === "sim";

  const precoPorNoite = parseFloat(
    prompt("Digite o preço por noite da pousada:")
  );
  const novaPousada = new Pousada(
    nome,
    localizacao,
    numeroQuartos,
    avaliacao,
    precoPorNoite,
    disponibilidade,
    cupomDesconto,
    novoUsuario
  );
  pousadas.push(novaPousada);
  alert("POUSADA CRIADA COM SUCESSO");
}

function filtrarPousadas() {
  const filtro =
    "1 - para filtrar por menor preco, 2 - por disponibilidade ( ou 0 para voltar)";

  const opcaoFiltro = prompt(filtro);

  if (opcaoFiltro === "1") {
    const pousadasOrdenadas = pousadas.sort(
      // ordernar o array por preco
      (primElem, segundoElem) =>
        primElem.precoPorNoite - segundoElem.precoPorNoite
    );
    pousadasOrdenadas.forEach((pousada) => {
      alert(`Nome: ${pousada.nome}, preco: ${pousada.precoPorNoite}`);
    });
  } else if (filtro === "2") {
    const dia = prompt(
      "Digite o dia da semana para verificar disponibilidade:"
    );
    const pousadasDisponiveis = pousadas.filter(
      (
        pousada // filtrando o array por dias
      ) => pousada.disponibilidade.includes(dia)
    );
    pousadasDisponiveis.forEach((pousada) => {
      alert(
        `Nome: ${pousada.nome}, Disponibilidade: ${pousada.disponibilidade.join(
          ", "
        )}`
      );
    });
  }
}

// Função para visualizar as pousadas
function visualizarPousadas() {
  if (pousadas.length === 0) {
    alert("Nenhuma pousada cadastrada.");
    return;
  }

  pousadas.forEach((pousada, index) => {
    console.log(`Pousada ${index + 1}`);
    console.log(`Nome: ${pousada.nome}`);
    console.log(`Descrição: ${pousada.getDescricaoCompleta()}`);

    console.log(`Disponibilidade: ${pousada.disponibilidade.join(", ")}`);
    console.log(`Preço com desconto: ${pousada.calularPrecoFinal()}`);
    console.log("---------------------");
  });
}

let opcao;
const menuPrincipal =
  "O que deseja, 1 - cadastrar pousada, 2 - Visualizar pousadas, 3 - filtros, 0 - sair";

do {
  opcao = prompt(menuPrincipal);

  switch (opcao) {
    case "1":
      cadastrarPousada();
      console.log(pousadas);
      break;
    case "2":
      visualizarPousadas();
      break;
    case "3":
      filtrarPousadas();
      break;
    case "0":
      console.log("saindo...");
      break;
    default:
      alert("Opcao invalida");
  }
} while (opcao !== "0");
