
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

let nota = 8;
const nomeAluno = "Ana";


if (nota >= 7){
    console.log(`${nomeAluno} foi aprovado(a)!`)
}
else if(nota >= 5 && nota < 7){
    console.log(`${nomeAluno} ficou de recuperação!`)
}
else{
     console.log(`${nomeAluno} foi reprovado(a)!`)
}
