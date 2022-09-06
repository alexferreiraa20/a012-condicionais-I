let idade = Number(prompt("Quantos anos você tem?"))
let terminouEnsinoMedio = confirm("Já terminou o Ensino Médio?")
let isCursandoOutraFaculdade = confirm("Está cursando a faculdade?")

 if(idade >= 18){
    console.log("Você é maior de idade")
 }else{
	console("Você é menor de idade")
 }

 if(terminouEnsinoMedio === true ){
    console.log("Você terminou o Ensino Médio, não fez mais que sua obrigação")
 }else{
	console("Vai estudar, vagabundo")
 }


 if(isCursandoOutraFaculdade === false){
    console.log("Vai fazer Enem, criança")
 }else{
	console("Muito que bem, estuda pra sofrer formado")
 }