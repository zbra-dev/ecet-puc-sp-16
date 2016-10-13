(function () {
    'use strict';

    angular
        .module('puc-chat.repository')
        .factory('userRepository', ['localStorageService', UserRepository]);

    function UserRepository(localStorageService) {
        return {
            getUser: getUser,
            setUser: setUser
        };

        function getUser() {
            return localStorageService.retrieve('user');
        }

        function setUser(user) {
            localStorageService.store('user', user);
        }
    }
})();
