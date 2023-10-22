const buttons = document.querySelectorAll(".button");
const imagePlant = document.querySelectorAll(".bottom-container");

buttons.forEach((button, indice) => {
  button.addEventListener("click", () => {
    desselecionarBotao();
    desselecionarPlanta();

    button.classList.add("select");
    imagePlant[indice].classList.add("select");
  });
});

function desselecionarPlanta() {
  const imagemSelecionada = document.querySelector(".bottom-container.select");
  imagemSelecionada.classList.remove("select");
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".button.select");
  botaoSelecionado.classList.remove("select");
}
