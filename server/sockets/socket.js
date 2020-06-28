const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado...');

    client.on('disconnect', () => {
        console.log('Usuario desconectado...');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
        // if(data.usuario) {
        //     callback({
        //         mensaje: 'TODO SALIÓ BIEN'
        //     });
        // } else {
        //     callback({
        //         mensaje: 'TODO SALIÓ MAL'
        //     });
        // }
    });

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Este es un mensaje desde el administrador'
    });
});