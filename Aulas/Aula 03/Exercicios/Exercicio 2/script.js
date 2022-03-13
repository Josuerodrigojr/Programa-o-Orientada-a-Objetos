class restaurante {
    constructor(cidade, delivery = true, pedidosPendentes = 0){
        this.cidadeRestaurante = "Vitoria da Conquista"
        this.cidade = cidade;
        this.delivery = delivery;
        this.pedidosPendentes = pedidosPendentes;
        this.tempoEntrega = 10 + 2*pedidosPendentes; 
    }
    
    entregaPedido() {
        if (this.cidadeRestaurante == this.cidade && this.delivery == true){
            return `Podemos entregar no seu endereço, o tempo de entrega é ${this.tempoEntrega} min`

        } else if(this.cidadeRestaurante == this.cidade && this.delivery == false){
            return ("Não podemos entregar no seu endereço, não trabalhamos com delivery ")
        } else {
            return ("Não podemos entregar no seu endereço, sua cidade é diferente da do restaurante")
        }

    }
}

const b = new restaurante("Vitoria da Conquista", true, 10);
console.log(b.entregaPedido())
console.log(b.entregaPedido())