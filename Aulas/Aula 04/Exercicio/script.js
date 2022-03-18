
class Conta{
    #saldo


    constructor(nome ,conta, agencia, saldo){
        this.nome = nome,
        this.conta = conta;
        this.agencia = agencia;
        this.#saldo = saldo;
        this.operacao = " ";
        this.valor = 0;
       
    }

    transferencia (valorDaTranferencia){
        if (valorDaTranferencia <= this.#saldo){
            this.valor = valorDaTranferencia;
            this.operacao = "Transferencia"
            this.#saldo = this.#saldo - valorDaTranferencia;
            return `Seu saldo é ${this.#saldo} e foi transferido ${valorDaTranferencia}`
        } else {
            return ("Não é possivel transferir")
        }
    }

    saque (valorDoSaque){
        if (valorDoSaque <= this.#saldo){
            this.operacao = "Saque";
            this.valor = valorDoSaque;
            this.#saldo = this.#saldo - valorDoSaque;
            return `Seu saldo é ${this.#saldo} e foi sacado ${valorDoSaque}`
            
        } else {
            return ("Não é possivel sacar")
        }
    }

    deposito(i){
        this.#saldo += i;
        this.valor = i;
        this.operacao = "Deposito"
    }

    get saldo(){
        return `Seu saldo é ${this.#saldo}`
    }

    lancamento (nome, operacao, valor){
        let movimentacao = {};
        if (this.operacao == "Deposito"){

        }
        movimentacao = {
            Nome: this.nome,
            Operacao: this.operacao,
            Valor: this.valor,
            Saldo: this.#saldo,
            Horario: new Date(),

        }
        return movimentacao
    }

    juros(vencimento, pagamento){
        const data1 = new Date(vencimento);
        const data2 = new Date();
        var tempoVencimento = Math.abs(data2.getTime() - data1.getTime());
        var diasVencimento = (Math.ceil(tempoVencimento / (1000 * 3600 * 24))) - 1;
        if (diasVencimento === 1){
            pagamento = pagamento + pagamento*0.01;
            return `O valor que você deve pagar é ${pagamento.toFixed(2)}, seu boleto está ${diasVencimento} dia atrasado`
        } else if (diasVencimento === 2){
            pagamento = pagamento + pagamento*0.025;
            return `O valor que você deve pagar é ${pagamento.toFixed(2)}, seu boleto está ${diasVencimento} dias atrasado`
        } else {
            pagamento = pagamento*(1 + 0.025)**diasVencimento;
            return `O valor que você deve pagar é ${pagamento.toFixed(2)}, seu boleto está ${diasVencimento} dias atrasado`
        }
        
    }
}


class PF extends Conta{
    #CPF
    #rg
    constructor(nome, CPF, conta, agencia, saldo, rg){
      super (conta, agencia, saldo)
      this.nome = nome;
      this.#CPF = CPF;
      this.#rg = rg;
    }
    get dadosPf(){
        return `Seu nome é ${this.nome}, do CPF ${this.#CPF}, do número da RG ${this.#rg}, sua conta é ${this.conta} e agência ${this.agencia}`
    }
    get CPF(){
        return `${this.#CPF}`
    }
    get RG(){
        return `${this.#rg}`
    }

}

class PJ extends PF{
    #CNPJ
    constructor(nome, CPF, conta, agencia, saldo, CNPJ, empresa ){
        super (nome, CPF, conta, agencia, saldo)
        this.#CNPJ = CNPJ;
        this.empresa = empresa;
    }

    get dadosPj(){
        return `Seu nome é ${this.nome}, do CPF ${this.CPF}, sua conta é ${this.conta} e agência ${this.agencia}, CNPJ ${this.#CNPJ} e empresa ${this.empresa}`
    }


    get CNPJ(){
        return `${this.#CNPJ}`
    }

}

const teste = new Conta("Josue",02020, 01010, 1000)
// console.log(teste.dadosPf)
teste.deposito(500)

// console.log(teste.lancamento())

teste.transferencia(500)

// console.log(teste.lancamento())


console.log(teste.juros("3/14/2022", 100))