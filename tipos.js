"use strict";
// Const nao pode ser alterado
// Let pode ser alterado
// ##############
// Boolean
// ##############
var contaPaga = false;
// ##############
// Number
// ##############
var idade = 27;
var avaliacao = 1.75;
// ##############
// String
// ##############
var nome = 'Thiago Teberga';
// ##############
// Array
// ##############
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 28, 45, 32, 45];
// ##############
// Tuple
// ##############
// Posições já Definidas
var jogadores;
jogadores = ['Thiago', 'Joao', 'Douglas'];
var jogadores2;
jogadores2 = ['Thiago', 10, true];
// ##############
// Enum
// ##############
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["Pendente"] = 1] = "Pendente";
    StatusAprovacao[StatusAprovacao["Rejeitado"] = 2] = "Rejeitado";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
var StatusAprovacaoComCodigo;
(function (StatusAprovacaoComCodigo) {
    StatusAprovacaoComCodigo["Aprovado"] = "001";
    StatusAprovacaoComCodigo["Pendente"] = "002";
    StatusAprovacaoComCodigo["Rejeitado"] = "002";
})(StatusAprovacaoComCodigo || (StatusAprovacaoComCodigo = {}));
var statusDaAprovacaoComCodigo = StatusAprovacaoComCodigo.Aprovado;
// ##############
// Any
// ##############
// Quando nao se sabe o tipo que sera retornado
var retornoDaAPI = [123, 'Thiago', true];
var retornoDaAPI2 = {
//.......
};
// ##############
// Void
// ##############
// Quando nao tem retorno
function printNaTela(msg) {
    console.log(msg);
}
// ##############
// Null e Undefined
// ##############
var u = undefined;
var n = null;
// ##############
// Object
// ##############
function criar(objeto) {
    // ...
}
criar({
    propriedade: 1
});
// criar('Thiago') //Vai gerar erro porque nao esta passando um objeto
// ##############
// Never
// ##############
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// ##############
// Union Types
// ##############
// Aceita mais de um tipo, pode ser definido na função e também na declaração de variavel
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota(10);
exibirNota('Thiago');
exibirNota(false);
//type Funcionarios = Array<Funcionario>
var funcionarios = [{
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
    }];
function tratarFuncionarios(funcionario) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario_1 = funcionarios_1[_i];
        console.log("Nome do funcion\u00E1rio \u00E9: " + funcionario_1.nome);
    }
}
//Executar
tratarFuncionarios({
    nome: 'Thiago',
    sobrenome: 'Teberga',
    dataNascimento: new Date(),
    idade: 27
});
// ##############
// Null ou Opcional
// ##############
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Thiago',
    telefone1: '12991181988'
};
// ##############
// Type Assertion
// ##############
// Define explicitamente qual o tipo da variavel no codigo
var minhaIdade = 27;
//(minhaIdade as number).toString();
minhaIdade.toString();
//const input = document.getElementById("numero1") as HTMLInputElement
var input = document.getElementById("numero1");
console.log(input.value);
