function reload(){
    window.location.href = './index.html'
}

var btn = document.querySelector("#send");
var conteudoImagem =  document.getElementById("conteudo__imagem")
var imcId = document.getElementById("imcTexto")
var imcId2 = document.getElementById("imcTexto2")

btn.addEventListener("click", function(e) {

    

    var altura = document.querySelector("#altura");
    var peso = document.querySelector("#peso");

    var pesoValue = peso.value;
    var alturaValue = altura.value;

    
    // console.log(`meu peso é  ${pesoValue}`)
    // console.log(`minha altura é  ${alturaValue}`)
    // console.log(`minha altura é  ${alturaValue*alturaValue} e ${(alturaValue)*2}`)

    var imc = pesoValue / (alturaValue ** 2)

    console.log(`meu imc é ${imc}`)

    e.preventDefault();

    if (imc < 0.00185) {
        //alert('magro')
        conteudoImagem.src="./assets/img/shape/magro.png"
        conteudoImagem.classList.toggle("imc_hide");
        imcId.innerHTML = "Seu IMC é " + (imc * 10000).toFixed(2);
        imcId2.innerHTML = "Você está abaixo do peso ideal!";
    }  
    else if (imc >= 0.00185 && imc <= 0.0025) {
        conteudoImagem.src="./assets/img/shape/normal.png"
        conteudoImagem.classList.toggle("imc_hide");
        imcId.innerHTML = "Seu IMC é " + (imc * 10000).toFixed(2);
        imcId2.innerHTML = "Você está no peso ideal, PARABÉNS!";
    }
    else if (imc >= 0.0025 && imc <= 0.00299) {
        //alert('sobrepeso')
        conteudoImagem.src="./assets/img/shape/sobrepeso.png"
        conteudoImagem.classList.toggle("imc_hide");
        imcId.innerHTML = "Seu IMC é " + (imc * 10000).toFixed(2);
        imcId2.innerHTML = "Você está no Sobrepeso!";    
    }
    else if (imc >= 0.0030 && imc <= 0.00399) {
        //alert('obesidade')
        conteudoImagem.src="./assets/img/shape/obeso.png"
        conteudoImagem.classList.toggle("imc_hide");
        imcId.innerHTML = "Seu IMC é " + (imc * 10000).toFixed(2); 
        imcId2.innerHTML = "Você está em nível de Obesidade, procure ajuda!";   
    }
    else if (imc >= 0.0040) {
        //alert('super obeso')
        conteudoImagem.src="./assets/img/shape/superobeso.png"
        conteudoImagem.classList.toggle("imc_hide");
        imcId.innerHTML = "Seu IMC é " + (imc * 10000).toFixed(2);  
        imcId2.innerHTML = "Você está em nível de Além da Obesidade, procure ajuda Urgente!";  
    }

    
});