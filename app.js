// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo al array y mostrarlo en la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");

    // Verifica que el input no esté vacío
    if (inputAmigo.value.trim() !== "") {
        // Agrega el nombre al array
        amigos.push(inputAmigo.value.trim());

        // Crea un nuevo elemento <li> para mostrar al amigo
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.innerHTML = `Amigo ${amigos.length}: <strong>${inputAmigo.value}</strong>`;
        listaAmigos.appendChild(nuevoAmigo);

        // Limpia el campo de texto
        inputAmigo.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

// Función para realizar el sorteo y mostrar el ganador
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    // Verifica que haya amigos en la lista
    if (amigos.length > 0) {
        // Selecciona un ganador al azar
        const indiceGanador = Math.floor(Math.random() * amigos.length);
        const ganador = amigos[indiceGanador];

        // Muestra el ganador en la vista
        resultado.innerHTML = `<li>El ganador es: <strong>${ganador}</strong> 🎉</li>`;
    } else {
        alert("No hay amigos en la lista para sortear. Agrega al menos uno.");
    }
}
