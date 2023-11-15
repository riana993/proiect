
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var imagine = document.getElementById("imagine")
var paragraf = document.getElementById("paragraf")
var an = document.getElementById("anNastere")

const d = new Date();
var anCurent = d.getFullYear()


button.addEventListener("click", altaViata)
an.addEventListener("mouseover",displayAge)

function altaViata ()
{
	nume.innerHTML = "Functie:engineer Porsche"
	prenume.innerHTML = "Locatie:Bora Bora"
	imagine.src = "pozac"
	paragraf.innerHTML = "experiente: intership at google,work and travel in LA"
	body.style.backgroundColor = "orange"
	body.style.color = "blue"
	img.style.opacity = "70%"

}

function displayAge ()
{
	an.innerHTML = anCurent-an.innerHTML
}