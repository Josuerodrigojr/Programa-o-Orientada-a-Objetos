class TV{
    constructor(canal, volume, ligada){
    this.canal = canal;
    this.volume = volume;
    this.ligada = ligada;
    this.volumeTV= (Math.random()*100).toFixed(0);
    this.recado1= "";
    };
    get tv(){
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
}
}

const d = new TV(99, 05, true);
console.log(d.tv);




