
let express = require('express');
let socket = require('socket.io')

let app = express();
let host = 3000
let server = app.listen(host)
let io = socket(server);

app.use(express.static('public'));

console.log("Socket server is running. localhost:" + host)

io.sockets.on('connection', newConnection)

function newConnection(socket){
	console.log('connection:',	socket.id);
	socket.on('mouse', mouseMsg);
	
	function mouseMsg(data) {
		socket.broadcast.emit('mouse', data)
		// console.log(data)
	}
}