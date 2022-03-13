class Pessoa{
    constructor(nome,idade){
        this.nome = nome,
        this.idade = idade
    }
    apresentar(){
        return `O nome é ${this.nome}  e tenho ${this.idade} anos.`
    }
}

const p1 = new Pessoa ("Josué", 25);
console.log(p1);
console.log(p1.apresentar());
console.log(p1.nome);
console.log(JSON.stringify(p1));
console.log(Object.keys(p1));
console.log(Object.values(p1));

//Posso retornar coisas privadas pelo get()

class PessoaPrivada{
    #nome
    #idade
    constructor(nome,idade){
        this.#nome = nome,
        this.#idade = idade
    }
    get nome(){
        return this.#nome;
    }
    set nome (u){
        this.#nome = u;
    }
    apresentar(){
        return `O nome é ${this.nome}  e tenho ${this.idade} anos.`
    }
    toJSON(){
        return{
            nome: this.nome,
            idade: this.#idade,

        }
    }
}

const p2 = new PessoaPrivada ("Rodrigo", 26);
p2.nome="Mauel"
console.log(p2);
console.log(p2.apresentar());
console.log(p2.nome);
console.log(JSON.stringify(p2));
console.log(Object.keys(p2));
console.log(Object.values(p2));

