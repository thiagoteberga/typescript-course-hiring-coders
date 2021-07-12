// Const nao pode ser alterado
// Let pode ser alterado

// ##############
// Boolean
// ##############
let contaPaga: boolean = false

// ##############
// Number
// ##############
let idade: number = 27
let avaliacao: number = 1.75

// ##############
// String
// ##############
let nome: string = 'Thiago Teberga'

// ##############
// Array
// ##############
let idades: number[] = [23, 28, 45, 32, 45]
let idades2: Array<number> = [23, 28, 45, 32, 45]

// ##############
// Tuple
// ##############
// Posições já Definidas
let jogadores: [string,string,string]
jogadores = ['Thiago','Joao','Douglas']

let jogadores2: [string,number,boolean]
jogadores2 = ['Thiago',10,true]

// ##############
// Enum
// ##############
enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}

let statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

enum StatusAprovacaoComCodigo {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '002'
}

let statusDaAprovacaoComCodigo: StatusAprovacaoComCodigo = StatusAprovacaoComCodigo.Aprovado

// ##############
// Any
// ##############
// Quando nao se sabe o tipo que sera retornado
const retornoDaAPI: any[] = [123, 'Thiago', true]
const retornoDaAPI2: any = {
    //.......
}

// ##############
// Void
// ##############
// Quando nao tem retorno
function printNaTela(msg: string): void {
    console.log(msg)
}

// ##############
// Null e Undefined
// ##############
const u: undefined = undefined
const n: null = null

// ##############
// Object
// ##############
function criar(objeto: object){
    // ...
}

criar({
    propriedade: 1
})
// criar('Thiago') //Vai gerar erro porque nao esta passando um objeto

// ##############
// Never
// ##############
function loopInfinito(): never {
    while (true) {}
}

function erro(mensagem: string): never {
    throw new Error(mensagem)
}

function falha() {
    return erro('Algo falhou')
}

// ##############
// Union Types
// ##############
// Aceita mais de um tipo, pode ser definido na função e também na declaração de variavel
const nota: string | number | boolean = 5;
function exibirNota(nota: number | string | boolean){
    console.log(`A nota é ${nota}`)
}
exibirNota(10)
exibirNota('Thiago')
exibirNota(false)

// ##############
// Alias
// ##############

type Funcionario = {
    nome: string
    sobrenome: string
    dataNascimento: Date
    idade: number
}

//type Funcionarios = Array<Funcionario>
const funcionarios: Array<Funcionario> = [{
//const funcionarios: Funcionario[] = [{
    nome: 'Thiago',
    sobrenome: 'Teberga',
    dataNascimento: new Date(),
    idade: 27
},
{
    nome: 'Joao',
    sobrenome: 'Almeia',
    dataNascimento: new Date(),
    idade: 26
}]

function tratarFuncionarios(funcionario: Funcionario){
    for(let funcionario of funcionarios){
        console.log(`Nome do funcionário é: ${funcionario.nome}`)
    }
}

//Executar
tratarFuncionarios({
    nome: 'Thiago',
    sobrenome: 'Teberga',
    dataNascimento: new Date(),
    idade: 27
})


// ##############
// Null ou Opcional
// ##############
let altura: number | null = 1.6
altura = null

type Contato = {
    nome: string
    telefone1: string
    telefone2?: string //Interrogacao faz ou campo ser opcional
    //telefone2: string | null
}

const contato: Contato = {
    nome: 'Thiago',
    telefone1: '12991181988'
}


// ##############
// Type Assertion
// ##############
// Define explicitamente qual o tipo da variavel no codigo
let minhaIdade: any = 27;
//(minhaIdade as number).toString();
<number>minhaIdade.toString();

//const input = document.getElementById("numero1") as HTMLInputElement
const input = <HTMLInputElement>document.getElementById("numero1")
console.log(input.value)