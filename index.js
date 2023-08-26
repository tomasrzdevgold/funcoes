/*
exercicio 1

a)
primeiro console.log,  da 10
segundo console.log, da 50

b)
aparece nada, ja que ao tirarmos o console o  programa faz que o que ele tem que fazer mas nao imprime nada no console no navegador

exercicio 2

a) o pragrama recebe um texto dado pelo usuario, logo coloca tudo o texto em minusculas e procura se no texto tem a palavra cenoura (em minusculas). 
A função tem como objetivo procurar dentro de um texto a palavra cenoura, ao mesmo tempo coloca o texto dado em minuscula para assim tornar a procura 
de certa palavra mais facil

b)
i. eu gosto de cenoura true
ii. cenoura é bom pra vista true
iii. cenouras crescem na terra true
*/





// exercicio 1 codigo

function informacoes() {
    const nombre = `Eu sou Tomas, tenho 19 anos, moro em são leopoldo e sou estudante`
    return nombre
} 

console.log(informacoes())



function informacoesPessoas(nome,idade,cidade,Profisao){
    const unificar = `eu sou ${nome}, tenho ${idade} ano, moro em ${cidade} e sou`
    return unificar

}

const nomep = prompt("qual é seu nome")
const idadep = Number(prompt("qual é sua idade"))
const cidadep = prompt("onde voce mora")
const profisiaop = prompt("do que voce trabalha")

const todo = informacoesPessoas(nomep,idadep,cidadep,profisiaop)

console.log(todo)

// exercicio 2 codigo
//a)
const soma = (a,b) => {
    let resultado = a + b
    return resultado
}

const adicao = soma(2,10)
console.log(adicao)

//b)
function boolean(a,b){
    const resultado = a >= b
    return resultado
}
const numeros = boolean(5,10)
console.log(numeros)



//c)
const par = (a) => {
    let resultado = a % 2
    resultado = resultado === 0
    return resultado
}
const ePar = par (15)
console.log(`o numero é par ${ePar}`)


//d)
const mensagem = (texto) => {
    const tamanho = texto.length
    const mensagemMaiuscula = texto.toUpperCase()
    console.log(tamanho+mensagemMaiuscula)

}

const tamanho = mensagem(prompt("escreva uma mensagem"))


// exercicio 3 codigo

function Soma(a,b) {
    const adicao = a + b
    return adicao
}

function Subtracao(a,b){
    const resta = a-b
    return resta
}

function multiplicacoa(a,b){
    const veces = a*b
    return veces
}

function divisao(a,b){
    const entre = a/b
    return entre
}

const primeiroNumero = prompt(("insira o primeiro numero"))
const segundoNumero = prompt("insira o segundo numero")

const primeiroNumeroN = Number(primeiroNumero)
const segundoNumeroN = Number(segundoNumero)

const resultadosoma = Soma(primeiroNumeroN,segundoNumeroN)
const resultadoresta = Subtracao(primeiroNumeroN,segundoNumeroN)
const resultadomultiplicacoa = multiplicacoa(primeiroNumeroN,segundoNumeroN)
const resultadodivisao = divisao(primeiroNumeroN,segundoNumeroN)

console.log(`numeros inseridos: ${primeiroNumero} e ${segundoNumero}
soma: ${resultadosoma}
subtração: ${resultadoresta}
multiplicação ${resultadomultiplicacoa}
divisão ${resultadodivisao}`)





