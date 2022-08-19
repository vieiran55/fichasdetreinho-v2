var btn = document.querySelector("#send");
var tmb = document.getElementById("tmbTexto")
var tmb2 = document.getElementById("tmbTexto2")
var tmb3 = document.getElementById("tmbTexto3")
var tmb4 = document.getElementById("tmbTexto4")


var tmbSedentario = document.getElementsByName('placeSedentario')[0].placeholder=''

function marcarDesmarcarTodos() {
    var checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
}

btn.addEventListener("click", function(e) {
    var altura = document.querySelector("#altura");
    var peso = document.querySelector("#peso");
    var idade = document.querySelector("#idade");
    var masculino = document.querySelector("#masculino");
    var feminino = document.querySelector("#feminino");

    var alturaValue = (altura.value)
    var pesoValue = (peso.value)
    var idadeValue = (idade.value)
    var masculinoValue = (masculino.checked)
    var femininoValue = (feminino.checked)


    // console.log(`sua altuira é ${alturaValue}`)
    // console.log(`seu peso é ${pesoValue}`)
    // console.log(`sua idade é ${idadeValue}`)
    // console.log(masculinoValue)
    // console.log(femininoValue)


    e.preventDefault();

    if (masculinoValue == true && femininoValue == false) {

        var tmbMasculino = 66.5 + (13.7 * pesoValue) + (5 * alturaValue) - (6.7 * idadeValue)

            var ndcSedentario = tmbMasculino * 1.2 
            var ndcModerado = tmbMasculino * 1.35
            var ndcIntenso = tmbMasculino * 1.45



            console.log(tmbMasculino)
            document.getElementsByName('placeTMB')[0].placeholder=`${tmbMasculino} Cal = NDC`
            document.getElementsByName('placeSedentario')[0].placeholder=`${ndcSedentario.toFixed(1)} Cal = NDC`
            document.getElementsByName('placeModerado')[0].placeholder=`${ndcModerado.toFixed(1)} Cal = NDC`
            document.getElementsByName('placeIntenso')[0].placeholder=`${ndcIntenso.toFixed(1)} Cal = NDC`

    } else if (femininoValue == true && masculinoValue == false) {
        alert('muie')
        var tmbFeminino = 66.5 + (13.7 * pesoValue) + (5 * alturaValue) - (6.7 * idadeValue)

            var ndcSedentario = tmbFeminino * 1.19 
            var ndcModerado = tmbFeminino * 1.29
            var ndcIntenso = tmbFeminino * 1.39



            console.log(tmbFeminino)
            document.getElementsByName('placeTMB')[0].placeholder=`${tmbFeminino} Cal = NDC`
            document.getElementsByName('placeSedentario')[0].placeholder=`${ndcSedentario.toFixed(1)} Cal = NDC`
            document.getElementsByName('placeModerado')[0].placeholder=`${ndcModerado.toFixed(1)} Cal = NDC`
            document.getElementsByName('placeIntenso')[0].placeholder=`${ndcIntenso.toFixed(1)} Cal = NDC`

    } else {
        tmb.innerHTML = "Selecione o Sexo"
        alert('escolhe um sexo puto')
    }

})