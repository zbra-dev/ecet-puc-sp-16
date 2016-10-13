(function () {
    'use strict';

    angular
        .module('puc-chat.gateway')
        .factory('commandContext', ['$rootScope', 'roomRepository', CommandContext]);

    function CommandContext($rootScope, roomRepository) {
        return {
            getRoomRepository: getRoomRepository,
            getScope: getScope
        };

        function getRoomRepository() {
            return roomRepository;
        }

        function getScope() {
            return $rootScope;
        }
    }
})();
