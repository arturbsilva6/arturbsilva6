//Função


/*1. Exercicio

function boasVindas(nome){
    console.log(`Seja bem vindo(a), ${nome}`)
}

boasVindas("Artur");*/

/*2.exercicio
function apresentarPessoa(nome,idade){
    console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`)
}

apresentarPessoa("Artur", 18);*/


/*3. exercicio 
function criarMensagem(nome, profissao){

   return`Olá, meu nome é ${nome} e sou ${profissao}`

}

let mensagem = criarMensagem("Artur", "Engheiro de sofware")

console.log(mensagem)*/
/* Exercicio 4 IMC
function calcularImc(peso, altura){
    return  peso / (altura * altura)
}

let imc = calcularImc(70, 1.75);
console.log (`Seu IMC é ${imc}`);*/


function calcularDesconto( precoOriginal,porcentagemDesconto){

    //VALIDAR SEO NUMERO ESTÁ ENTRE 0 A 100 PARA PORCENTAGEM

    if (porcentagemDesconto < 0 || porcentagemDesconto > 100){
        console.log("Porcentagem invalida! DIGITE UM VALOR ENTRE 0 A 100")
        return
    }

    return precoOriginal - (precoOriginal * porcentagemDesconto/100)

}

let precoComDesconto = calcularDesconto(100,200);
console.log(`O valor com desconto é R$ ${precoComDesconto}`);