class CNH{
    constructor(_pais, _categoria){
        this._pais = _pais;
        this._categoria = _categoria;
    }
        get idade(){
            if (this._pais == "US" || this._pais == "CA"){
            let idade = 16;
            `O país é ${this._pais}, a idade é ${idade}`
        } else if (this._pais == "CH" || this._pais == "RU"){
            let idade = 21;
            `O país é ${this._pais}, a idade é ${idade}`
        } else if (this._pais == "BR"){
            if (this._categoria == undefined){
                return `Digite a categoria`
            } else{
                let idade = 18;
                
                return `O país é ${this._pais}, a idade é ${idade} e a categoria é ${this._categoria}`;
            }
        } else {
            return "País não catalogado"
        }
        
        

    }
}

const Carteira = new CNH("BR", "A");

console.log(Carteira.idade);
