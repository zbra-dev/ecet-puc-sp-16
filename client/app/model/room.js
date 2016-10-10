'use strict';

function Room(id, name){
    this.id = id;
    this.name = name;
    this.users = [];
    this.messages = [];
}

Room.prototype.addUser = function(user) {
    this.users.push(user);
};

Room.prototype.removeUser = function(userId) {
    var index = _.findIndex(this.users, function(u) { return u.id === userId;  } );
    if(index !== -1){
        this.users.splice(index, 1);
    }
};

Room.prototype.addMessage = function(message) {
    this.messages.push(message);
};

Room.prototype.removeMessage = function(messageId) {
    var index = _.findIndex(this.messages, function(m) { return m.id === messageId;  } );
    if(index !== -1){
        this.messages.splice(index, 1);
    }
};