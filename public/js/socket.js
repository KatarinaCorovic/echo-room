var socket = new WebSocket('ws://localhost:3300');

socket.addEventListener('open', function() {
    alert('Connected to Websocket')

})

socket.addEventListener('close', function(){
    alert('Disconnected from Websocket')

})

socket.addEventListener('message', function(msg){
    
    alert('Server says: ' + msg.data);

})

    
document.querySelector('button').addEventListener('click', function(){
    socket.send(prompt('What do you have to say for yourself?'))
})  