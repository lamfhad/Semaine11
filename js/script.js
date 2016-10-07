$recherche = document.getElementById("recherche");
$bouton = document.getElementById("bouton");
$resultat = document.getElementById("resultat");
$rejouer = document.getElementById("rejouer")

function tester(){
	nbcoups++;
	if	($recherche.value > reponse){
  		$resultat.innerHTML = "Trop grand";
	} 
	if 	($recherche.value == reponse){
  		$resultat.innerHTML = "Bravo !!! Vous avez trouvé en "+nbcoups+" Coups.";
      $rejouer.classList.remove("cacher_bouton");
      $bouton.classList.add("cacher_bouton");
	} 
	if($recherche.value < reponse){
  		$resultat.innerHTML = "Trop petit";
	}
}

function jouer(){
	reponse = Math.ceil(Math.random() * 100);
	nbcoups=0;
	$rejouer.classList.add("cacher_bouton");
	$bouton.classList.remove("cacher_bouton");
}

jouer();
$rejouer.onclick=jouer;
$bouton.onclick=tester;
