var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColors() {
		color1.value = '#' + randomHexGenerator();
		color2.value = '#' + randomHexGenerator();
		setGradient()
	}

function randomHexGenerator() {
	return Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", getRandomColors);















