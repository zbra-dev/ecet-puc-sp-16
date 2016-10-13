(function () {
    'use strict';

    angular
        .module('puc-chat.constants', [])
        .constant('routes', {
            LOGIN: '/login',
            CHAT: '/chat'
        })
        .constant('serverSettings', {
            PORT: '8080',
            PROTOCOL: 'http://',
            URL: '192.168.10.143'
        });
})();
