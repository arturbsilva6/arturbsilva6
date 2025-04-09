
//exercicios if/else//
/*


let idade = 16;
let temAutorizacao = true;

if (idade >=18){
    console.log("Entrada liberada");
}
else if (idade < 18 && temAutorizacao == true){
    console.log("Entrada com autorização dos resposáveis")
}
else{console.log("Entrada negada")}
   
*/


let nota = prompt("Digite sua nota")
const nomeAluno = prompt("Digite o nome do aluno");

if (nota >= 7){
    console.log(`${nomeAluno} foi aprovado(a)!`)
}
else if(nota >= 5 && nota < 7){
    console.log(`${nomeAluno} ficou de recuperação!`)
}
else{
     console.log(`${nomeAluno} foi reprovado(a)!`)
}
