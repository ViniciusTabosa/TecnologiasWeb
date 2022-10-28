function clonarArray(v1, v2){
    return v1.copyWithin()
}

let array1 = ['array1', 1, true, 'ww']
let array2 = []

console.log(array1)
console.log(array2)

array2 = clonarArray(array1, array2)

console.log(array1)
console.log(array2)