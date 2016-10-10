(function () {
    'use strict';

    angular
        .module('puc-chat.service')
        .factory('roomService', ['roomRepository', Service]);

    function Service(roomRepository) {
        return {
            getRoom: getRoom
        };

        function getRoom(roomId) {
            return roomRepository.getRoom(roomId);
        }
    }

})();
