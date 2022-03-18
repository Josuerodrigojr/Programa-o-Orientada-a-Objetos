function qualquerCoisa(){
    let num = 1;
    return num.toUpperCase();
}

// try {
//     //Invocando a função
//     qualquerCoisa();
// }

// catch(error){
//     console.log("Entrei no catch")
//     console.log(error);
//     console.log(error.message)
//     console.log(error.name)
// }


//Criando várias instruições de try cath

// function funcaoFunciona(){
//     console.log("Turma de POO")
// }

// try {
//     funcaoFunciona();
//     // console.log("Dando sequencia ao codigo")
// }

// catch(err){
//     console.log("Entrei no catch")
//     console.log(err)
// }

// // Finally irá executar, independente se o try ou catch vai dar certo ou não
// finally{
//     console.log("Final do try ou do catch")
// }


function validaString(nome){
    try{
        if(typeof nome !== 'string'){
            throw new TypeError("O valor do nome do parametro não será uma string")
        }else {
            console.log(`Olá ${nome}`)
        }
    }
    catch(e){
        console.log(e);
    }
}

validaString(5)