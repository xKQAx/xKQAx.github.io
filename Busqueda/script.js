function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copiado al portapapeles: ' + text); // Agrega un mensaje de alerta para confirmar la copia
}

document.addEventListener('DOMContentLoaded', function() {
    const email = document.getElementById('email'); // Asigna un ID al correo electrónico
    const phone = document.getElementById('phone'); // Asigna un ID al teléfono

    email.addEventListener('click', function() {
        copyToClipboard(email.textContent); // Copia el contenido del correo electrónico al hacer clic
    });

    phone.addEventListener('click', function() {
        copyToClipboard(phone.textContent); // Copia el contenido del teléfono al hacer clic
    });
});


// Array para almacenar las tutorías agendadas
let tutoriasAgendadas = [
    { materia: 'Estadística Descriptiva', tutor: 'María Camila Gelvez Gómez', duracion: '2 horas' },
    { materia: 'Cálculo integral', tutor: 'Juan Camilo Pérez Delgado', duracion: '1 hora' },
    { materia: 'Física Mécanica', tutor: 'Gabriela Gómez Días', duracion: '1 hora' },
    { materia: 'Programación', tutor: 'Ivan Días López', duracion: '30 Minutos' },
    { materia: 'Epistemología', tutor: 'Paula Mantilla Herrera', duracion: '1 hora' }
];

// Función para agregar una tutoría agendada
function agregarTutoriaAgendada(tutoria) {
    tutoriasAgendadas.push(tutoria);
    actualizarListaTutorias();
}

// Función para actualizar la lista de tutorías agendadas en el DOM
function actualizarListaTutorias() {
    const tutoriaAgendadaElement = document.getElementById('tutoriaAgendada');
    tutoriaAgendadaElement.innerHTML = ''; // Limpiar la lista

    tutoriasAgendadas.forEach((tutoria, index) => {
        const li = document.createElement('li');
        li.classList.add('articulo');
        li.innerHTML = `
            <h3>${tutoria.materia}</h3>
            <p>Tutor: ${tutoria.tutor}</p>
            <p>Duración: ${tutoria.duracion}</p>
            <button onclick="eliminarTutoria(${index})">Eliminar tutoría</button>
        `;
        tutoriaAgendadaElement.appendChild(li);
    });
}

// Función para eliminar una tutoría agendada
function eliminarTutoria(index) {
    tutoriasAgendadas.splice(index, 1);
    actualizarListaTutorias();
}

// Cargar las tutorías iniciales
actualizarListaTutorias();











