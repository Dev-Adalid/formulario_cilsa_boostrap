const inputs=document.querySelectorAll("input");
const buttons=document.querySelectorAll("button");
function colorInputsContraste(){
    var index = 0, length = inputs.length;
    for ( ; index < length; index++) {
        inputs[index].style.backgroundColor = "grey";
    }
}

function colorButtonsContraste(){
    var index = 0, length = buttons.length;
    for ( ; index < length; index++) {
        buttons[index].classList.remove("btn-primary");
        buttons[index].classList.add("btn-warning");
    }
}


function colorAppContraste() {
    let fondoForm=document.getElementById("forma");
    let fondoApp=document.getElementById("app");
    let titulo=document.querySelector("h2");
    fondoApp.classList.remove("bg-light");
    fondoApp.classList.add("bg-black");
    fondoForm.classList.remove("bg-white");
    fondoForm.classList.add("bg-dark");
    titulo.style.color ="white";
    fondoForm.style.color="white";
    
}

function contraste() {
    colorInputsContraste();
    colorButtonsContraste();
    colorAppContraste();
}


function colorInputsEstilo1(){
    var index = 0, length = inputs.length;
    for ( ; index < length; index++) {
        inputs[index].style.backgroundColor = "white";
    }
}

function colorButtonsEstilo1(){
    var index = 0, length = buttons.length;
    for ( ; index < length; index++) {
        buttons[index].classList.add("btn-primary");
        buttons[index].classList.remove("btn-warning");
    }
}


function colorAppEstilo1() {
    let fondoForm=document.getElementById("forma");
    let fondoApp=document.getElementById("app");
    let titulo=document.querySelector("h2");
    fondoApp.classList.add("bg-light");
    fondoApp.classList.remove("bg-black");
    fondoForm.classList.add("bg-white");
    fondoForm.classList.remove("bg-dark");
    titulo.style.color ="black";
    fondoForm.style.color="black";
    
}



function estilo1() {
    colorInputsEstilo1();
    colorButtonsEstilo1();
    colorAppEstilo1();
}