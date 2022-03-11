var carro = {
    color: "",
    marc: "",

    get cor(){
        return `Seu carro é da cor ${this.color}`

    },
    get marca(){
        return `Seu carro é da marca ${this.marc}`

    },
    set cor(i){
        this.color = i

    },
    set marca(j){
        this.marc = j;

    }
}

carro.cor = "Azul"
carro.marca = "Celta"
console.log(carro.cor)
console.log(carro.marca)