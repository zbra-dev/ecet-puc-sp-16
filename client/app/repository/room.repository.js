(function () {
    'use strict';

    angular
        .module('puc-chat.repository')
        .factory('roomRepository', ['$q', RoomRepository]);

    function RoomRepository($q) {
        var rooms = [];
        rooms.push(new Room(1, 'first room'));

        return {
            getRoom: getRoom
        };

        function getRoom(roomId) {
            var deferred = $q.defer();

            var room = _.find(rooms, function(r) { return r.id === roomId});

            if(room){
                deferred.resolve(room);
            } else{
                deferred.reject();
            }
            
            return deferred.promise;
        }
    }

})();
