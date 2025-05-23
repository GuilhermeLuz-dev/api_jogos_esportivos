const searchInput = document.getElementById("input-times");
const search = document.getElementById("search");
const foundJogos = document.getElementById("foundGames");
const nextJogos = document.getElementById("nextGames");
const labelFoundJogos = document.getElementById("labelFoundJogos");
const labelNextJogos = document.getElementById("labelNextJogos");
const select = document.getElementById("select");

const getJogos = (shearchType) => {
  const inputValue = searchInput.value;
  if (!inputValue) {
    searchInput.classList.add("alert");
    setTimeout(() => {
      searchInput.classList.remove("alert");
    }, 2000);
    return;
  }

  fetch(`http://localhost:3000/jogos/${shearchType}/${inputValue}`)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      listJogos(res, foundJogos, labelFoundJogos);
    });
};

const handlePlaceholder = () => {
  switch (select.value) {
    case "nome":
      searchInput.placeholder = "Busque os jogos pelo nome do time...";
      break;
    case "rodada":
      searchInput.placeholder = "Busque os jogos pelo numero da rodada...";
      break;
    case "estadio":
      searchInput.placeholder = "Busque os jogos pelo estadio...";
      break;
    default:
      searchInput.placeholder = "Busque os jogos pelo campeonato...";
      break;
  }
};

select.addEventListener("change", () => {
  searchInput.value = "";
  handlePlaceholder();
});

const handleSelect = () => {
  handlePlaceholder();
  switch (select.value) {
    case "nome":
      getJogos("nome");
      break;
    case "rodada":
      getJogos("rodada");
      break;
    case "estadio":
      getJogos("estadio");
      break;
    default:
      getJogos("campeonato");
      break;
  }
};

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    handleSelect();
  }
});
search.addEventListener("click", () => {
  handleSelect();
});

const listJogos = (jogos, foundJogos, label) => {
  foundJogos.innerHTML = "";
  label.innerHTML =
    label.id == "labelFoundJogos" ? "Jogos encontrados:" : "Próximos jogos:";

  if (jogos.length == 0) {
    foundJogos.innerHTML =
      "<p class='feedback'>Não encontramos nenhum jogo!</p>";
  }
  jogos.forEach((jogo, i) => {
    foundJogos.insertAdjacentHTML(
      "beforeend",
      `
      <li class="card" style="animation-delay: ${i * 0.1}s;">
      <div class="card-header">
        <span>
        <i class="bi bi-calendar2-check"></i>
         ${returnData(jogo.data)}
        </span>
        <span>
        <i class="bi bi-alarm"></i>
        ${jogo.hora}
        </span>
      </div>
       <h3 class="rodada">${jogo.rodada}ª Rodada</h3>
      <div class="card-clubes">
        <div class="card-club">
        <img class="card-img-club" src="${jogo.time1.escudo}" alt="" />
        <p>${jogo.time1.nome}</p>
        </div>
        <img class="card-icon" src="./images/x.png" alt="" />
        <div class="card-club">
        <img class="card-img-club" src="${jogo.time2.escudo}" alt="" />
        <p>${jogo.time2.nome}</p>
        </div>
      </div>
      <div class="card-infos">
        <div class="info-trasmissao">
        <i class="bi bi-tv"></i>
        <span class="info">Transmissão:</span>
        <span class="info-canais">${
          Array.isArray(jogo.canal) ? jogo.canal.join(", ") : jogo.canal
        }</span>
        </div>
        <div class="info-estadio">
         <i class="bx bx-stadium"></i>
        <span class="info">Estádio:</span>
        <span class="info-estadio">${jogo.estadio}</span>
        </div>
        <div class="info-trasmissao">
        <i class="bi bi-trophy"></i>
        <span class="info">${jogo.campeonato}</span>
        </div>
      </div>
      </li>
    `
    );
  });
};

const meses = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

const returnData = (data) => {
  // Corrige o fuso horário criando a data como local
  const [ano, mes, dia] = data.split("-");
  const dataFormatada = new Date(ano, mes - 1, dia);
  const currentData = new Date();

  if (
    dataFormatada.getDate() === currentData.getDate() &&
    dataFormatada.getMonth() === currentData.getMonth() &&
    dataFormatada.getFullYear() === currentData.getFullYear()
  ) {
    return "Hoje";
  }
  return `${dataFormatada.getDate()} ${meses[dataFormatada.getMonth()]}`;
};

document.addEventListener("DOMContentLoaded", () => {
  handlePlaceholder();
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, "0");
  const dia = String(hoje.getDate()).padStart(2, "0");
  const dataAtual = `${ano}-${mes}-${dia}`;
  const resposta = fetch("http://localhost:3000/jogos/data/" + dataAtual);

  resposta
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      listJogos(res, nextJogos, labelNextJogos);
    });
});
