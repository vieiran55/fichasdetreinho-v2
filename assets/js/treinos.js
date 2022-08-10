// var menuTreinos = document.getElementById("treinos");
// menuTreinos.addEventListener("click", function() {
//     console.log("clicado")
//     var tiposDeTreinos = document.getElementById("tiposDeTreinos");
//     tiposDeTreinos.classList.toggle("mTS_hide");
// })

// var abc2xbtn = document.getElementById("abc2x__lista");
// abc2xbtn.addEventListener("click", function() {
//     console.log("clicado")
//     var abc2x = document.getElementById("abc2xtreinos");
//     abc2x.classList.toggle("ABC2x_hide");
// })


// var abcdeBtn = document.getElementById("abcde__lista");
// abcdeBtn.addEventListener("click", function() {
//     abc2xbtn.removeEventListener("click", abc2x)
//     console.log("clicado")
//     var abcde = document.getElementById("abcdetreinos");
//     abcde.classList.toggle("abcde_hide");
// })

const menuTreinos = document.getElementById("treinos");
const abc2xbtn = document.getElementById("abc2x__lista");
const abcdeBtn = document.getElementById("abcde__lista");
const pathBtn = document.getElementById("phat__lista");
const ABBtn = document.getElementById("ab__lista");
const uplowerBtn = document.getElementById("uplower__lista");

menuTreinos.addEventListener('click', () => {
    console.log("clicado")
    var tiposDeTreinos = document.getElementById("tiposDeTreinos");
    tiposDeTreinos.classList.toggle("mTS_hide");
    return true;
})

abc2xbtn.addEventListener('click', () => {
    var abc2x = document.getElementById("abc2xtreinos");
    abc2x.classList.toggle("ABC2x_hide");
})

abcdeBtn.addEventListener('click', () => {
        var abcde = document.getElementById("abcdetreinos");
        abcde.classList.toggle("abcde_hide");
})

pathBtn.addEventListener('click', () => {
    var path = document.getElementById("pathtreinos");
    path.classList.toggle("path_hide");
})

ABBtn.addEventListener('click', () => {
    var ab = document.getElementById("abtreinos");
    ab.classList.toggle("ab_hide");
})

uplowerBtn.addEventListener('click', () => {
    var uplower = document.getElementById("uplowertreinos");
    uplower.classList.toggle("uplower_hide");
})