const botao = document.querySelector("button");
const estoque = 10;

function soma() {
  const div = document.querySelector("div");
  const total = Number(div.innerText) + 1;
  if (total <= estoque) {
    div.innerText = total;
    console.log("Itens no carrinho: " + total);
  } else {
    console.log("Limite de itens por carrinho atingido!");
  }
}

if (botao) {
  botao.addEventListener("click", soma);
}
