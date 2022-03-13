class Veiculo{
    constructor(rodas, usaCombustivel){
        this.rodas = rodas;
        this.usaCombustivel = usaCombustivel;
    }
}

class Carro extends Veiculo{
    constructor(rodas, usaCombustivel, tipoDeCombustivel){
        super(rodas,usaCombustivel)
        this.tipoDeCombustivel = tipoDeCombustivel;
    }
}

class Bicicleta extends Veiculo{
    constructor(rodas, usaCombustivel){
        super(rodas, usaCombustivel)
        this.infantil = "";
    }
    get bicicleta(){
        if (this.rodas > 2 && this.usaCombustivel == false){
            return "A bicicleta é infantil"
        } else {
            return "A bicicleta não é infantil"
        }
    }
}

const b = new Veiculo (4, true)
const w = new Carro (4, true, "Gasolina")
console.log(b, w)
const j = new Bicicleta (4, true);
console.log(j.bicicleta)