// ======================================================
// FROGGER - CODEMINDS
// Jogo completo com 3 fases, vidas, pontos e estados
// ======================================================


// ======================================================
// 1. VARIÁVEIS DO JOGO
// ======================================================

var estadoJogo = "inicio";
var fase = 1;
var vidas = 3;
var pontos = 0;

// ======================================================
// 2. JOGADOR
// ======================================================

var jogador = createSprite(200, 365);
jogador.setAnimation("jogador");
jogador.scale = 0.5;

// ======================================================
// 3. VEÍCULOS
// ======================================================

var carro1 = createSprite(50, 300);
carro1.setAnimation("carro_vermelho");
carro1.velocityX = 3;

var carro2 = createSprite(350, 250);
carro2.setAnimation("carro_azul");
carro2.velocityX = -4;

var carro3 = createSprite(80, 200);
carro3.setAnimation("carro_amarelo");
carro3.velocityX = 5;

var caminhao = createSprite(350, 150);
caminhao.setAnimation("caminhao");
caminhao.velocityX = -3;

// ======================================================
// 4. TRONCOS
// ======================================================

var tronco1 = createSprite(80, 120);
tronco1.setAnimation("tronco_pequeno");
tronco1.velocityX = 2;

var tronco2 = createSprite(300, 80);
tronco2.setAnimation("tronco_grande");
tronco2.velocityX = -2;

var tronco3 = createSprite(100, 40);
tronco3.setAnimation("tronco_grande");
tronco3.velocityX = 3;

// ======================================================
// 5. FUNÇÃO PRINCIPAL
// ======================================================

function draw() {

  // --------------------------
  // TELA INICIAL
  // --------------------------
  
  if (estadoJogo == "inicio") {
    telaInicio();
  }

  // --------------------------
  // JOGO
  // --------------------------

  else if (estadoJogo == "jogando") {
    if (fase == 1) {
      jogarFase1();
    }
    else if (fase == 2) {
      jogarFase2();
    }
    else if (fase == 3) {
      jogarFase3();
    }
  }

  // --------------------------
  // GAME OVER
  // --------------------------

  else if (estadoJogo == "gameover") {
    telaGameOver();
  }

  // --------------------------
  // VITÓRIA
  // --------------------------

  else if (estadoJogo == "vitoria") {
    telaVitoria();
  }
}

// ======================================================
// 6. TELA INICIAL
// ======================================================

function telaInicio() {

background("darkgreen");
fill("white");
textSize(32);
text("FROGGER", 130, 120);
textSize(18);
text("A GRANDE TRAVESSIA", 95, 165);
textSize(15);
text("Atravesse todos os desafios!", 90, 210);
textSize(17);
text("Pressione ESPAÇO", 115, 270);
if (keyWentDown("space")) {
    estadoJogo = "jogando";
    prepararFase1();
  }
}


// ======================================================
// 7. MOVIMENTO DO JOGADOR
// ======================================================

function moverJogador() {

  if (keyWentDown("up")) {

    jogador.y = jogador.y - 35;

  }


  if (keyWentDown("down")) {

    jogador.y = jogador.y + 35;

  }


  if (keyWentDown("left")) {

    jogador.x = jogador.x - 35;

  }


  if (keyWentDown("right")) {

    jogador.x = jogador.x + 35;

  }


  // Impede o jogador de sair da tela

  if (jogador.x < 20) {

    jogador.x = 20;

  }


  if (jogador.x > 380) {

    jogador.x = 380;

  }


  if (jogador.y > 380) {

    jogador.y = 380;

  }

}


// ======================================================
// 8. MOVIMENTAÇÃO DOS VEÍCULOS
// ======================================================

function movimentarVeiculos() {


  // CARRO 1

  if (carro1.x > 440) {

    carro1.x = -40;

  }


  if (carro1.x < -40) {

    carro1.x = 440;

  }



  // CARRO 2

  if (carro2.x > 440) {

    carro2.x = -40;

  }


  if (carro2.x < -40) {

    carro2.x = 440;

  }



  // CARRO 3

  if (carro3.x > 440) {

    carro3.x = -40;

  }


  if (carro3.x < -40) {

    carro3.x = 440;

  }



  // CAMINHÃO

  if (caminhao.x > 460) {

    caminhao.x = -60;

  }


  if (caminhao.x < -60) {

    caminhao.x = 460;

  }

}


// ======================================================
// 9. MOVIMENTAÇÃO DOS TRONCOS
// ======================================================

function movimentarTroncos() {


  // TRONCO 1

if (tronco1.x > 460) {

tronco1.x = -60;

  }


if (tronco1.x < -60) {

tronco1.x = 460;

  }
  // TRONCO 2

if (tronco2.x > 480) {

    tronco2.x = -80;

  }


  if (tronco2.x < -80) {

    tronco2.x = 480;

  }



  // TRONCO 3

  if (tronco3.x > 480) {

    tronco3.x = -80;

  }


  if (tronco3.x < -80) {

    tronco3.x = 480;

  }

}


// ======================================================
// 10. COLISÃO COM VEÍCULOS
// ======================================================

function verificarColisoes() {

  if (
    jogador.isTouching(carro1) ||
    jogador.isTouching(carro2) ||
    jogador.isTouching(carro3) ||
    jogador.isTouching(caminhao)
  ) {

    perderVida();

  }

}


// ======================================================
// 11. PERDER VIDA
// ======================================================

function perderVida() {

  vidas = vidas - 1;


  // Volta para o início

  jogador.x = 200;
  jogador.y = 365;


  if (vidas <= 0) {

    estadoJogo = "gameover";

  }

}


// ======================================================
// 12. INFORMAÇÕES NA TELA
// ======================================================

