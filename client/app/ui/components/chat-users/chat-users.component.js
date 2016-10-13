(function () {
    'use strict';

    angular
        .module('puc-chat.components')
        .directive('chatUsers', ChatUsersComponent);

    function ChatUsersComponent() {
        return {
            restrict: 'E',
            scope: true,
            templateUrl: 'ui/components/chat-users/chat-users.html',
            controllerAs: 'chatUsersCtrl',
            bindToController: {
                users: '='
            },
            controller: function () {
            }
        }
    }
})();