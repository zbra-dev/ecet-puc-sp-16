(function () {
    'use strict';

    angular
        .module('puc-chat.utils')
        .factory('notificationService', ['$mdToast', NotificationService]);

    function NotificationService($mdToast) {
        var TOAST_POSITION = 'right bottom';
        var TOAST_HIDE_DELAY = 5000;

        return {
            notify: notify
        };

        function notify(message) {
            return $mdToast.show({
                template: '<md-toast>{{ toastCtrl.message }}</md-toast>',
                locals: {
                    'message': message
                },
                controller: function () {
                },
                controllerAs: 'toastCtrl',
                bindToController: true,
                position: TOAST_POSITION,
                hideDelay: TOAST_HIDE_DELAY
            });
        }
    }

})();
