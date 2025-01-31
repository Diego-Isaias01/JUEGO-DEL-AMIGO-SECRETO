let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Agrega un nombre valido");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este amigo ya ha sido registrado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para realizar el sorteo.");
        return;
    }

    let elegido = amigos[Math.floor(Math.random() * amigos.length)];
    mostrarResultado(elegido);
}

function mostrarResultado(elegido) {
    let lista = document.getElementById("resultado");
    lista.innerHTML = "";
    let li = document.createElement("li");
    li.textContent = `El amigo secreto seleccionado es: ${elegido}`;
    lista.appendChild(li);
}
