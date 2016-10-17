(function () {
    'use strict';

    angular
        .module('puc-chat.service')
        .factory('userService', userService);

    userService.$inject = ['userRepository'];
    function userService(userRepository) {
        return {
            getUser: getUser
        };

        function getUser(){
            return userRepository.getUser();
        }
    }
})();
