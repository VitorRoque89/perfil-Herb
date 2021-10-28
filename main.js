// Goal Resposta Certa - eu clico na resposta certa e aparece HTML e CSS a dzier "Correto"

// Goal Respostas Erradas - eu clcico numa resposta errada e aparece-me HTML e CSS a dizer "Oops errado" + "complemento-dica"


//Goal Resposta Certa (Feito)

// 1.º Tenho que ir buscar o botão com a resposta correta 
const respostaCerta = document.getElementById('resposta-certa');

//1.1 - Tenho que ir buscar o <p> para onde eu quero colocar conteúdo
const explicacao = document.getElementById('explicacao');

//2.º Tenho que por o elemento resposta certa a escutar o meu click 
respostaCerta.addEventListener('click', (event)=> {
	explicacao.innerHTML = "<strong>Corret!!</strong>"
})

//Goal Respostas Erradas (Feito)

// 1.º Tenho que ir buscar todas as repostas com a classe resposta-errada
const respostaErrada = document.querySelectorAll('.resposta-errada')

//2.º Iterar por cada resposta errada
respostaErrada.forEach((resposta) => {
	// 3.º JS tem de estar à procura do click em cada resposta
		resposta.addEventListener('click', (event) =>{
			let explicacaoConteudo = "<strong>Oops. wrong ...</strong>"
	
	// 4.º Distinguir que resposta é? Se é HTML, CSS ou Ruby	
		if (resposta.id === "resposta html") {
			explicacaoConteudo += " HTML allows us to structure our webpage."
		} else if (resposta.id === "resposta css") {
			explicacaoConteudo += " CSS allows us to style to our webpage."
		} else {
			explicacaoConteudo += " Ruby is one of the many languages that can be utilized for backend."
		}

		explicacaoConteudo += " Try again!"


			explicacao.innerHTML = explicacaoConteudo; 
	})
})
