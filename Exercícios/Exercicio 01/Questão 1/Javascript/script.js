let curso = "";
const nomeAluno ={
    nome: 'Josué',
    matricula: '0412542',
    idade: '25',
    alunoFunc: function(curso = "Web Full Strack"){
        return (`O aluno ${this.nome} faz o curso ${curso}`)
    }
}

console.log(nomeAluno)

console.log(nomeAluno.alunoFunc());