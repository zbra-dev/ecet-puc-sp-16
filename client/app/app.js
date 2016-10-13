(function () {
    'use strict';

    angular.module('puc-chat', [
        //external-libs
        'ngRoute',
        'ngAria',
        'ngAnimate',
        'ngMaterial',

        //modules
        'puc-chat.constants',
        'puc-chat.utils',
        'puc-chat.gateway',
        'puc-chat.service',
        'puc-chat.components',
        'puc-chat.pages',
        'puc-chat.repository'
    ]).config(route_);

    route_.$inject = ['$routeProvider', 'routes'];
    function route_($routeProvider, routes) {
        $routeProvider
            .when(routes.LOGIN, {
                templateUrl: 'ui/pages/login/login.html',
                controller: 'loginController',
                controllerAs: 'loginCtrl'
            })
            .when(routes.CHAT, {
                templateUrl: 'ui/pages/chat/chat.html',
                controller: 'chatController',
                controllerAs: 'chatCtrl'
            })
            .otherwise({
                redirectTo: routes.LOGIN
            });
    }
})();