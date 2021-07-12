/*
class Data {
    public dia: number;
    //private mes: number;
    public mes: number;
    public ano: number;

    constructor(dia: number, mes: number, ano: number = 1970) { //Se usar o Igual o Codigo Utiliza o Valor com Default, nao obrigando passar na chamada
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
*/

class Data {

    constructor(public dia: number, public mes: number, public ano: number = 1970) { //É possivel atribuir direto no construtor
    }
}


const data = new Data(1,1,2021);
console.log(data.dia);
console.log(data.mes);
console.log(data.ano);

const data2 = new Data(1,1);
console.log(data2.dia);
console.log(data2.mes);
console.log(data2.ano);


class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {}

    private alterarVelocidade(delta: number) {
        //Validacao de Aceleracao e Frenagem
        const novaVelocidade = this.velocidadeAtual + delta;
        
        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    public acelerar() {
        this.alterarVelocidade(5);
    }

    public frear() {
        this.alterarVelocidade(-5);
    }

}


const carro = new Carro('Chevrolet','Prisma',250);
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.frear();
//console.log(carro.velocidadeAtual);


class Camaro extends Carro{
    private turbo = false;

    constructor() {
        super('Chevrolet','Camaro',300);
    }

    public ligarTurbo(){
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();