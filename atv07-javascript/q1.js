function verifiarSeEArray(x){
    if(Array.isArray(x)){
        console.log('É um array')
    }else{
        console.log('Não é array')
    }   
}

let a = ['a']
let c = 'c'

verifiarSeEArray(a)
verifiarSeEArray(c)
