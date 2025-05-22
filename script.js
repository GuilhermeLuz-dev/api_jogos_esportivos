const jogos = require("./jogos");

const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.get("/jogos/id/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const jogo = jogos.find((c) => c.id === id);
  if (jogo) {
    res.json(jogo);
  } else {
    res.status(404).json({ error: "Jogo não encontrado" });
  }
});

app.get("/jogos", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/jogos/nome/:nome", (req, res) => {
  const nome = req.params.nome;
  const jogosEncontrados = jogos.filter(
    (c) =>
      c.time1.nome.toLowerCase() === nome.toLowerCase() ||
      c.time2.nome.toLowerCase() === nome.toLowerCase()
  );
  if (jogosEncontrados.length > 0) {
    res.json(jogosEncontrados);
  } else {
    res.status(404).json({ error: "Jogo não encontrado" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
