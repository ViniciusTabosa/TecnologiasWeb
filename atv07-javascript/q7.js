let vetor = ['a', 'z', 'z', 'z', 'z', 'r', 'r']

function localizaItemMaisFrequente(vetor){
    let qtdItem = 0, itemRepetido
    let cont1
    for(cont1 = 0; cont1 < vetor.length; cont1++){
        if(vetor[cont1] == vetor[++cont1]){
            qtdItem++
            itemRepetido = vetor[cont1]
        }
    }
    return itemRepetido;
}

console.log(localizaItemMaisFrequente(vetor))