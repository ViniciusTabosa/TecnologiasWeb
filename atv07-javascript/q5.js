function concatenaArrayComString(vetor, str){
    return str += vetor.toString()
}

let vetor = [1, 2, 3, 4]
let a = 'aaa'

console.log(concatenaArrayComString(vetor, a))