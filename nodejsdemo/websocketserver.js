http = require('http').createServer(),
WebSocketServer = require('ws').Server,
wss = new WebSocketServer({
port: 8881
});



wss.broadcast = function broadcast(data) {
wss.clients.forEach(function each(client) {
client.send(data);
});
};

wss.on('connection', function(ws) {
ws.on('message', function(msg) {
data = JSON.parse(msg);
if (data.message) wss.broadcast('<strong>' + data.name + '</strong>: ' + data.message);
});
});