(function () {
    'use strict';

    angular
        .module('puc-chat.utils')
        .factory('localStorageService', LocalStorageService);

    function LocalStorageService() {
        return {
            store: store,
            retrieve: retrieve,
            remove: remove
        };

        function store(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        }

        function retrieve(key) {
            return JSON.parse(localStorage.getItem(key));
        }

        function remove(key) {
            localStorage.removeItem(key);
        }
    }

})();
