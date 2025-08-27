//Array para almacenar los nombres de amigos
let amigos = [];

//Funcion para agregar un amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // FIX: value (no ariaValueMax)

    //Validar que el campo no este vacio
    if (nombreAmigo === "") { // FIX: usar nombreAmigo
        alert("Por favor, inserte un nombre.");
        return; //Detiene la ejecucion de la funcion
    }

    //Validar que el nombre no este duplicado (ignora mayus/minus)
    const existe = amigos.some(a => a.toLowerCase() === nombreAmigo.toLowerCase()); // MEJORA
    if (existe) {
        alert(`El nombre ${nombreAmigo} ya esta en la lista`); // FIX: backticks + variable correcta
        return;
    }

    //Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada
    inputAmigo.value = ""; // FIX: typos

    //Actualizar la lista en el HTML
    actualizarLista();
}

//Funcion para actualizar la lista de amigos en la interfaz
function actualizarLista(){
    const listAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista
    listAmigos.innerHTML = ""; //Borra cualquier contenido previo dentro del contenedor de la lista

    //Recorrer el array con un ciclo for
    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listAmigos.appendChild(li);
    }
}

//Funcion para seleccionar un amigo aleatorio
function sortearAmigo(){
    //Validar que haya amigos disponibles
    if(amigos.length === 0){ //Comprueba si el array 'amigos' esta vacio
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un numero aleatorio entre 0 y la longitud del array menor

    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtener un nombre del array

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`; // FIX: backticks
}
