let idade = 16;
let temAutorizacao = false;

if (idade >=18){
    console.log("Entrada liberada");
}
else if (idade < 18 && temAutorizacao == true){
    console.log("Entrada com autorização dos resposáveis")
}
else{console.log("Entrada negada")}
