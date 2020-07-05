var ws = require('ws')
var express = require('express')
var app = express()
app.listen(3100, function(){
    console.log('Server started on port 3100');

})

app.use(express.static('public'));

var server = new ws.Server({port: 3300})

server.on('connection', function(client){
    console.log('new guy arrived in town');

    client.on('close', function(){
        console.log('that annoying guy left the town');

    })
    

    client.on('message', function(msg){
        console.log('Client says: ' + msg );
        client.send(msg);
    })
})