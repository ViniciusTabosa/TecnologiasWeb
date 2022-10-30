function deixaMinusculo(vetorMa){
    let vetorMinusculo = []
    for(cont=0;cont<vetorMa.length;cont++){
        vetorMinusculo[cont] = vetorMa[cont].toLowerCase()
    }
    return vetorMinusculo;
}

function contaItensDuplicados(vetorMi){
    let map1 = new Map()
    let aux, aux2 = 0
    for(let cont1=0;cont1<vetorMi.length;cont1++){
        aux = 0
        for(let cont2=0;cont2<vetorMi.length;cont2++){
            if(vetorMi[cont1] == vetorMi[cont2]){
                aux++
            }
        }
        map1.set(aux2, aux)
        aux2++
    }
    return map1;
}

function removeItensDuplicados(mapFreq, vetorMi){
    for(cont=0;cont<mapFreq.size;cont++){
        if(mapFreq.get(cont) == 1){
            vetorMi.splice()
        }
    }
    return vetorMi;
}

let vetor = ['a', 'A', 'a', 'a', 'Z']
let vetorMinusculo = deixaMinusculo(vetor)
let mapFreq = new Map()

mapFreq = contaItensDuplicados(vetorMinusculo)
console.log(mapFreq)

// let vetorNaoDuplicado = removeItensDuplicados(mapFreq, vetorMinusculo)
// console.log(vetorNaoDuplicado)