function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/*function imagenInicial() {
    let imagenCifrado = document.createElement('img');
    imagenCifrado.src = "img/person.png";
    let src = document.getElementById('imgCifradoInicial');
    src.appendChild(imagenCifrado);
}*/

function imagenInicial() {
    document.getElementById("imgCifradoInicial").style.display = "block"
}

function containsUppercase(str) {
    const uppercaseLetters = /[A-Z]/;
    return uppercaseLetters.test(str);
}

function transformUppercaseToLowcase() {
    let transformToLowercaseText = document.getElementById('write-text').toLowerCase();
    return transformToLowercaseText
}

function containsSpecialChars(str) {
    const specialChars =
        /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function changeContentCifrar(src) {
    let changeTextarea = document.getElementById("write-text");
    changeTextarea.value = src.toLowerCase();
    cifrar();
}

function changeContentDescifrar(src) {
    let changeTextarea = document.getElementById("write-text");
    changeTextarea.value = src.toLowerCase();
    descifrar();
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
    let userText = document.getElementById('write-text').value;
    if (containsSpecialChars(userText) == false && containsUppercase(userText) == false) {
        let textoCifrado = userText
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat')
        asignarTextoElemento('.text-answer', 'Texto encriptado')
        asignarTextoElemento('.text-indications', textoCifrado)
        document.getElementById('imgCifradoInicial').style.display = 'none';
        apareceBtnCopiar();
        document.getElementById("imgCifradoInicial").style.display = "none"
    } else if (containsUppercase(userText) == true) {
        console.log('Llegué aquí 1');
        let askUserToLowerCase = confirm('El texto ingresado contiene mayúsculas, ¿desea pasarlo a minúsculas para poder encriptar el texto?')
        if (askUserToLowerCase == true) {
            changeContentCifrar(userText);
        } else {
            condicionesIniciales();
            alert('Revise el texto ingresado, este tiene caracteres especiales');
        }
    } else {
        condicionesIniciales();
        alert('Revise el texto ingresado, este tiene caracteres especiales');
    }
}

function descifrar() {
    let userText = document.getElementById('write-text').value;
    if (containsSpecialChars(userText) == false && containsUppercase(userText) == false) {
        let textoUsuario = document.getElementById('write-text').value;
        let textoDescifrado = textoUsuario
            .replaceAll('enter', 'e')
            .replaceAll('imes', 'i')
            .replaceAll('ai', 'a')
            .replaceAll('ober', 'o')
            .replaceAll('ufat', 'u')
        asignarTextoElemento('.text-answer', 'Texto desencriptado')
        asignarTextoElemento('.text-indications', textoDescifrado)
        document.getElementById('imgCifradoInicial').style.display = 'none';
        apareceBtnCopiar();
        document.getElementById("imgCifradoInicial").style.display = "none"
    } else if (containsUppercase(userText) == true) {
        let askUserToLowerCase = confirm('El texto ingresado contiene mayúsculas, ¿desea pasarlo a minúsculas para poder desencriptar el texto?')
        if (askUserToLowerCase == true) {
            changeContentDescifrar(userText);
        } else {
            condicionesIniciales();
            alert('Revise el texto ingresado, este tiene caracteres especiales');
        }
    } else {
        condicionesIniciales();
        alert('Revise el texto ingresado, este tiene caracteres especiales');
    }
}

function copy(text) {
    navigator.clipboard.writeText(text)
}

function copyTextClipboard() {
    const elementToCopy = document.getElementById('answer-cifrado');
    const textToCopy = elementToCopy.innerText;
    console.log('llegué aquí')
    console.log(textToCopy)
    copy(textToCopy);
    alert('El texto ha sido copiado.')
}

condicionesIniciales();