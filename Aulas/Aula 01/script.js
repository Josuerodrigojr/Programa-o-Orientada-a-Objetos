const pessoa = {
    nome: "Josué",
    idade: 25,
    comprimentaPessoa(nome = "fghfghgfhgf"){
        return console.log("Seja bem vindo: " + nome);

    },
};

const mensagem = pessoa.comprimentaPessoa()


// This -> Uso de uma função, o this pega do escobo acima, pegando a variavel dentro da função


const counter = {
    count: 0,
    next: function(){
        return this.count++;
    }

}

counter.next();
counter.next();
counter.next();

console.log(counter.count);

// This (global) -> Pelo que eu entendi, vc armazenar a váriavel para ficar dentro do contexto windows.

console.log( this.window.document);
/** se eu atribuir uma propriedde ao
* o js adciona a propriedade como se
*/
this.color = "red";
console.log(window.color);

// Exemplo de this global

let carro = {
    marca: "Hyundai",
    getMarca: function() {
      return this.marca;
    },
}

let carro2 = {
    marca: "Uno"
}

  console.log(carro.getMarca());
  let marca = carro.getMarca();
  console.log(marca);

  let marca1 = carro.getMarca.bind(carro2);
console.log(marca1())

// Chamada de construtor

function Carro(placa){
    this.placa = placa;
    this.marca = "";
}

Carro.prototype.getPlaca = function (){
    return this.placa;
}
         
let carro1 = new