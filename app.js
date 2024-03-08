function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function imagenInicial() {
    let imagenCifrado = document.createElement('img');
    imagenCifrado.src = "img/person.png";
    let src = document.getElementById('imgCifradoInicial');
    src.appendChild(imagenCifrado);
}

function apareceBtnCopiar() {
    document.getElementById("btnCopiarTexto").style.display = "block"
}

function condicionesIniciales() {
    asignarTextoElemento('.text-answer', 'Ningún mensaje fue encontrado');
    asignarTextoElemento('.text-indications', 'Ingresa el texto que deseas encriptar o desencriptar');
    imagenInicial();
    document.getElementById("btnCopiarTexto").style.display = "none"
}

function cifrar() {
    let textoUsuario = document.getElementById('write-text').value;
    //console.log(textoUsuario)
    //console.log(typeof(textoUsuario))
    let textoCifrado = textoUsuario
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat')
    asignarTextoElemento('.text-answer', 'Texto encriptado')
    asignarTextoElemento('.text-indications', textoCifrado)
    document.getElementById('imgCifradoInicial').style.display = 'none';
    apareceBtnCopiar()    
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
    apareceBtnCopiar()
}

function copy (text) {
    navigator.clipboard.writeText(text)
}

function copyTextClipboard () {
    const elementToCopy = document.getElementById('answer-cifrado');
    const textToCopy = elementToCopy.innerText;
    console.log('llegué aquí')
    console.log(textToCopy)
    copy(textToCopy);
    alert('El texto ha sido copiado.')
}


condicionesIniciales();