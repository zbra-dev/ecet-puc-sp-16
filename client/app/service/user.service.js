(function () {
    'use strict';

    angular
        .module('puc-chat.service')
        .factory('userService', ['userRepository', UserService]);

    function UserService(userRepository) {
        return {
            getUser: getUser
        };

        function getUser(){
            return userRepository.getUser();
        }
    }
})();
