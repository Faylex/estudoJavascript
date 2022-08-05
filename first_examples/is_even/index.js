function isEven(num){
    // Recebe como parâmetro uma variável do tipo inteiro
    // e verifica se o número é par, retornando uma string
    const rest = num % 2
    if(rest === 0){
        return "Verdadeiro"
    }else{
        return "Falso"
    }
}

console.log(`isEven: O resto da divisão de 2 é par? ${isEven(2)}`)

console.log(`isEven: O resto da divisão de 3 é par? ${isEven(3)}`)

console.log(`isEven: O resto da divisão de 4 é par? ${isEven(4)}`)

function isEvenCompact(num){
    // Recebe como parâmetro uma variável do tipo inteiro
    // e verifica se o número é par, retornando um boolean
    return num % 2 === 0
}


console.log(`isEvenCompact: O resto da divisão de 2 é par? ${isEvenCompact(2)}`)

console.log(`isEvenCompact: O resto da divisão de 3 é par? ${isEvenCompact(3)}`)

console.log(`isEvenCompact: O resto da divisão de 4 é par? ${isEvenCompact(4)}`)
