let nombreAmigos = 0;
//Lista de participantes
let listaAmigos = [];

//Captura el valor datos de entrada
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// Función para verificar y agregar un amigo a la lista
function verificarEntrada() {
    let nombreAmigos = document.getElementById('amigo').value;
  
    if (nombreAmigos == ""){
        alert ('Por favor, inserte un nombre.');
        return;
    } else {
        listaAmigos.push(nombreAmigos);
        console.log (listaAmigos);
    }
    asignarTextoElemento("#lista", listaAmigos.join(", "));

}
