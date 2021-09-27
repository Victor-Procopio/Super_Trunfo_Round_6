var jogador456 = {
	nome: "Gi Hun - Jogador 456",
  imagem: "https://cantinhodoopa.com.br/wp-content/uploads/2021/09/image-40-683x1024.jpeg",
	atributos: {
		Agilidade: 86,
		Força: 90,
		Inteligência: 75
	}
}

var jogador218 = {
	nome: "Sang Woo - Jogador 218",
  imagem: "https://imgsrv2.voi.id/5oRQ-zwDvMW5V3apzjnWWDxwEs3ErzsHGQ0FGsYXtjc/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy83NTE1OS8yMDIxMDgxMjA5MjItbWFpbi5jcm9wcGVkXzE2Mjg3MzQ5NzkuanBn.jpg",
	atributos: {
		Agilidade: 79,
		Força: 80,
		Inteligência: 100
	}
}

var Jogadora067 = {
	nome: "Sae Byeok - Jogadora 067",
  imagem: "https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABaZuiIo-rAmwRLY40ThXhEfFLzpeV0bpKl--qVJT3wG9UqppUYUEBLWLCeq6by0AX8FkQrJf1Qr5hHPv28w--yDmHRt7hYw0LNykAUauuIEzLSQo.jpg?r=72b",
	atributos: {
		Agilidade: 100,
		Força: 65,
		Inteligência: 95
	}
}

var Jogador101 = {
	nome: "Deok Su - Jogador 101",
	imagem: "https://cantinhodoopa.com.br/wp-content/uploads/2021/09/101.png",
	atributos: {
		Agilidade: 85,
		Força: 100,
		Inteligência: 89
	}
}

var Jogador001 = {
	nome: "Ill Nam - Jogador 001",
	imagem: "https://cantinhodoopa.com.br/wp-content/uploads/2021/09/image-41.jpeg",
	atributos: {
		Agilidade: 59,
		Força: 60,
		Inteligência: 150
	}
}

var Joon = {
	nome: "Policial - Joon-ho",
	imagem: "https://cantinhodoopa.com.br/wp-content/uploads/2021/09/image-46-768x440.jpeg",
	atributos: {
		Agilidade: 98,
		Força: 105,
		Inteligência: 103
	}
}

var Líder = {
	nome: "Líder do jogo",
	imagem: "https://cantinhodoopa.com.br/wp-content/uploads/2021/09/image-1-768x479.png",
	atributos: {
		Agilidade: 80,
		Força: 100,
		Inteligência: 110
	}
}

var Ali = {
	nome: "Ali Abdul - Jogador 199",
	imagem: "https://i1.wp.com/www.bestmoviesonnetflixrightnow.com/wp-content/uploads/2021/09/242118167_875217749766992_2648260378596003258_n-1.jpg?resize=200%2C208&ssl=1",
	atributos: {
		Agilidade: 8,
		Força: 90,
		Inteligência: 76
	}
}
 
var cartaMaquina
var cartaJogador
var cartas = [jogador456, jogador218, Jogadora067, Jogador101, Jogador001, Joon, Líder, Ali]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas() {
	var divQuantidadeCartas = document.getElementById('quantidade-cartas')
	var html = "Quantidade de cartas no jogo: " + cartas.length
	
	divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar() {
	var divPlacar = document.getElementById('placar')
	var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
	
	divPlacar.innerHTML = html
}

function sortearCarta() {
	var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
	cartaMaquina = cartas [numeroCartaMaquina]
  cartas.splice(numeroCartaMaquina, 1)
	
	var numeroCartaJogador = parseInt(Math.random() * cartas.length)
	cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador, 1)
  
	document.getElementById('btnSortear').disabled = true
	document.getElementById('btnJogar').disabled = false
  
  exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' checked value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
	var radioAtributo = document.getElementsByName('atributo')
  
	for (var i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value
		}
	}
}

function jogar() {
  var divResultado = document.getElementById('resultado')
	var atributoSelecionado = obtemAtributoSelecionado()
	
	if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Venceu</p>'
    pontosJogador++
	} else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Perdeu</p>'
    pontosMaquina++
	} else {
		htmlResultado = '<p class="resultado-final">Empatou</p>'
	}
  
  if (cartas.length == 0) {
    alert("Fim de jogo!")
    if (pontosJogador > pontosMaquina) {
      htmlResultado = '<p class="resultado-final">Venceu</p>'
    } else if (pontosMaquina > pontosJogador) {
      htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
      htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  } else {
    document.getElementById('btnProximaRodada').disabled = false
  }
  
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnJogar').disabled = true
  
  atualizaPlacar()
  exibeCartaMaquina()
  atualizaQuantidadeDeCartas()
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina')
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada() {
	var divCartas = document.getElementById('cartas')
	
	divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
	
	document.getElementById('btnSortear').disabled = false
	document.getElementById('btnJogar').disabled = true
	document.getElementById('btnProximaRodada').disabled = true
	
	var divResultado = document.getElementById('resultado')
	divResultado.innerHTML = ""
}