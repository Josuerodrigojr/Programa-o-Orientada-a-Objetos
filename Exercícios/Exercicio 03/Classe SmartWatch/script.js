class SmartWatch{
    constructor(){
        let i = 0;    
        this.b = i;
        this.passos = 0;
        this.dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    }
    resetOnMidnight(diaAtual){

        if (diaAtual == this.dias[this.b]){
            this.passos = this.passos + 1;
        } else {
        this.passos = 1;
        this.i = +1;
        this.b = this.i%7
    }
    
    

    }
    get quantPassos(){
        return `A quantidade de passos de hoje foi ${this.passos}`
        
    }



}

const b = new SmartWatch;
b.resetOnMidnight("Domingo")
console.log(b.quantPassos)
b.resetOnMidnight("Domingo")
b.resetOnMidnight("Domingo")
b.resetOnMidnight("Domingo")
b.resetOnMidnight("Domingo")
b.resetOnMidnight("Domingo")
b.resetOnMidnight("Domingo")
console.log(b.quantPassos)
b.resetOnMidnight("Segunda")
b.resetOnMidnight("Segunda")
b.resetOnMidnight("Segunda")
console.log(b.quantPassos)
