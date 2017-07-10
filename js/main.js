var scoreJ=0;
var scoreO=0;
var joueur ="";
var ordi="";

function rejouer() {
  window.location.reload();
}

function jouer() {
  var jouer =prompt("ton pseudo??")
  document.getElementById("pseudo").innerHTML = "Bonjour " + jouer;
}



function reset() {
  scoreJ =0;
  scoreO=0;
  score();
}

function score() {
  document.getElementById("score1").innerHTML = scoreJ;
  document.getElementById("score2").innerHTML = scoreO;


  if (scoreJ == 3) {
    document.getElementById("fin").src = "img/bravo.gif";
    reset();


  }else if (scoreO == 3) {
    document.getElementById("fin").src = "img/looser.gif";
    reset();
  }
}

function choix() {
  if(joueur == 'pierre'){
    document.getElementById("joueurFeuille").style.display="none";
    document.getElementById("joueurCiseaux").style.display="none";

  }else if (joueur == 'feuille') {
    document.getElementById("joueurPierre").style.display="none";
    document.getElementById("joueurCiseaux").style.display="none";

  }else {
    document.getElementById("joueurPierre").style.display="none";
    document.getElementById("joueurFeuille").style.display="none";
  }
}



function resultat(joueur){
  choix();
  ordi = fOrdi();
  if( joueur == ordi){
    document.getElementById("affichage").innerHTML="équalités";
  }
  else if((joueur == "pierre" && ordi == "ciseaux")
           || (joueur == "feuille" && ordi == "pierre")
           || (joueur == "ciseaux" && ordi == "feuille")){
    document.getElementById("affichage").innerHTML="gagné!";
    scoreJ++;

  }
  else if((ordi == "pierre" && joueur == "ciseaux")
           || (ordi == "feuille" && joueur == "pierre")
           || (ordi == "ciseaux" && joueur == "feuille")){
    document.getElementById("affichage").innerHTML="perdu!";
    scoreO++;
  }score();
  setTimeout(function() {
    document.getElementById("joueurPierre").style.display="flex";
    document.getElementById("joueurFeuille").style.display="flex";
    document.getElementById("joueurCiseaux").style.display="flex";
  },1000);

}

function fOrdi(){
  ordi= Math.random();
  if(ordi < 0.34){
    ordi = "pierre";
    document.getElementById("monImg").src = "img/pierre.png";

  }else if(ordi <0.67){
    ordi="feuille";
    document.getElementById("monImg").src = "img/feuille.png";

  }else{
    ordi="ciseaux";
    document.getElementById("monImg").src = "img/ciseaux.png";

  }return ordi;
  setTimeout(document.getElementById("monImg").src = "img/robot.gif", 1000);
  }
