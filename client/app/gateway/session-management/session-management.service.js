(function () {
    'use strict';

    angular
        .module('puc-chat.gateway')
        .factory('sessionManagementService', ['$q', '$location', 'localStorageService', 'stompService', 'commandProcessorFactory', 'commandContext', 'routes', 'serverSettings', SessionManagementService]);

    function SessionManagementService($q, $location, localStorageService, stompService, commandProcessorFactory, commandContext, routes, serverSettings) {
        stompService.addEventObserver(notify);
        return {
            send: send
        };


        function send(command, payload) {
            var deferred = $q.defer();
            connect()
                .then(function () {
                    stompService.send(command, payload);
                    deferred.resolve();
                })
                .catch(function () {
                    deferred.reject('Server is unavailable');
                });
            return deferred.promise;
        }

        function connect() {
            var deferred = $q.defer();
            var settings = {
                protocol: serverSettings.PROTOCOL,
                url: serverSettings.URL,
                port: serverSettings.PORT
            };

            return stompService.connect(settings);
        }

        function notify(data, command) {
            if (!!data && !!command) {
                var commandProcessor = commandProcessorFactory.create(command);
                if (!!commandProcessor) {
                    commandProcessor.process(data, commandContext);
                }
            }
        }
    }
})();
