const time = document.getElementById("input-times");
const search = document.getElementById("search");

search.addEventListener("click", () => {
  const timeNome = time.value;

  const res = fetch("http://localhost:3000/jogos/nome/" + timeNome)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
});
