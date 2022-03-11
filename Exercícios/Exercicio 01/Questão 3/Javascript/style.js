function Aluno(nome, idade, email, matricula, curso){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    this.matricula = matricula;
    this.curso = curso
}

let Aluno1 = new Aluno("Josué", 25, "josuerodrigo.jr80@gmail.com", 0215454, "Web Full Strack");
console.log(Aluno1);

Aluno.prototype.exemplo = function (){
    return this.curso
}

Aluno1 = new Aluno("Josué", 25, "josuerodrigo.jr80@gmail.com", 0215454, "Web Full Strack");

console.log(Aluno1.exemplo())
