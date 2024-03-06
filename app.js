function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function imagenInicial() {
    let imagenCifrado = document.createElement('img');
    imagenCifrado.src = "img/person.png";
    imagenCifrado.classList.add('clasePrueba');
    let src = document.getElementById('imgCifradoInicial');
    src.appendChild(imagenCifrado);
}

/*function btnCopiar(){
    let btnCopy = document.createElement('input');
    btnCopy.setAttribute("type", "submit");
    let src = document.getElementById('btnCopiarTexto');
    src.appendChild(btnCopy);
}*/

function condicionesIniciales() {
    asignarTextoElemento('.text-answer', 'Ningún mensaje fue encontrado');
    asignarTextoElemento('.text-indications', 'Ingresa el texto que deseas encriptar o desencriptar');
    imagenInicial();
}

function cifrar() {
    let textoUsuario = document.getElementById('write-text').value;
    //console.log(textoUsuario)
    //console.log(typeof(textoUsuario))
    let textoCifrado = textoUsuario
    .replaceAll('e','enter')
    .replaceAll('i','imes')
    .replaceAll('a','ai')
    .replaceAll('o','ober')
    .replaceAll('u','ufat')
    //document.getElementById('write-text').value = textoCifrado
    asignarTextoElemento('.text-answer', 'Texto encriptado')
    asignarTextoElemento('.text-indications', textoCifrado)
    document.getElementById('imgCifradoInicial').style.display = 'none';
    //btnCopiar();
}

function descifrar() {
    let textoUsuario = document.getElementById('write-text').value;
    //console.log(textoUsuario)
    //console.log(typeof(textoUsuario))
    let textoDescifrado = textoUsuario
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')
    asignarTextoElemento('.text-answer', 'Texto desencriptado')
    asignarTextoElemento('.text-indications', textoDescifrado)
    document.getElementById('imgCifradoInicial').style.display = 'none';
}

condicionesIniciales();