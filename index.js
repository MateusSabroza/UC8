
let data = new Date();//Define a data atual sem formatar
let dataevento = new Date(2024, 08, 24);

if (data > dataevento){
    console.log("Data invalida, escolha um evento antes de "+ data )
} else {
    console.log("Data valida, continuando cadastro")
    evento()    
}


function evento(){
       var participantes = ["Mateus","Carol","Joana","Artur","Clara"]
       var palestrantes = ["Professor Caique","Monitor Raoni"]
     while(participantes.length<100){
        //  let idade = prompt("Digite sua idade"); tentei aplicar esse comando aqui mas pelo oq parece precisa sem no navegador para n dar erro
        // como foi orientado de n usar HTML, n vou criar um arquivo para desenpenhar essa funcionalidade
     let idade =18;

     if(idade<18){
        console.log("Idade invalida")
    } else {
        console.log("Cadastro autorizado");
        //let nome = prompt("insira o seu nome:")
        let nome = "Mateus"; 
        participantes.push(nome)
        

     }
    } 
    if (participantes.length>=100){
        console.log("Limite de participantes excedidos.");
    }   
    console.log("Lista de participantes: "+participantes)
    console.log("Lista de palestrantes: "+palestrantes)
}








/*N devo usar esse codigo abaixo, mas vou deixar como consulta de estudos 

function formatarData(data){
    let newDate = new Date(data);
    return `${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()}`
}
let data = new Date();//Define a data atual sem formatar
let dia = data.getData()//pega o dia da data/enquanto o getDay() pega o dia da semana 
let mes = data.getMonth()//pega o mês da data 
let ano =data.getFullYear()//pega o ano da data
*/
