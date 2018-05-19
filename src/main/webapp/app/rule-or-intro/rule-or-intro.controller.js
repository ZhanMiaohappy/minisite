(function () {
    'use strict';
    angular
        .module('bsbmsoneApp')
        .controller('RuleOrIntroController', RuleOrIntroController);
    RuleOrIntroController.$inject = [];
    function RuleOrIntroController() {
        $('[data-toggle="tooltip"]').tooltip();
        var vm = this;
        var Person = /** @class */ (function () {
            function Person(name, surname, email) {
                this.name = name;
                this.surname = surname;
                this.email = email;
            }
            Person.prototype.greet = function () {
                alert("a");
            };
            return Person;
        }());
    }
})();
