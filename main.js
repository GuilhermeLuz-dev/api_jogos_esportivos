const time = document.getElementById("input-times");
const search = document.getElementById("search");
const foundJogos = document.getElementById("foundGames");

search.addEventListener("click", () => {
  const timeNome = time.value;

  const res = fetch("http://localhost:3000/jogos/nome/" + timeNome)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      listJogos(res);
    });
});

const listJogos = (jogos) => {
  foundJogos.innerHTML = "";
  jogos.forEach((jogo) => {
    foundJogos.insertAdjacentHTML(
      "beforeend",
      `
      <li class="card">
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
