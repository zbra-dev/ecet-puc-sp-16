(function () {
    'use strict';

    angular
        .module('puc-chat.service')
        .factory('roomService', roomService);

    roomService.$inject = ['$q', '$location', 'routes', 'roomRepository', 'userRepository', 'sessionManagementService'];
    function roomService($q, $location, routes, roomRepository, userRepository, sessionManagementService) {
        return {
            joinRoom: joinRoom,
            getRoom: getRoom
        };

        function joinRoom(userName) {
            var deferred = $q.defer();

            sessionManagementService.send(Command.JOIN_ROOM, { userName: userName })
                .then(function (){
                    deferred.resolve();
                })
                .catch(function(){
                    deferred.reject('Could not join room');
                });

            return deferred.promise;
        }

        function getRoom(roomId){
            return roomRepository.getRoom();
        }
    }

})();
