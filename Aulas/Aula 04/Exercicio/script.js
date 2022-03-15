class Conta{
    #saldo
    constructor(conta, agencia, saldo){
        this.conta = conta;
        this.agencia = agencia;
        this.#saldo = saldo

    }
    
    transferencia (valorDaTranferencia){
        if (valorDaTranferencia <= this.#saldo){
            this.#saldo = this.#saldo - valorDaTranferencia;
            return `Seu saldo é ${this.#saldo} e foi transferido ${valorDaTranferencia}`
        } else {
            return ("Não é possivel transferir")
        }
        
    }
    saque (valorDoSaque){
        if (valorDoSaque <= this.#saldo){
            this.#saldo = this.#saldo - valorDoSaque;
            return `Seu saldo é ${this.#saldo} e foi sacado ${valorDoSaque}`
        } else {
            return ("Não é possivel sacar")
        }

    }
    set deposito(i){
        this.#saldo += i;
    }
    get saldo(){
        return `Seu saldo é ${this.#saldo}`
    }
}

class Pessoa extends Conta{
    constructor(conta, agencia, saldo){
        super (conta, agencia, saldo)

    }
}

class PF extends Pessoa{
    #CPF
    constructor(nome, CPF, conta, agencia, saldo){
        super (conta, agencia, saldo)
        this.nome = nome;
        this.#CPF = CPF;

    }
    get dados(){
        return `Seu nome é ${this.nome}, do CPF ${this.#CPF}, sua conta é ${this.conta} e agência ${this.agencia}`
    }

}

class PJ extends Pessoa{
    #CNPJ
    constructor(CNPJ, empresa, conta, agencia, saldo, CPF){
        super (conta, agencia, saldo, CPF)
        this.#CNPJ = CNPJ;
        this.empresa = empresa;

    }
}

const teste1 = new Conta(151515, 121515, 1000);
// console.log(teste.transferencia(900))
// console.log(teste.saldo)
// console.log(teste.saque(90))
// console.log(teste.saldo)
// teste.deposito = 100;
// console.log(teste.saldo)

// console.log(teste.saldo)

// const teste1 = new PF(15);
// console.log(teste1)

// const teste2 = new PJ(15);
// console.log(teste2)

const teste = new PF("djskdj", 1212);
console.log(teste.dados)