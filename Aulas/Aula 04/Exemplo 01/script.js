class Animal {
    constructor(especie){
        this.especie = especie
}
}

class Pessoa extends Animal{
    constructor(nome, idade, especie = "Homo sapiens sapeiens"){
        super(especie)
        this.nome = nome;
        this.idade = idade;
    }
    retornar(){
        return this.especie + this.nome + this.idade
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, cpf, rg){
        super (nome, idade)
        this.cpf = cpf;
        this.rg = rg;
    }
}

const b = new Pessoa ("Josué", 25)
console.log(b.retornar())