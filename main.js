let loop1 = "";


while (loop1 !== "continuar perguntando") {
loop1 = prompt("Qual o melhor time do mundo?");

  if (loop1 === "Largados fc") {
    alert("boa bola garotinho(a)!");
    continuar perguntando=false//sai loop apos resposta correta
  } else {
    alert(NÃO é isso. Tente novamente!);
  }
}
//chiamada da funçao para iniciar o processo
verificarTime();