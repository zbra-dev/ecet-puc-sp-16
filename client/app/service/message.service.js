(function () {
    'use strict';

    angular
        .module('puc-chat.service')
        .factory('messageService', ['$q', 'sessionManagementService', MessageService]);

    function MessageService($q, sessionManagementService) {
        return {
            sendMessage: sendMessage
        };

        function sendMessage(room, message) {
            var deferred = $q.defer();

            sessionManagementService.send(Command.MESSAGE, {
                roomId: room.id,
                userName: message.owner.userName,
                content: message.content
            })
            .then(function () {
                deferred.resolve();
            })
            .catch(function () {
                deferred.reject('Error sending message');
            });

            return deferred.promise;
        }
    }

})();
