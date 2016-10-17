(function () {
    'use strict';

    angular
        .module('puc-chat.repository')
        .factory('userRepository', userRepository);
    
    userRepository.$inject = ['localStorageService'];
    function userRepository(localStorageService) {
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
