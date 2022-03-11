const curso ={
    _nome: " ",
    _p1: " ",
    _p2: " ",
    get media(){
        if (this._p1 == 0 || this._p1 == 0){
            return "A nota da p1 ou da p2 foi 0, não vai ser possível fazer uma média"
        } else {      
            return `O nome do seu curso é ${this._nome} e sua média é ${(this._p1 + this._p2)/2}`;
        }
    },
    set nome (i){
        this._nome = i;
    },
    set p1(j){
        this._p1 = j;
    },
    set p2(k){
        this._p2 = k;
    }
}

curso.nome= "Josué"
curso.p1 = 20;
curso.p2 = 200
console.log(curso.media)