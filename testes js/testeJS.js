function redimencionar(){
    let box = document.getElementById("box1");
    let x1 = document.getElementById("x1");
    let y1 = document.getElementById("y1");
    box.style.top= `${y1.value}px`;
    box.style.left= `${x1.value}px`;
    box.innerHTML = `${x1.value}, ${y1.value}`;
}

function somar(){
    var var1 = document.getElementById("val1").value;
    var var2 = document.getElementById("val2").value;
    var soma = parseInt(var1) + parseInt(var2); 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "somado = " + soma + "; ";

}
function subtrair(){
    var var1 = document.getElementById("val1").value;
    var var2 = document.getElementById("val2").value;
    var subtracao = parseInt(var1) - parseInt(var2); 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "subtraido = " + subtracao + "; ";

}
function multiplicar(){
    var var1 = document.getElementById("val1").value;
    var var2 = document.getElementById("val2").value;
    var multiplicacao = parseInt(var1) * parseInt(var2); 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "multiplicado = " + multiplicacao + "; ";

}
function dividir(){
    var var1 = document.getElementById("val1").value;
    var var2 = document.getElementById("val2").value;
    var divisao = parseInt(var1) / parseInt(var2); 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "dividido = " + divisao + "; ";
}
switch (new Date().getDay()){

    case 0:
        dia = "Domingo, tenha um ótimo fim de semana.";
        break;
    case 1:
        dia = "Segunda, tenha uma ótima semana.";
        break
    case 2:
        dia = "Terça, tenha uma ótima semana.";
        break;
    case 3:
        dia = "Quarta, tenha uma ótima semana.";
        break;
    case 4:
        dia = "Quinta tenha uma ótima semana.";
        break;
    case 5:
        dia = "Sexta, tenha um ótimo fim de semana.";
        break;
    case 6:
        dia = "Sábado, tenha um ótimo fim de semana.";
        break;
}
console.log ("hoje é: " + dia)

//estruturas de repetição//

var passos;
for(passos = 0; passos < 10; passos ++){
    console.log(passos);
} 
 var sequencia = 0;
 while (sequencia <10 ) {
    console.log(sequencia);
    sequencia ++;
    
 }

 var carros = ["BMW", "Ford", "VW"];
 for(var i =0; i < carros.length; i++){
    console.log("Marca: " + carros);
 }
 var frutas = ["banana", "Abacate", "Maçã"];
 for(var fruta in frutas){
    console.log("Fruta: " + frutas);
 }
 //vetores ;//

 var alunos = ["Ana", "Jonathan", "Marcelo"];
 alunos.splice(2,0,"José, Marcia");
 console.log("alunos: " + alunos);

 const cidades = ["Curitiba", "Florianopolis", "Fraiburgo"];
 let removidos = cidades.splice(0,2,"São Paulo", "Rio de Janeiro");
 console.log("cidades: " + cidades, "Removidos: " + removidos);

 var numeros = [150, 30, 22, 14];
 delete numeros[1];

var vezes = numeros.map ((x)=>x*5);
var somatotal = numeros.reduce ((x,y)=>x+y);
console.log("multiplicado=" + vezes, 'Soma total=' + somatotal, numeros.length)

const a = [10,20,50,80];
const b = [5,30,75,25];
var c = a.concat(b); //junta os dois vetores
c.sort(); //ordena o vetor
c.reverse(); //inverte a ordem do vetor
c = c.filter ((x)=>(x>20 && x<70));

document.getElementById("contatenacao").innerHTML += c.join("; "); //join adiciona um simbolo escolhido entre os valores do vetor.

function calVetor(){

var numero1 = document.getElementById("num1").value;
var numero2 = document.getElementById("num2").value;
var vetorNum = [numero1, numero2]

if (parseInt (numero1) <0 || parseInt (numero2) <0 ){
    document.getElementById("resultadoVetor").innerHTML += "Numero invalido, adicione somente numeros inteiros positivos! "
}
else{
var calculoVetor = vetorNum.reduce((x,y)=>x/y);
document.getElementById("resultadoVetor").innerHTML += calculoVetor 
}
}
function carregarImagens(){
		
    var url = "https://dog.ceo/api/breeds/image/random"
    fetch(url, {
        method: 'get'
    })
    .then(function(response) {
        response.json().then(function(data){
            console.log('Resultado da Requisição: ' + data.message);

            var imgDog = document.getElementById("img_dog");
            imgDog.src = data.message;
        });
    })
    .catch(function(err) {
        console.error('O seguinte erro ocorreu durante a requisição: ' + err);
    });

}