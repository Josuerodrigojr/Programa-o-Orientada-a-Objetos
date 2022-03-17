class pessoa {
    constructor(nome, idade, endereco){
        this.nome = nome, 
        this.idade = idade,
        this.endereco = endereco
    }
    cumprimentaPessoa = () => ` Ola ${this.nome}`
}

class PessoaFisica extends Pessoa {
    constructor(nome, idade, endereco, rg){
    super (nome, idade, endereco);
    this.rg = rg;
}
}

const pessoaNormal = new Pessoa(
    "Jaque",
    28,
    dsadsad
)

const pessoaFisica = new Pessoa(
    "Jaque",
    28,
    dsadsad,
    shjhdjsad
)

// Ver no github depois com da professora




