(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .directive('homeFooter', homeFooter);

    homeFooter.$inject = [];

    function homeFooter() {
        var directive;
        directive = {
            restrict: 'EA',
            templateUrl: 'app/layouts/footer/footer.html',
            scope: {},
            controller: 'FooterController',
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;
    }
})();
