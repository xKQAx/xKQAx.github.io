function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copiado al portapapeles: ' + text); // Agrega un mensaje de alerta para confirmar la copia
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardType = document.getElementById('card-type').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const cardHolder = document.getElementById('card-holder').value;
    const postalCode = document.getElementById('postal-code').value;

    // Aquí puedes añadir la lógica para procesar los datos del formulario

    console.log('Tipo de Tarjeta:', cardType);
    console.log('Número de Tarjeta:', cardNumber);
    console.log('Fecha de Expiración:', expiryDate);
    console.log('CVV:', cvv);
    console.log('Titular de la Tarjeta:', cardHolder);
    console.log('Código Postal:', postalCode);

    // Simulación de un mensaje de éxito y redirección después de 3 segundos
    setTimeout(function() {
        alert('Pago exitoso');
        window.location.href = '../Bienvenida/Bienvenida.html';
    }, 3000);
});

