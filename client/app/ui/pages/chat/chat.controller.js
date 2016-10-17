(function () {
    'use strict';

    angular
        .module('puc-chat.chat')
        .controller('chatController', ChatController);

    ChatController.$inject = ['$scope', '$location', '$timeout', '$window', 'roomService', 'userService', 'notificationService', 'loginService', 'routes'];
    function ChatController($scope, $location, $timeout, $window, roomService, userService, notificationService, loginService, routes) {
        var ctrl = this;
        ctrl.user = userService.getUser();
        ctrl.room = null;
        if (!ctrl.user) {
            $location.path(routes.LOGIN);
        }

        $scope.$on(Event.UPDATE_ROOM,
            function(){
                ctrl.room = roomService.getRoom();
                $scope.$apply();
                if(timeout){
                    $timeout.cancel(timeout);
                }
            });
        var room = roomService.getRoom();
        if(room && !_.isEmpty(room)){
            ctrl.room = roomService.getRoom();
        }

        var timeout = $timeout(function(){
            $location.path(routes.LOGIN);
        }, 2000);

        $window.onbeforeunload = function(){
            loginService.logout();
        };

        $scope.$on('$destroy', function () {
            loginService.logout();
        });
    }
})();