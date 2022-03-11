const TV ={
    canal: 0,
    volumeTV: parseFloat((Math.random()*100).toFixed(0)),
    volume: "",
    ligada: "",
    recado1: "",

    tv: function liga(){
        if (this.ligada == true){
            this.recado1 = "A tv está ligada,"
            
        } else { 
            this.recado1 = this.recado1 + "A tv está desligada,"
        }
        this.recado1 = this.recado1 + ` o canal está no ${this.canal}`

        if (this.volumeTV + this.volume >= 100){
            this.recado1 = this.recado1 + ` o volume da TV está no máximo`
        } else if (this.volumeTV + this.volume < 0){
            this.recado1 = this.recado1 + ` a TV está no mudo`
        } else {
            this.recado1 = this.recado1 + ` a TV está no volume ${this.volumeTV + this.volume}`
        }
        return this.recado1
        
    },
    
}


TV.ligada = false;
TV.canal = 99;
TV.volume = 50;
console.log(TV.tv())