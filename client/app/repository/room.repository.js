(function () {
    'use strict';

    angular
        .module('puc-chat.repository')
        .factory('roomRepository', roomRepository);

    function roomRepository() {
        var currentRoom = {};

        return {
            getRoom: getRoom,
            setRoom: setRoom
        };
        
        function getRoom() {
            return currentRoom;
        }

        function setRoom(room) {
            currentRoom.id = room.id;
            currentRoom.name = room.name;
            currentRoom.users = room.users;
            currentRoom.messages = room.messages;
        }
    }
})();
