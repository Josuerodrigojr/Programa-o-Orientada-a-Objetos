const ave = {
    especie: "Seriemas",
    retornoEspecie: function(){
        return this.especie;
    }
}

console.log(ave.retornoEspecie());

const peixe ={
    especie: "Lambari",
}

console.log(ave.retornoEspecie.bind(peixe)()    );