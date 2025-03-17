//Lista de participantes
let listaAmigos = [];

//Captura el valor datos de entrada
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// Función para verificar y agregar un amigo a la lista
function agregarAmigo() {
    let nombreAmigos = document.getElementById('amigo').value;
  
    if (nombreAmigos === ""){
        alert('Por favor, inserte un nombre.');
        return;
    }  else if (listaAmigos.includes(nombreAmigos)) {
        alert('Este amigo ya está en la lista.');
        limpiarCaja();
        return;
    } else {
        listaAmigos.push(nombreAmigos);
        console.log (listaAmigos);
    }
    mostrarLista(); 
    limpiarCaja();
}
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
// Función para mostrar la lista en el HTML
function mostrarLista() {
    let listaHTML = document.getElementById('listaAmigos'); 
    listaHTML.innerHTML = ""; 

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = listaAmigos[i]; 
        listaHTML.appendChild(li); 
    }
}
// Función para seleccionar un amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega amigos antes de sortear.");
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); 
    // Obtiene el nombre del amigo sorteado
    let amigoSorteado = listaAmigos[indiceAleatorio]; 
    // Muestra el resultado en la página
    document.getElementById("resultado").innerHTML = `🎉 El amigo seleccionado es: <strong>${amigoSorteado}</strong> 🎉`;
}