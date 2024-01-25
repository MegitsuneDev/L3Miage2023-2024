export default class Cookie {
	ligne = 0;
	colone = 0;
	type = 0;
	htmlImage = undefined;

	static urlsImagesNormales = [
		"./assets/images/Croissant@2x.png",
		"./assets/images/Cupcake@2x.png",
		"./assets/images/Danish@2x.png",
		"./assets/images/Donut@2x.png",
		"./assets/images/Macaroon@2x.png",
		"./assets/images/SugarCookie@2x.png",
	];
	static urlsImagesSurlignees = [
		"./assets/images/Croissant-Highlighted@2x.png",
		"./assets/images/Cupcake-Highlighted@2x.png",
		"./assets/images/Danish-Highlighted@2x.png",
		"./assets/images/Donut-Highlighted@2x.png",
		"./assets/images/Macaroon-Highlighted@2x.png",
		"./assets/images/SugarCookie-Highlighted@2x.png",
	];

	constructor(type, ligne, colonne) {
		this.type = type;
		this.ligne = ligne;
		this.colonne = colonne;

		const url = Cookie.urlsImagesNormales[type];

		let img = document.createElement("img");
		img.src = url;
		img.width = 80;
		img.height = 80;

		img.dataset.ligne = ligne;
		img.dataset.colonne = colonne;

		this.htmlImage = img;
	};

	selectionnee() {
		this.htmlImage.src = Cookie.urlsImagesSurlignees[this.type];
		this.htmlImage.classList.add("cookie-selected");
	};

	deselectionnee() {
		this.htmlImage.src = Cookie.urlsImagesNormales[this.type];
		this.htmlImage.classList.remove("cookie-selected");
	};

	static swapCookies(c1, c2) {

		if(Cookie.distance(c1, c2) === 1) {
			c1.type = c1.type ^ c2.type;
			c2.type = c1.type ^ c2.type;
			c1.type = c1.type ^ c2.type;
	
			c1.htmlImage.src = c1.htmlImage.src ^ c2.htmlImage.src;
			c2.htmlImage.src = c1.htmlImage.src ^ c2.htmlImage.src;
			c1.htmlImage.src = c1.htmlImage.src ^ c2.htmlImage.src;
		};

		c1.deselectionnee();
		c2.deselectionnee();
	}

	static distance(cookie1, cookie2) {
		let l1 = cookie1.ligne;
		let c1 = cookie1.colonne;
		let l2 = cookie2.ligne;
		let c2 = cookie2.colonne;

		const distance = Math.sqrt((c2 - c1) * (c2 - c1) + (l2 - l1) * (l2 - l1));
		console.log("Distance = " + distance);
		return distance;
	}
}