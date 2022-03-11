// class ave{
//     constructor (cor, especie){
//         this.cor = cor,
//         this.especie = especie
//     }
// }

// //Instanciar a classe ave
// let a = new ave("branco", "galinha");
// console.log (a);

// class passaro extends ave{
//     constructor (cor, especie, voa){
//         super (cor, especie)
//         this.voa = voa;
//     }
// }

// let b = new passaro ("azul", "arara", true)
// console.log(b)

// Usando o extends para um objeto pré construido


class DataModificada extends Date{
    constructor(){
        super()

    }
    getFormatteDate(){
        var meses = ['Jan','Feb','Marçoooo0000','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return this.getDate() + "-" + meses[this.getMonth()] + "-" + this.getFullYear();
    }
}

let d = new DataModificada();
let f = new Date();

console.log(d.getFormatteDate());
// console.log(f.getFormatteDate())