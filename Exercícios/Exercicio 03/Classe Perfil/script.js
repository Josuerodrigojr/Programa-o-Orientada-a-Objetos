class perfil {
    constructor(nome, avatar, tema){
        this.nome= nome;
        this.avatar = avatar;
        this.tema = tema;

    }
    set tema1(tema1){
        tema1 = tema1[0].toUpperCase() + tema1.substr(1);
        if(tema1 === "Dark" || tema1 === "Light"){
            this.tema = tema1;
        } else {
            this.tema = "Não temos esse tema digitado"
        }

    }

    set url(url){
        url = url.trim();            
        if(url.includes("http") || url.includes("https")){
            this.avatar = url;

        } else {
            this.avatar = " não achamos sua url"
        }
        

    }
    get tema1(){
        return this.tema + ", seu nome é " + this.nome + ", " + this.avatar

    }

    

    
}

let nome1 = prompt("Digite seu nome: ");
const teste = new perfil (nome1, "", '');
teste.tema1 = prompt ("Digite seu tema");
teste.url = prompt("Digite a url de seu avatar")
console.log(teste.tema1)


