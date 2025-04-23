let minhasTarefas = ["treinar", "estudar", "dormir"];


function mostrarTarefas(tarefas){
    for(let i = 0; i < tarefas.length; i++){
        console.log(`Tarefa ${i+1}: ${tarefas[i]}`)
    }
}

mostrarTarefas(minhasTarefas);

function adicionarTarefa(adicionar, array){

    return array.push(adicionar);

}

adicionarTarefa("comer", minhasTarefas)

mostrarTarefas(minhasTarefas)