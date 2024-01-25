import { create2DArray } from "./utils.js";
import Cookie from "./cookie.js";

export default class Grille {
	/**
	 * @param {number} l nombre de lignes
	 * @param {number} c nombre de colonnes
	 */
	constructor(l, c) {
		this.c = c;
		this.l = l;

		this.cookiesSelectionnees = [];
		this.tabcookies = this.remplirTableauDeCookies(6);
	}

	showCookies() {

		const grilleDiv = document.querySelector("#grille");

		for (let l = 0; l < this.l; l++) {
			for (let c = 0; c < this.c; c++) {
				const div = document.createElement("div");
				grilleDiv.appendChild(div);
			}
		}

		const grilleDivs = grilleDiv.querySelectorAll("div");

		grilleDivs.forEach((div, index) => {

			const ligne = Math.floor(index / this.l);
			const colonne = index % this.c;

			console.log("On remplit le div index=" + index + " l=" + ligne + " col=" + colonne);

			const cookie = this.tabcookies[ligne][colonne];
			const img = cookie.htmlImage;

			img.onclick = (event) => {
				console.log("On a cliqué sur la ligne " + ligne + " et la colonne " + colonne);
				console.log("Le cookie cliqué est de type " + cookie.type);

				if (this.cookiesSelectionnees.length === 0) {
					cookie.selectionnee();
					this.cookiesSelectionnees.push(cookie);
				} else if (this.cookiesSelectionnees.length === 1) {
					cookie.selectionnee();
					this.cookiesSelectionnees.push(cookie);
					Cookie.swapCookies(this.cookiesSelectionnees[0], this.cookiesSelectionnees[1]);
					this.cookiesSelectionnees = [];
				} else {
					console.log("Deux cookies sont déjà sélectionnées...");
				}
			};

			img.ondragstart = (event) => {
				let cookieDragguee = this.getCookieFromImage(event.target);
				cookieDragguee.selectionnee();

				this.cookiesSelectionnees = [];
				this.cookiesSelectionnees.push(cookieDragguee);
			}

			img.ondragover = (event) => {
				return false;
			}

			img.ondragenter = (event) => {
				const i = event.target;
				i.classList.add("imgDragOver");
			}

			img.ondragleave = (event) => {
				const i = event.target;
				i.classList.remove("imgDragOver");
			}

			img.ondrop = (event) => {
				let cookieDragguee = this.getCookieFromImage(event.target);
				cookieDragguee.selectionnee();

				this.cookiesSelectionnees.push(cookieDragguee);

				Cookie.swapCookies(this.cookiesSelectionnees[0], this.cookiesSelectionnees[1]);

				this.cookiesSelectionnees = [];
				cookieDragguee.htmlImage.classList.remove("imgDragOver");
			}

			div.appendChild(img);
		});
	}

	getCookieFromImage(img) {

		const ligne = img.dataset.ligne;
		const colonne = img.dataset.colonne;

		return this.tabcookies[ligne][colonne];
	};

	remplirTableauDeCookies(nbDeCookiesDifferents) {

		const tab = create2DArray(this.l, this.c);

		for (let l = 0; l < this.l; l++) {
			for (let c = 0; c < this.c; c++) {

				let type = Math.floor(Math.random() * nbDeCookiesDifferents);

				while (this.hasAlignment(tab, l, c, type)) {
					type = Math.floor(Math.random() * nbDeCookiesDifferents);
				}

				tab[l][c] = new Cookie(type, l, c);
			}
		}

		return tab;
	}

	hasAlignment(tab, ligne, colonne, type) {

		const horizontal = colonne >= 2 && tab[ligne][colonne - 1]?.type === type && tab[ligne][colonne - 2]?.type === type;
		const vertical = ligne >= 2 && tab[ligne - 1][colonne]?.type === type && tab[ligne - 2][colonne]?.type === type;

		return (horizontal || vertical);
	};
}