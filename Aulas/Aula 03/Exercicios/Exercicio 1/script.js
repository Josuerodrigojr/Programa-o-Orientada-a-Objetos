class Sorteio{
    constructor(quant){
        this.quant = quant;
        this.sorteio = (Math.random()*quant).toFixed(0);

    }
    get retorno (){
        return `De ${this.quant} pessoas, o ganhador foi o número ${this.sorteio}`;
    }
    get retornoPremio(){
        for (let i = 0; i<this.quant; i++ ){
            console.log((Math.random()*this.quant).toFixed(0))
        }
    }
}

const d = new Sorteio(100);
console.log(d.retornoPremio);