var socket = io();
socket.on('connect', function(){
    console.log('Conectado con el servidor..');
});

socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Jose Tejada',
    mensaje: 'Este es un mensaje desde el cliente'
}, function(feedback) {
    console.log('Se disparó el callback : ', feedback.mensaje);
});

// Escuchar información
socket.on('enviarMensaje', function(data) {
    console.log('data : ', data);
});