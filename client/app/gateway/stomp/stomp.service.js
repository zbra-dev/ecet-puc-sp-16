(function () {
    'use strict';

    angular
        .module('puc-chat.gateway')
        .factory('stompService', stompService);

    stompService.$inject = ['$q'];
    function stompService($q) {
        var stompClient;
        var requestDataMap = [];
        var eventObservers = [];

        return {
            connect: connect,
            send: send,
            addEventObserver: addEventObserver
        };

        function addEventObserver(eventObserver) {
            eventObservers.push(eventObserver);
        }

        function connect(serverSettings) {
            if (!!stompClient)
                stompClient.disconnect();

            var deferred = $q.defer();

            var server = serverSettings.protocol + '://' + serverSettings.url + ':' + serverSettings.port;
            var sockJS = new SockJS(server + '/chat');

            stompClient = Stomp.over(sockJS);
            stompClient.heartbeat.incoming = 0;
            stompClient.heartbeat.outgoing = 0;
            stompClient.debug = true;

            stompClient.connect({}, function () {
                deferred.resolve();

                stompClient.subscribe('/topic/join', function (frame) {
                    onEvent(frame, Command.JOIN_ROOM);
                });

                stompClient.subscribe('/topic/message', function (frame) {
                    onEvent(frame, Command.MESSAGE);
                });

                stompClient.subscribe('/topic/signout', function (frame) {
                    onEvent(frame, Command.SIGN_OUT);
                });

            }, function (frame) {
                /*
                 If we still hold a reference to deferred, then we have never been connected.
                 Cleanup and reject() the promise. Otherwise we lost connection and need to raise an event.
                 */

                if (!!deferred)
                    deferred.reject();
                else {
                    onStompError(frame);
                }
            });
            return deferred.promise;
        }

        function onEvent(frame, command){
            for(var i = 0; i < eventObservers.length; i++){
                eventObservers[i](JSON.parse(frame.body), command);
            }
        }

        function disconnect() {
            var deferred = $q.defer();

            stompClient.disconnect(function () {
                deferred.resolve();
            });

            return deferred.promise;
        }

        function send(command, payload) {
            if (!command) throw 'Illegal Argument: command is null';
            if (!payload || typeof (payload) !== 'object') throw 'Illegal Argument: payload must be an object';
            if (!stompClient) throw 'Illegal State: Stomp is not connected';

            stompClient.send('/app/' + command, {}, JSON.stringify(payload));
        }
    }
})();