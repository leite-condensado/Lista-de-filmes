//terror, romance, comédia, fantasia, drama

//Depois do universo, 14, romance
//É assim que acaba, 14, romance
//Como eu era antes de você, 12, romance
//As branquelas, 14, comédia
//Meu malvado favorito, livre, comédia
//Pânico no lago, 14, terror
//Encanto, livre, fantasia
//O pior vizinho do mundo,14, comédia/drama
//Anaconda, 14, terror
//Pânico na floresta, 14, terror

let campoIdade;
let campoFantasia;
let campoAventura;


function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("sua idade:");
  campoIdade = createInput("15");
  campoTerror = createCheckbox("Gosta de Terror?");
  campoRomance = createCheckbox("Gosta de romance?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeTerror = campoTerror.checked();
  let gostaDeRomance = campoRomance.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeTerror, gostaDeRomance);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeTerror, gostaDeRomance) {
  if (idade >= 14) {
    if (idade >= 14) {
      return "Depois do universo";
    } else {
      if (idade >= 12) {
        if(gostaDeTerror || gostaDeRomance) {
          return "Pânico na floresta";          
        } else{
         return "Como eu era antes de você";
        }
      } else {
        if (gostaDeTerror) {
          return "Anaconda";
        } else {
          return "Meu malvado favorito";
        }
      }
    }
  } else {
    if (gostaDeTerror) {
      return "Pânico no lago";
    } else {
      return "Encanto";
    }
  }
}
