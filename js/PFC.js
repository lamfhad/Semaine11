$liste_choix = document.getElementById("liste_choix");
$bouton=document.getElementById("bouton");
$resultat=document.getElementById("resultat");
$quigagne=document.getElementById("quigagne");
$scores=document.getElementById("scores");
$victory=document.getElementById("victory");
$points=0;
$pointsPC=0;
$matchNuls=0;
$victoryScore=0
var choixNum;
var choixPC;

function choix_ordi(){
	$choixNum = Math.ceil(Math.random() * 3);
  if ($choixNum==1){$choixPC="Pierre";}
  if ($choixNum==2){$choixPC="Feuille";}
  if ($choixNum==3){$choixPC="Ciseaux";}
  }
  
function test(){
	$choixNum = Math.ceil(Math.random() * 3);
choix_ordi();
$choix = $liste_choix.options[$liste_choix.selectedIndex].value;
$resultat.innerHTML = "L'ordinateur a choisi :"+$choixPC+". Et vous : "+$choix;
qui_gagne();
$scores.innerHTML = "Vous : "+$points+ " - L'ordinateur : "+$pointsPC+" - Matchs nuls :"+$matchNuls;
$victoryScore=Math.floor($points*100/($points+$pointsPC+$matchNuls));
$victory.innerHTML = "Pourcentage de victoire : "+$victoryScore+"%";
  }

function qui_gagne(){
	if (($choix=="Feuille"&&$choixPC=="Pierre")||($choix=="Pierre"&&$choixPC=="Ciseaux")||($choix=="Ciseaux"&&$choixPC=="Feuille")){
  $quigagne.innerHTML="Vous gagnez !!!";
  $points++;
  }
  else 	if (($choixPC=="Feuille"&&$choix=="Pierre")||($choixPC=="Pierre"&&$choix=="Ciseaux")||($choixPC=="Ciseaux"&&$choix=="Feuille")){
  $quigagne.innerHTML="L'ordinateur gagne !!!";
  $pointsPC++;
  }
  else{
  $quigagne.innerHTML="Match nul";
  $matchNuls++;
  }
}

$bouton.onclick=test;