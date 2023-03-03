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
    resultado.innerHTML += "somado = " + soma ;

}
function subtrair(){
    var var1 = document.getElementById("val1").value;
    var var2 = document.getElementById("val2").value;
    var subtracao = parseInt(var1) - parseInt(var2); 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "subtraido = " + subtracao;

}
function multiplicar(){
    var var1 = document.getElementById("val1").value;
    var var2 = document.getElementById("val2").value;
    var multiplicacao = parseInt(var1) * parseInt(var2); 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "multiplicado = " + multiplicacao;

}
function dividir(){
    var var1 = document.getElementById("val1").value;
    var var2 = document.getElementById("val2").value;
    var divisao = parseInt(var1) / parseInt(var2); 
    let resultado = document.getElementById("resultado");
    resultado.innerHTML += "dividido = " + divisao;
}
