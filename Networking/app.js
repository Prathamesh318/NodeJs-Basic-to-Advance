const net = require('net');

// Create a TCP server
const server = net.createServer((socket) => {
    socket.write('Hello, Client!');
    socket.on('data', (data) => {
        console.log('Received:', data.toString());
    });
});

// Listen on port 4000
server.listen(4000, () => {
    console.log('TCP server listening on port 4000');
});
