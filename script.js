const jogos = require("./jogos");

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

// End Point de busca por nomes;
app.get("/jogos/nome/:nome", (req, res) => {
  const nome = req.params.nome;
  let jogosEncontrados = jogos.filter(
    (c) =>
      c.time1.nome.toLowerCase() === nome.toLowerCase() ||
      (c.time2.nome.toLowerCase() === nome.toLowerCase() &&
        new Date(c.data) >= new Date())
  );

  if (jogosEncontrados.length > 0) {
    res.json(jogosEncontrados);
  } else {
    res.json(jogosEncontrados);
    res.status(404).json({ error: "Jogo não encontrado" });
  }
});

// End Point de busca por campeonato
app.get("/jogos/campeonato/:campeonato", (req, res) => {
  const campeonato = req.params.campeonato;
  let jogosEncontrados = jogos.filter(
    (c) =>
      c.campeonato.toLowerCase() === campeonato.toLowerCase() &&
      new Date(c.data) >= new Date()
  );

  if (jogosEncontrados.length > 0) {
    res.json(jogosEncontrados);
  } else {
    res.json(jogosEncontrados);
    res.status(404).json({ error: "Jogo não encontrado" });
  }
});

// End point de busca por rodada;
app.get("/jogos/rodada/:rodada", (req, res) => {
  const rodada = req.params.rodada;
  // Verifica se rodada é um número válido
  if (isNaN(Number(rodada))) {
    res.json({});
    return res.status(400).json({ error: "Rodada deve ser um número" });
  }
  let jogosEncontrados = jogos.filter(
    (c) => Number(c.rodada) === Number(rodada) && new Date(c.data) >= new Date()
  );

  if (jogosEncontrados.length > 0) {
    res.json(jogosEncontrados);
  } else {
    res.json(jogosEncontrados);
    res.status(404).json({ error: "Jogo não encontrado" });
  }
});

// End point de busca por estádio;
app.get("/jogos/estadio/:estadio", (req, res) => {
  const estadio = req.params.estadio;
  let jogosEncontrados = jogos.filter(
    (c) =>
      c.estadio.toLowerCase() === estadio.toLowerCase() &&
      new Date(c.data) >= new Date()
  );

  if (jogosEncontrados.length > 0) {
    res.json(jogosEncontrados);
  } else {
    res.json(jogosEncontrados);
    res.status(404).json({ error: "Jogo não encontrado" });
  }
});

app.get("/jogos/data/:data", (req, res) => {
  const data = req.params.data;
  const jogosProximos = [];
  let currentData = new Date();
  let nextWeek = new Date(currentData);
  nextWeek.setDate(currentData.getDate() + 6);
  for (let j = 0; j < jogos.length; j++) {
    const dataJogo = new Date(jogos[j].data);
    if (dataJogo <= nextWeek && dataJogo >= currentData) {
      jogosProximos.push(jogos[j]);
    }
  }
  res.json(jogosProximos);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
