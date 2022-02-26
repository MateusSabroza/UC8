const listaDeAlunos = ['Mateus','Lorena','Rayssa','Lucas','Isabela']

for (let contador = 0; contador < listaDeAlunos.length; contador++){

    if (contador===0){
        console.log(`${contador} é zero`)
    }

    else if (contador % 2 === 0 && contador !== 0){ 
        console.log(`${contador} é par`)
    }

    else {
        console.log(`${contador} é impar`)
    }
   
   console.log(`${contador})${listaDeAlunos[contador]}`);
}
/*for(let nome of listaDeAlunos){
    console.log(`Esta pessoa se chama ${nome}`)
}

*/