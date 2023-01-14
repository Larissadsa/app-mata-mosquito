
var altura = 0
var largura = 0
var vidas = 1
var tempo = 10

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil') {
	//1500
	criaMoscaTempo = 1500
} else if(nivel === 'normal') {
	//1000
	criaMoscaTempo = 1000
} else if(nivel === 'dificil') {
	//750
	criaMoscaTempo = 750
}

function ajustaTamanhoPalco() {

	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}
ajustaTamanhoPalco()

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMosca)
		window.location.href = 'vitoria.html'
	} else  {
		document.getElementById('cronometro').innerHTML = tempo
	}

} , 1000)

function posicaoAleatoria() {

	//remover o mosquito  anterior (caso exista)
	if(document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		if (vidas > 3) {
			
			window.location.href = 'fim_de_jogo.html'

		} else {
			document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'

			vidas++
		}
	}
	
	var posicaoX = Math.floor(Math.random() * largura) -90
	var posicaoY = Math.floor(Math.random() * altura) -90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//Criar o elemento html

	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosca'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
		
	switch(classe) {
		case 0:
			return 'mosca1'

		case 1:
			return 'mosca2'

		case 2:
			return 'mosca3'
	}

}

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
		
	switch(classe) {
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}