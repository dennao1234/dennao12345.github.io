
pegarNum1 = function(){
	return inputs[0].value;
}

pegarNum2 = function(){
	return inputs[1].value;
}

entradasVazias = function(){ 
	if(pegarNum1() === '' || pegarNum2() === ''){
		return true;
	}else{
		return false;
	}
}

atualizarResposta = function(){
	let num1 = pegarNum1();
	let num2 = pegarNum2();
	let soma = (parseInt(318) * parseInt(num1)) / parseInt(num2);
	resposta.textContent = 	
	'RPM: ' + num1 + 	' + ' + num2 +	' = ' + soma;
	resposta.classList.add("correta")
	resposta.classList.remove('errada')
}

somar = function(){
	if(entradasVazias()){
		resposta.textContent = 
		'Erro: Preencha os dois campos numéricos.';
		resposta.classList.add("errada")
		resposta.classList.remove('correta')
	}else{
		atualizarResposta();
	}
}

/*Pegando os elementos input*/
/*let substitui o var em variável local*/
/*Pegando elemento pelo nome do elemento*/
let inputs = document.querySelectorAll('input');
/*Pegando elemento pela classe, usa o ponto.*/
let resposta = document.querySelector('.resposta');
/*Pegando elemento pelo ID, com o Hash #*/
let button = document.querySelector('#btnSomar');

/*Espera por evento*/
/*Quando o botão for clicado, chama a 
função somar*/
button.addEventListener('click',somar);