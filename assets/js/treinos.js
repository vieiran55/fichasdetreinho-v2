var menuTreinos = document.getElementById("treinos");
menuTreinos.addEventListener("click", function() {
    console.log("clicado")
    var tiposDeTreinos = document.getElementById("tiposDeTreinos");
    tiposDeTreinos.classList.toggle("mTS_hide");
})

var abc2xbtn = document.getElementById("abc2x__lista");
abc2xbtn.addEventListener("click", function() {
    console.log("clicado")
    var abc2x = document.getElementById("abc2xtreinos");
    abc2x.classList.toggle("ABC2x_hide");
})

var abcdeBtn = document.getElementById("abcde__lista");
abcdeBtn.addEventListener("click", function() {
    console.log("clicado")
    var abcde = document.getElementById("abcdetreinos");
    abcde.classList.toggle("abcde_hide");
})