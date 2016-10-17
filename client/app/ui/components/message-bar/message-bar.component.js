(function () {
    'use strict';

    angular
        .module('puc-chat.components')
        .directive('messageBar', MessageBarComponent);

    function MessageBarComponent() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'ui/components/message-bar/message-bar.html',
            controllerAs: 'messageBarCtrl',
            bindToController: {
                room: '='
            },
            controller: ['userService', 'messageService', MessageBarController]
        };
    }

    function MessageBarController(userService, messageService) {
        var ctrl = this;
        ctrl.message = "";
        ctrl.user = userService.getUser();
        var count = 1;

        ctrl.sendMessage = function () {
            if(ctrl.message){
                messageService.sendMessage(ctrl.room, new Message((count++).toString(), ctrl.room.id, ctrl.user, ctrl.message));
                ctrl.message = "";
            }
        };
    }
})();