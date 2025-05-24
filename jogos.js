const jogos = [
  {
    id: 1,
    rodada: 10,
    time1: {
      nome: "São Paulo",
      escudo: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-512.png",
    },
    time2: {
      nome: "Mirassol",
      escudo: "https://logodetimes.com/times/mirassol/logo-mirassol-512.png",
    },
    data: "2025-05-22",
    hora: "18:30",
    canal: ["Premier", "Globo"],
    estadio: "Morumbis",
    campeonato: "Brasileirão",
  },
  {
    id: 2,
    rodada: 10,
    time1: {
      nome: "Fluminense",
      escudo:
        "https://logodetimes.com/times/fluminense/logo-fluminense-512.png",
    },
    time2: {
      nome: "Vasco da Gama",
      escudo:
        "https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-512.png",
    },
    data: "2025-05-24",
    hora: "18:30",
    canal: ["Sportv", "Premiere"],
    estadio: "Maracanã",
    campeonato: "Brasileirão",
  },
  {
    id: 3,
    rodada: 10,
    time1: {
      nome: "Atlético Mineiro",
      escudo:
        "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-512.png",
    },
    time2: {
      nome: "Corinthians",
      escudo:
        "https://logodetimes.com/times/corinthians/logo-corinthians-512.png",
    },
    data: "2025-05-24",
    hora: "21:00",
    canal: ["Sportv", "Premiere"],
    estadio: "Arena MRV",
    campeonato: "Brasileirão",
  },
  {
    id: 4,
    rodada: 10,
    time1: {
      nome: "Grêmio",
      escudo: "https://logodetimes.com/times/gremio/logo-gremio-512.png",
    },
    time2: {
      nome: "Bahia",
      escudo: "https://logodetimes.com/times/bahia/logo-bahia-512.png",
    },
    data: "2025-05-25",
    hora: "11:00",
    canal: ["Premiere"],
    estadio: "Arena do Grêmio",
    campeonato: "Brasileirão",
  },
  {
    id: 5,
    rodada: 10,
    time1: {
      nome: "Palmeiras",
      escudo: "https://logodetimes.com/times/palmeiras/logo-palmeiras-512.png",
    },
    time2: {
      nome: "Flamengo",
      escudo: "https://logodetimes.com/times/flamengo/logo-flamengo-512.png",
    },
    data: "2025-05-25",
    hora: "16:00",
    canal: ["Globo", "Premiere"],
    estadio: "Allianz Parque",
    campeonato: "Brasileirão",
  },
  {
    id: 6,
    rodada: 10,
    time1: {
      nome: "Sport Recife",
      escudo:
        "https://logodetimes.com/times/sport-recife/logo-sport-recife-512.png",
    },
    time2: {
      nome: "Internacional",
      escudo:
        "https://logodetimes.com/times/internacional/logo-internacional-512.png",
    },
    data: "2025-05-25",
    hora: "16:00",
    canal: ["Premiere"],
    estadio: "Ilha do Retiro",
    campeonato: "Brasileirão",
  },
  {
    id: 7,
    rodada: 10,
    time1: {
      nome: "Vitória",
      escudo: "https://logodetimes.com/times/vitoria/logo-vitoria-512.png",
    },
    time2: {
      nome: "Santos",
      escudo: "https://logodetimes.com/times/santos/logo-santos-512.png",
    },
    data: "2025-05-25",
    hora: "18:30",
    canal: ["Premiere"],
    estadio: "Barradão",
    campeonato: "Brasileirão",
  },
  {
    id: 8,
    rodada: 10,
    time1: {
      nome: "Fortaleza",
      escudo: "https://logodetimes.com/times/fortaleza/logo-fortaleza-512.png",
    },
    time2: {
      nome: "Cruzeiro",
      escudo: "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-512.png",
    },
    data: "2025-05-25",
    hora: "20:30",
    canal: ["Premiere"],
    estadio: "Castelão",
    campeonato: "Brasileirão",
  },
  {
    id: 9,
    rodada: 10,
    time1: {
      nome: "Red Bull Bragantino",
      escudo:
        "https://logodetimes.com/times/red-bull-bragantino/logo-red-bull-bragantino-512.png",
    },
    time2: {
      nome: "Juventude",
      escudo: "https://logodetimes.com/times/juventude/logo-juventude-512.png",
    },
    data: "2025-05-26",
    hora: "20:00",
    canal: ["Premiere"],
    estadio: "Nabi Abi Chedid",
    campeonato: "Brasileirão",
  },
  {
    id: 10,
    rodada: 10,
    time1: {
      nome: "Botafogo",
      escudo: "https://logodetimes.com/times/botafogo/logo-botafogo-512.png",
    },
    time2: {
      nome: "Ceará",
      escudo: "https://logodetimes.com/times/ceara/logo-ceara-512.png",
    },
    data: "2025-06-04",
    hora: "20:00",
    canal: ["Premiere"],
    estadio: "Nilton Santos",
    campeonato: "Brasileirão",
  },
  // Rodada 11
  {
    id: 11,
    rodada: 11,
    time1: {
      nome: "Bahia",
      escudo: "https://logodetimes.com/times/bahia/logo-bahia-512.png",
    },
    time2: {
      nome: "São Paulo",
      escudo: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-512.png",
    },
    data: "2025-05-31",
    hora: "18:30",
    canal: ["Premiere"],
    estadio: "Arena Fonte Nova",
    campeonato: "Brasileirão",
  },
  {
    id: 12,
    rodada: 11,
    time1: {
      nome: "Vasco da Gama",
      escudo:
        "https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-512.png",
    },
    time2: {
      nome: "Red Bull Bragantino",
      escudo:
        "https://logodetimes.com/times/red-bull-bragantino/logo-red-bull-bragantino-512.png",
    },
    data: "2025-05-31",
    hora: "21:00",
    canal: ["Sportv", "Premiere"],
    estadio: "Estádio São Januário",
    campeonato: "Brasileirão",
  },
  {
    id: 13,
    rodada: 11,
    time1: {
      nome: "Mirassol",
      escudo: "https://logodetimes.com/times/mirassol/logo-mirassol-512.png",
    },
    time2: {
      nome: "Sport Recife",
      escudo:
        "https://logodetimes.com/times/sport-recife/logo-sport-recife-512.png",
    },
    data: "2025-06-01",
    hora: "11:00",
    canal: ["Premiere"],
    estadio: "Estádio José Maria de Campos Maia",
    campeonato: "Brasileirão",
  },
  {
    id: 14,
    rodada: 11,
    time1: {
      nome: "Juventude",
      escudo: "https://logodetimes.com/times/juventude/logo-juventude-512.png",
    },
    time2: {
      nome: "Grêmio",
      escudo: "https://logodetimes.com/times/gremio/logo-gremio-512.png",
    },
    data: "2025-06-01",
    hora: "16:00",
    canal: ["Premiere"],
    estadio: "Estádio Alfredo Jaconi",
    campeonato: "Brasileirão",
  },
  {
    id: 15,
    rodada: 11,
    time1: {
      nome: "Santos",
      escudo: "https://logodetimes.com/times/santos/logo-santos-512.png",
    },
    time2: {
      nome: "Botafogo",
      escudo: "https://logodetimes.com/times/botafogo/logo-botafogo-512.png",
    },
    data: "2025-06-01",
    hora: "16:00",
    canal: ["Premiere"],
    estadio: "Estádio Vila Belmiro",
    campeonato: "Brasileirão",
  },
  {
    id: 16,
    rodada: 11,
    time1: {
      nome: "Ceará",
      escudo: "https://logodetimes.com/times/ceara/logo-ceara-512.png",
    },
    time2: {
      nome: "Atlético Mineiro",
      escudo:
        "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-512.png",
    },
    data: "2025-06-01",
    hora: "18:30",
    canal: ["Premiere"],
    estadio: "Estádio Castelão",
    campeonato: "Brasileirão",
  },
  {
    id: 17,
    rodada: 11,
    time1: {
      nome: "Corinthians",
      escudo:
        "https://logodetimes.com/times/corinthians/logo-corinthians-512.png",
    },
    time2: {
      nome: "Vitória",
      escudo: "https://logodetimes.com/times/vitoria/logo-vitoria-512.png",
    },
    data: "2025-06-01",
    hora: "18:30",
    canal: ["Premiere"],
    estadio: "Neo Química Arena",
    campeonato: "Brasileirão",
  },
  {
    id: 18,
    rodada: 11,
    time1: {
      nome: "Flamengo",
      escudo: "https://logodetimes.com/times/flamengo/logo-flamengo-512.png",
    },
    time2: {
      nome: "Fortaleza",
      escudo: "https://logodetimes.com/times/fortaleza/logo-fortaleza-512.png",
    },
    data: "2025-06-01",
    hora: "18:30",
    canal: ["Premiere"],
    estadio: "Maracanã",
    campeonato: "Brasileirão",
  },
  {
    id: 19,
    rodada: 11,
    time1: {
      nome: "Cruzeiro",
      escudo: "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-512.png",
    },
    time2: {
      nome: "Palmeiras",
      escudo: "https://logodetimes.com/times/palmeiras/logo-palmeiras-512.png",
    },
    data: "2025-06-01",
    hora: "19:30",
    canal: ["Premiere"],
    estadio: "Estádio Mineirão",
    campeonato: "Brasileirão",
  },
  {
    id: 20,
    rodada: 11,
    time1: {
      nome: "Internacional",
      escudo:
        "https://logodetimes.com/times/internacional/logo-internacional-512.png",
    },
    time2: {
      nome: "Fluminense",
      escudo:
        "https://logodetimes.com/times/fluminense/logo-fluminense-512.png",
    },
    data: "2025-06-01",
    hora: "20:30",
    canal: ["Premiere"],
    estadio: "Estádio Beira-Rio",
    campeonato: "Brasileirão",
  },
  // Rodada 12
  {
    id: 21,
    rodada: 12,
    time1: {
      nome: "Red Bull Bragantino",
      escudo:
        "https://logodetimes.com/times/red-bull-bragantino/logo-red-bull-bragantino-512.png",
    },
    time2: {
      nome: "Bahia",
      escudo: "https://logodetimes.com/times/bahia/logo-bahia-512.png",
    },
    data: "2025-06-12",
    hora: "19:00",
    canal: ["Premiere"],
    estadio: "Estádio Nabi Abi Chedid",
    campeonato: "Brasileirão",
  },
  {
    id: 22,
    rodada: 12,
    time1: {
      nome: "Vitória",
      escudo: "https://logodetimes.com/times/vitoria/logo-vitoria-512.png",
    },
    time2: {
      nome: "Cruzeiro",
      escudo: "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-512.png",
    },
    data: "2025-06-12",
    hora: "19:00",
    canal: ["Premiere"],
    estadio: "Estádio Manoel Barradas",
    campeonato: "Brasileirão",
  },
  {
    id: 23,
    rodada: 12,
    time1: {
      nome: "Fortaleza",
      escudo: "https://logodetimes.com/times/fortaleza/logo-fortaleza-512.png",
    },
    time2: {
      nome: "Santos",
      escudo: "https://logodetimes.com/times/santos/logo-santos-512.png",
    },
    data: "2025-06-12",
    hora: "19:30",
    canal: ["Record TV", "Cazé TV"],
    estadio: "Estádio Plácido Aderaldo Castelo",
    campeonato: "Brasileirão",
  },
  {
    id: 24,
    rodada: 12,
    time1: {
      nome: "Grêmio",
      escudo: "https://logodetimes.com/times/gremio/logo-gremio-512.png",
    },
    time2: {
      nome: "Corinthians",
      escudo:
        "https://logodetimes.com/times/corinthians/logo-corinthians-512.png",
    },
    data: "2025-06-12",
    hora: "20:00",
    canal: ["Globo", "Premiere"],
    estadio: "Arena do Grêmio",
    campeonato: "Brasileirão",
  },
  {
    id: 25,
    rodada: 12,
    time1: {
      nome: "Atlético Mineiro",
      escudo:
        "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-512.png",
    },
    time2: {
      nome: "Internacional",
      escudo:
        "https://logodetimes.com/times/internacional/logo-internacional-512.png",
    },
    data: "2025-06-12",
    hora: "21:30",
    canal: ["Premiere"],
    estadio: "Arena MRV",
    campeonato: "Brasileirão",
  },
  {
    id: 26,
    rodada: 12,
    time1: {
      nome: "São Paulo",
      escudo: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-512.png",
    },
    time2: {
      nome: "Vasco da Gama",
      escudo:
        "https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-512.png",
    },
    data: "2025-06-12",
    hora: "21:30",
    canal: ["Premiere"],
    estadio: "MorumBIS",
    campeonato: "Brasileirão",
  },
  // Rodada 13
  {
    id: 27,
    rodada: 13,
    time1: {
      nome: "Bahia",
      escudo: "https://logodetimes.com/times/bahia/logo-bahia-512.png",
    },
    time2: {
      nome: "Atlético Mineiro",
      escudo:
        "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Arena Fonte Nova",
    campeonato: "Brasileirão",
  },
  {
    id: 28,
    rodada: 13,
    time1: {
      nome: "Corinthians",
      escudo:
        "https://logodetimes.com/times/corinthians/logo-corinthians-512.png",
    },
    time2: {
      nome: "Red Bull Bragantino",
      escudo:
        "https://logodetimes.com/times/red-bull-bragantino/logo-red-bull-bragantino-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Globo", "Premiere"],
    estadio: "Neo Química Arena",
    campeonato: "Brasileirão",
  },
  {
    id: 29,
    rodada: 13,
    time1: {
      nome: "Cruzeiro",
      escudo: "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-512.png",
    },
    time2: {
      nome: "Grêmio",
      escudo: "https://logodetimes.com/times/gremio/logo-gremio-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Mineirão",
    campeonato: "Brasileirão",
  },
  {
    id: 30,
    rodada: 13,
    time1: {
      nome: "Flamengo",
      escudo: "https://logodetimes.com/times/flamengo/logo-flamengo-512.png",
    },
    time2: {
      nome: "São Paulo",
      escudo: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Globo", "Premiere"],
    estadio: "Maracanã",
    campeonato: "Brasileirão",
  },
  {
    id: 31,
    rodada: 13,
    time1: {
      nome: "Fortaleza",
      escudo: "https://logodetimes.com/times/fortaleza/logo-fortaleza-512.png",
    },
    time2: {
      nome: "Ceará",
      escudo: "https://logodetimes.com/times/ceara/logo-ceara-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Record TV", "Cazé TV"],
    estadio: "Arena Castelão",
    campeonato: "Brasileirão",
  },
  {
    id: 32,
    rodada: 13,
    time1: {
      nome: "Internacional",
      escudo:
        "https://logodetimes.com/times/internacional/logo-internacional-512.png",
    },
    time2: {
      nome: "Vitória",
      escudo: "https://logodetimes.com/times/vitoria/logo-vitoria-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Beira-Rio",
    campeonato: "Brasileirão",
  },
  {
    id: 33,
    rodada: 13,
    time1: {
      nome: "Juventude",
      escudo: "https://logodetimes.com/times/juventude/logo-juventude-512.png",
    },
    time2: {
      nome: "Sport Recife",
      escudo:
        "https://logodetimes.com/times/sport-recife/logo-sport-recife-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Amazon Prime"],
    estadio: "Estádio Alfredo Jaconi",
    campeonato: "Brasileirão",
  },
  {
    id: 34,
    rodada: 13,
    time1: {
      nome: "Mirassol",
      escudo: "https://logodetimes.com/times/mirassol/logo-mirassol-512.png",
    },
    time2: {
      nome: "Fluminense",
      escudo:
        "https://logodetimes.com/times/fluminense/logo-fluminense-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Estádio Municipal de Mirassol",
    campeonato: "Brasileirão",
  },
  {
    id: 35,
    rodada: 13,
    time1: {
      nome: "Santos",
      escudo: "https://logodetimes.com/times/santos/logo-santos-512.png",
    },
    time2: {
      nome: "Palmeiras",
      escudo: "https://logodetimes.com/times/palmeiras/logo-palmeiras-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Globo", "Premiere"],
    estadio: "Vila Belmiro",
    campeonato: "Brasileirão",
  },
  {
    id: 36,
    rodada: 13,
    time1: {
      nome: "Vasco da Gama",
      escudo:
        "https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-512.png",
    },
    time2: {
      nome: "Botafogo",
      escudo: "https://logodetimes.com/times/botafogo/logo-botafogo-512.png",
    },
    data: "2025-07-11",
    hora: "23:00",
    canal: ["Sportv", "Premiere"],
    estadio: "São Januário",
    campeonato: "Brasileirão",
  },
  // Rodada 14
  {
    id: 37,
    rodada: 14,
    time1: {
      nome: "Atlético Mineiro",
      escudo:
        "https://logodetimes.com/times/atletico-mineiro/logo-atletico-mineiro-512.png",
    },
    time2: {
      nome: "Sport Recife",
      escudo:
        "https://logodetimes.com/times/sport-recife/logo-sport-recife-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Arena MRV",
    campeonato: "Brasileirão",
  },
  {
    id: 38,
    rodada: 14,
    time1: {
      nome: "Bahia",
      escudo: "https://logodetimes.com/times/bahia/logo-bahia-512.png",
    },
    time2: {
      nome: "Internacional",
      escudo:
        "https://logodetimes.com/times/internacional/logo-internacional-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Arena Fonte Nova",
    campeonato: "Brasileirão",
  },
  {
    id: 39,
    rodada: 14,
    time1: {
      nome: "Botafogo",
      escudo: "https://logodetimes.com/times/botafogo/logo-botafogo-512.png",
    },
    time2: {
      nome: "Vitória",
      escudo: "https://logodetimes.com/times/vitoria/logo-vitoria-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Estádio Nilton Santos",
    campeonato: "Brasileirão",
  },
  {
    id: 40,
    rodada: 14,
    time1: {
      nome: "Ceará",
      escudo: "https://logodetimes.com/times/ceara/logo-ceara-512.png",
    },
    time2: {
      nome: "Corinthians",
      escudo:
        "https://logodetimes.com/times/corinthians/logo-corinthians-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Arena Castelão",
    campeonato: "Brasileirão",
  },
  {
    id: 41,
    rodada: 14,
    time1: {
      nome: "Fluminense",
      escudo:
        "https://logodetimes.com/times/fluminense/logo-fluminense-512.png",
    },
    time2: {
      nome: "Cruzeiro",
      escudo: "https://logodetimes.com/times/cruzeiro/logo-cruzeiro-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Maracanã",
    campeonato: "Brasileirão",
  },
  {
    id: 42,
    rodada: 14,
    time1: {
      nome: "Grêmio",
      escudo: "https://logodetimes.com/times/gremio/logo-gremio-512.png",
    },
    time2: {
      nome: "Fortaleza",
      escudo: "https://logodetimes.com/times/fortaleza/logo-fortaleza-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Arena do Grêmio",
    campeonato: "Brasileirão",
  },
  {
    id: 43,
    rodada: 14,
    time1: {
      nome: "Juventude",
      escudo: "https://logodetimes.com/times/juventude/logo-juventude-512.png",
    },
    time2: {
      nome: "Vasco da Gama",
      escudo:
        "https://logodetimes.com/times/vasco-da-gama/logo-vasco-da-gama-512.png",
    },
    data: "2025-05-22",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Estádio Alfredo Jaconi",
    campeonato: "Brasileirão",
  },
  {
    id: 44,
    rodada: 14,
    time1: {
      nome: "Palmeiras",
      escudo: "https://logodetimes.com/times/palmeiras/logo-palmeiras-512.png",
    },
    time2: {
      nome: "Mirassol",
      escudo: "https://logodetimes.com/times/mirassol/logo-mirassol-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Allianz Parque",
    campeonato: "Brasileirão",
  },
  {
    id: 45,
    rodada: 14,
    time1: {
      nome: "Red Bull Bragantino",
      escudo:
        "https://logodetimes.com/times/red-bull-bragantino/logo-red-bull-bragantino-512.png",
    },
    time2: {
      nome: "São Paulo",
      escudo: "https://logodetimes.com/times/sao-paulo/logo-sao-paulo-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Estádio Nabi Abi Chedid",
    campeonato: "Brasileirão",
  },
  {
    id: 46,
    rodada: 14,
    time1: {
      nome: "Santos",
      escudo: "https://logodetimes.com/times/santos/logo-santos-512.png",
    },
    time2: {
      nome: "Flamengo",
      escudo: "https://logodetimes.com/times/flamengo/logo-flamengo-512.png",
    },
    data: "2025-07-15",
    hora: "23:00",
    canal: ["Premiere"],
    estadio: "Vila Belmiro",
    campeonato: "Brasileirão",
  },
];

module.exports = jogos;
