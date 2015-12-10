/**
 * Created by michel.dirix on 29/07/15.
 */



function Cobra(){
    this.url = null;
    this.socket = null;
    this.connected = false;
    this.roomName = null;
    this.socketId = null;
}

Cobra.prototype.connect = function(url){
    var self = this;
    this.url = url;
    this.socket = io.connect(url);

    this.socket.on('connect', function() {
        self.connected = true;
        self.connectionCallback();
    });

    this.socket.on("message", function(msg) {
        //
        if(msg.type == "infos")
            self.socket.id = msg.socketId;
        self.messageReceivedCallback(msg);
    });

    this.socket.on("client_joined_room", function(data) {
        self.clientJoinedRoomCallback(data);
    });

    this.socket.on("client_left_room", function(data) {
       self.clientLeftRoomCallback(data);
    });
}

Cobra.prototype.joinRoom = function(roomName){
    var self = this;
    if(this.connected) {
        this.socket.emit('joinRoom', roomName);
        this.roomName = roomName;
        self.joinRoomCallback(roomName);
    }
}

Cobra.prototype.sendMessage = function(message, roomName, toAll) {
    if(this.connected) {
        this.socket.emit('message', { room: roomName, message: message, date: new Date(), socketId: this.socket.id ,toAll: toAll});
    }
}

Cobra.prototype.connectionCallback = function(){

}

Cobra.prototype.messageReceivedCallback = function(msg){
    //
}

Cobra.prototype.joinRoomCallback = function(roomName){

}

Cobra.prototype.clientJoinedRoomCallback = function(data){


}

Cobra.prototype.clientLeftRoomCallback = function(data){

}