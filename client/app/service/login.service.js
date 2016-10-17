(function () {
    'use strict';

    angular
        .module('puc-chat.service')
        .factory('loginService', loginService);

    loginService.$inject = ['userRepository', 'localStorageService', 'sessionManagementService'];
    function loginService(userRepository, localStorageService, sessionManagementService) {
        return {
            login: login,
            logout: logout
        };

        function login(userName) {
            var user = new User(userName);
            userRepository.setUser(user);
            return user;
        }

        function logout(){
            var user = userRepository.getUser(user);
            sessionManagementService.send(Command.SIGN_OUT, { userName: user.userName });
        }
    }
})();
