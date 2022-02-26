let listaDePecas = ["Frio","Volante","Motor","Roda"];
let peso =101;
let peca= "motor";
if(peso>100){

    console.log("Permitir cadastro");

}else {

    console.log("Cadastro negado");

}

if (listaDePecas.length<10){

    console.log("Permitir cadastro");

}
switch(peca.length){
    case 0:
        console.log("Erro, o nome da peça não pode ser vazio");
        break;
    case 1:
        console.log("Erro, nome menor que o mínimo");
        break;
    case 2:
        console.log("Erro, nome menor que o mínimo");
        break;
    case 3:
        console.log("Erro, nome menor que o mínimo");
        break;
    default:
        console.log("Peça cadastrada");

}

