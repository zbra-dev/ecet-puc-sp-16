(function () {
    'use strict';

    angular
        .module('puc-chat.login')
        .controller('loginController', ['$location', 'roomService', 'loginService', 'notificationService', 'routes', LoginController]);


    function LoginController($location, roomService, loginService, notificationService, routes) {
        var ctrl = this;
        ctrl.loading = false;
        ctrl.userName = "";

        ctrl.login = function (form) {
            if (form.$valid) {
                var user = loginService.login(ctrl.userName);
                ctrl.loading = true;
                roomService.joinRoom(ctrl.userName)
                    .then(function () {
                        $location.path(routes.CHAT);
                    })
                    .catch(function (error) {
                        notificationService.notify(error);
                    })
                    .finally(function () {
                        ctrl.loading = false;
                    });
            }
        }
    }


})();