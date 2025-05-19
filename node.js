const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

let jogos = [
  {
    time1: "Flamengo",
    time2: "Corintias",
    data: "2023-10-01",
    hora: "16:00",
    canal: "Globo",
    estadio: "Maracanã",
    campionato: "Brasileirão",
  },
];
