class Ponto {
  //Gera a grade principal
  grade (div, classe) {
    let html5 = "<aside id='" + div + "'>";
    for (let contador = 0; contador <= 347; contador++) {
      html5 += "<div class='" + classe + "'>&nbsp;</div>";
    }
    html5 += "</aside>";
    return html5;
  }
  
  aleatorio (array_aleatorios ) {
    let random = Math.floor(Math.random() * 6);
    return parseInt(array_aleatorios[random]);
  }
  
  //Gera um ponto que vai da direita para a esquerda em des
  ponto_mov_direita (pontoInicial, pontoFinal, cor, tempo) {
    let timer = setInterval(function () {
      if (pontoInicial === pontoFinal) {
        clearInterval(timer);
      }
      document.getElementsByClassName("cubos")[pontoInicial].style.backgroundColor = cor;
      pontoInicial++;
    }, tempo);
  }
  //Gera um ponto que var da direita para a esquerda em deslocamento
  ponto_mov_esquerda (pontoInicial, pontoFinal, cor, tempo) {
    let timer = setInterval(function () {
      if (pontoInicial === pontoFinal) {
        clearInterval(timer);
      }
      document.getElementsByClassName("cubos")[pontoInicial].style.backgroundColor = cor;
        pontoInicial--;
      }, tempo);
    }

  }

//Gera os numeros aleatorios e seus anteriores aleatoriamente da direita para a esquerda
function pontos_right_left () {
   let ponto = new Ponto();
   document.getElementById("ini").innerHTML = ponto.grade("grade", "cubos",) + "<br>";
   
      let t = setInterval(function () {
          let p = ponto.aleatorio([57,115, 173, 231, 289, 347]);
          ponto.ponto_mov_esquerda(p, (p - 57), "#000", 200);
        let tmerRastro = setTimeout(function() {
          ponto.ponto_mov_esquerda(p, (p - 57), "#ccc", 200);
        } , 200);
      
      }, 200);
}

//ra os numeros aleatorios e seus anteriores aleatoriamente da esquerda para a direita
function pontos_left_right () {
   let ponto = new Ponto();
   document.getElementById("ini").innerHTML = ponto.grade("grade", "cubos",) + "<br>";
   
      let t = setInterval(function () {
          let p = ponto.aleatorio([0, 58, 116, 174, 232, 290]);
          ponto.ponto_mov_direita(p, (p + 57), "#000", 200);
        let tmerRastro = setTimeout(function() {
          ponto.ponto_mov_direita(p, (p + 57), "#ccc", 200);
        } , 200);
      
      }, 200);
}

window.onload = function () {
    pontos_left_right();
}