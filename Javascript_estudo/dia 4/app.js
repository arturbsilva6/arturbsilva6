
//Entendendo FOR

/*let meusFilmesFavoritos = ["Rei leão", "Homem aranha", "Circulo de fogo"];

console.log(meusFilmesFavoritos[0]);
console.log(meusFilmesFavoritos[2]);
console.log(meusFilmesFavoritos.length);

meusFilmesFavoritos.push("Vingadores");
meusFilmesFavoritos.pop()*/

/*let meusJogosFavoritos = ["Need for speed", "Forzan 2", "Elder Ring"];

for( let i = 0; i < meusJogosFavoritos.length; i++){
    console.log(`Jogo 1 ${i+1}: ${meusJogosFavoritos[i]}`)
}

console.log(`Voce tem ${meusJogosFavoritos.length} jogos na sua lista'`);*/


//For com função

/*let minhasComidasFavoritas = ["Lasanha", "Nhoque", "Pizza"];

function mostrarComidas(comidas){
    for (let i=0; i < comidas.length; i++){
        console.log(`Comida ${i+1}: ${comidas[i]}`)
    }
    console.log(`Voce tem no total ${comidas.length} comidas favoritas`)
}

mostrarComidas(minhasComidasFavoritas);*/

//includes

let numeros = [1,23,31,4,54];

console.log(numeros.includes(10));

let numeroMaior15 = numeros.find( numero => numero > 15);

console.log(numeroMaior15);

let maior10 = numeros.filter(numero10 => numero10 > 10);

console.log(maior10);