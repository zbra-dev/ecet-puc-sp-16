(function () {
    'use strict';

    angular
        .module('puc-chat.components')
        .directive('chatUsers', chatUsersComponent);

    function chatUsersComponent() {
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
        };
    }
})();