function mostrarInformacoes() {

  fill("white");

  stroke("black");
  strokeWeight(3);

  textSize(15);

  text("VIDAS: " + vidas, 10, 20);

  text("PONTOS: " + pontos, 125, 20);

  text("FASE: " + fase, 315, 20);


  noStroke();

}


// ======================================================
// 13. PREPARAR FASE 1
// ======================================================

function prepararFase1() {

  jogador.x = 200;
  jogador.y = 365;


  carro1.x = 50;
  carro1.y = 300;
  carro1.velocityX = 3;


  carro2.x = 350;
  carro2.y = 240;
  carro2.velocityX = -4;


  carro3.x = 80;
  carro3.y = 180;
  carro3.velocityX = 3;


  caminhao.x = -200;
  caminhao.y = -200;


  esconderTroncos();

}


// ======================================================
// 14. FASE 1
// ======================================================

function jogarFase1() {

  background("green");


  moverJogador();

  movimentarVeiculos();

  verificarColisoes();


  drawSprites();

  mostrarInformacoes();


  // Chegou ao outro lado

  if (jogador.y < 50) {

    pontos = pontos + 100;

    fase = 2;

    prepararFase2();

  }

}


// ======================================================
// 15. PREPARAR FASE 2
// ======================================================

function prepararFase2() {

  jogador.x = 200;
  jogador.y = 365;


  // Mais velocidade

  carro1.x = 30;
  carro1.y = 310;
  carro1.velocityX = 5;


  carro2.x = 350;
  carro2.y = 250;
  carro2.velocityX = -6;


  carro3.x = 70;
  carro3.y = 190;
  carro3.velocityX = 7;


  caminhao.x = 350;
  caminhao.y = 130;
  caminhao.velocityX = -4;


  esconderTroncos();

}


// ======================================================
// 16. FASE 2
// ======================================================

function jogarFase2() {

  background("darkgreen");


  moverJogador();

  movimentarVeiculos();

  verificarColisoes();


  drawSprites();

  mostrarInformacoes();


  // Passou da fase

  if (jogador.y < 50) {

    pontos = pontos + 200;

    fase = 3;

    prepararFase3();

  }

}


// ======================================================
// 17. PREPARAR FASE 3
// ======================================================

function prepararFase3() {

  jogador.x = 200;
  jogador.y = 365;


  // -------------------------
  // VEÍCULOS
  // -------------------------

  carro1.x = 50;
  carro1.y = 320;
  carro1.velocityX = 5;


  carro2.x = 350;
  carro2.y = 275;
  carro2.velocityX = -5;


  carro3.x = 80;
  carro3.y = 230;
  carro3.velocityX = 6;


  caminhao.x = 350;
  caminhao.y = 185;
  caminhao.velocityX = -4;


  // -------------------------
  // TRONCOS
  // -------------------------

  tronco1.x = 70;
  tronco1.y = 120;
  tronco1.velocityX = 2;


  tronco2.x = 300;
  tronco2.y = 80;
  tronco2.velocityX = -2;


  tronco3.x = 100;
  tronco3.y = 40;
  tronco3.velocityX = 3;

}


// ======================================================
// 18. FASE 3
// ======================================================

function jogarFase3() {

  background("blue");


  moverJogador();

  movimentarVeiculos();

  movimentarTroncos();

  verificarColisoes();

  verificarRio();


  drawSprites();

  mostrarInformacoes();


  // DESTINO FINAL

  if (jogador.y < 20) {

    pontos = pontos + 500;

    estadoJogo = "vitoria";

  }

}


// ======================================================
// 19. VERIFICAR RIO
// ======================================================

function verificarRio() {

  // O rio começa aproximadamente no Y = 140

  if (jogador.y < 145) {


    // Está em cima do tronco 1

    if (jogador.isTouching(tronco1)) {

      jogador.x = jogador.x + tronco1.velocityX;

    }


    // Está em cima do tronco 2

    else if (jogador.isTouching(tronco2)) {

      jogador.x = jogador.x + tronco2.velocityX;

    }


    // Está em cima do tronco 3

    else if (jogador.isTouching(tronco3)) {

      jogador.x = jogador.x + tronco3.velocityX;

    }


    // Caiu na água

    else {

      perderVida();

    }

  }

}


// ======================================================
// 20. ESCONDER TRONCOS
// ======================================================

function esconderTroncos() {

  tronco1.x = -500;
  tronco1.y = -500;

  tronco2.x = -500;
  tronco2.y = -500;

  tronco3.x = -500;
  tronco3.y = -500;

}


// ======================================================
// 21. GAME OVER
// ======================================================

function telaGameOver() {

  background("black");


  fill("white");

  textSize(32);
  text("GAME OVER", 105, 150);


  textSize(18);

  text("Pontuação: " + pontos, 130, 200);

  text("Pressione ESPAÇO", 115, 260);

  text("para tentar novamente", 105, 290);


  if (keyWentDown("space")) {

    reiniciarJogo();

  }

}


// ======================================================
// 22. TELA DE VITÓRIA
// ======================================================

function telaVitoria() {

  background("green");


  fill("white");

  textSize(27);

  text("MISSÃO CONCLUÍDA!", 55, 140);


  textSize(18);

  text("Você completou a", 115, 190);

  text("GRANDE TRAVESSIA!", 100, 220);


  textSize(20);

  text("PONTOS: " + pontos, 135, 270);


  textSize(15);

  text("Pressione ESPAÇO para jogar novamente", 55, 330);
if (keyWentDown("space")) {
reiniciarJogo();

  }

}
// ======================================================
// 23. REINICIAR JOGO
// ======================================================
function reiniciarJogo() {
vidas = 3;
pontos = 0;
fase = 1;
jogador.x = 200;
jogador.y = 365;
estadoJogo = "jogando";
prepararFase1();

}
