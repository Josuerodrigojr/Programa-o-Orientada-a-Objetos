//estrutura (argumentos) => {corpo da função}

const soma = (n1,n2) => {
    return n1+n2;
}

console.log(soma(1,2))

const multiplicacao = (n1,n2) => n1*n2;
console.log(multiplicacao(1,2));

const x1 = () => "retorno implicito";

console.log(x1());

const carro = {
    modelo: "hb20",
    marca: "hyundai",
    nomeCompleto: function(){
        return `${this.modelo} ${this.marca}`
    }
}

console.log(carro.nomeCompleto())