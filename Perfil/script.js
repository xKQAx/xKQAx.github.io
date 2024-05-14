document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profile-form');
    const editButton = document.getElementById('edit-profile');
    const saveButton = document.getElementById('save-profile');

    // Función para habilitar la edición del perfil
    function enableEdit() {
        profileForm.querySelectorAll('input, select').forEach((element) => {
            element.removeAttribute('readonly');
            element.removeAttribute('disabled');
        });
        saveButton.classList.remove('d-none');
        editButton.classList.add('d-none');
    }

    // Función para guardar los cambios del perfil
    function saveChanges(event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Aquí puedes agregar la lógica para guardar los cambios, como enviar los datos a un servidor

        // Deshabilita la edición del perfil
        profileForm.querySelectorAll('input, select').forEach((element) => {
            element.setAttribute('readonly', true);
            element.setAttribute('disabled', true);
        });
        saveButton.classList.add('d-none');
        editButton.classList.remove('d-none');

        // Muestra un mensaje de éxito
        alert('Cambios guardados exitosamente');
    }

    // Evento click para el botón de editar perfil
    editButton.addEventListener('click', enableEdit);

    // Evento submit para el formulario de perfil
    profileForm.addEventListener('submit', saveChanges);
});

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

// Asumiendo que tienes una variable "rating" con la calificación del usuario (por ejemplo, 4.5)
const rating = 4.5;

// Obtener la parte entera y decimal de la calificación
const integerPart = Math.floor(rating);
const decimalPart = rating - integerPart;

// Crear las estrellas llenas y medias según la calificación
let starsHtml = '';
for (let i = 0; i < integerPart; i++) {
    starsHtml += '<i class="fas fa-star"></i>';
}
if (decimalPart > 0) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>';
}
const remainingStars = 5 - Math.ceil(rating);
for (let i = 0; i < remainingStars; i++) {
    starsHtml += '<i class="far fa-star"></i>';
}

// Mostrar las estrellas en la página
document.querySelector('.rating-stars').innerHTML = starsHtml;


