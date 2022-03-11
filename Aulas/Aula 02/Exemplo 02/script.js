// function ConstroiPessoaConstrutor (nome, email, idade){
//     this.nome = nome;
//     this.email = email;
//     this.idade = idade

//     // Reescrevendo o método toString que serua encintrado dentro do escopo.

//     this.toString = () => {
//         return ("Nome da pessoa: " + this.nome + ", idade da pessoa" + this.idade);
//     }
// }

// let jaque = new ConstroiPessoaConstrutor(
//     "Jaque",
//     "jaqueajaque.com",
//     28);

//   console.log(jaque.toString());
//   console.log(jaque.idade.toString());

class Pessoa {
    constructor(nome, email, idade){
        this.nome = nome;
        this.email = email;
        this.idade = idade;

    }
    get dobraIdade (){
        return this.idade*2
    }
}

let Vini = new Pessoa(
    "Vinicius",
    "hdsjhdasjkd",
    25
);

console.log(Vini.dobraIdade);