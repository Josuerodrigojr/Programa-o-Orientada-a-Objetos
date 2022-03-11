var variavel = {
    valor: 0,
    get moeda (){
        return "R$ " + this.valor.toFixed(2).replace(".",",")
    },
    get int (){
        return this.valor
    },
    set int(i){
        this.valor = i
    }
}

variavel.int = 150;

console.log(variavel.moeda())

var variavel = {
    valor: 0,
    conversor: "",
    get moeda () {
      return "O valor é de R$ " + this.valor.toFixed(2).replace(".",",");
    },
    get xpto() {
      return this.valor
    },
    set xpto(i) {
       this.valor - i
    },
    get conversao () {
      if( this.conversor === 'peso') {
         return 0.046 * this.valor;
      }
    }
}

    variavel.xpto = 150;
    variavel.conversor = "peso";
   console.log(variavel.conversao);