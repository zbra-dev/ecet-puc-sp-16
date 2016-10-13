(function () {
    'use strict';

    angular
        .module('puc-chat.components')
        .directive('loadingOverlay', LoadingOverlayComponent);

    function LoadingOverlayComponent() {
        return {
            restrict: 'E',
            require: ['^mdContent'],
            scope: true,
            templateUrl: 'ui/components/loading-overlay/loading-overlay.html',
            controllerAs: 'loadingOverlayCtrl',
            bindToController: {
                visible: '='
            },
            transclude: true,
            controller: function () {
            }
        }
    }
})();