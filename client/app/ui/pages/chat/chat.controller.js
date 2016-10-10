(function() {
    'use strict';

    angular
        .module('puc-chat.chat')
        .controller('chatController', ['roomService', ChatController]);


    function ChatController(roomService){
        var ctrl = this;

        roomService.getRoom(1)
            .then(function(room){
                ctrl.room = room;
            })
            .catch(function(error) {
                //could not find room
            });
    }
})();