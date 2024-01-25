import Grille from "./grille.js";

const init = () => {
	
	console.log("Page et ressources prêtes à l'emploi");
	
	const grille = new Grille(9, 9);
	grille.showCookies();
};

window.onload = init;