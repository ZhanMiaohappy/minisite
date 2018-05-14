(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('RuleOrIntroController', RuleOrIntroController);

    RuleOrIntroController.$inject = [];

    function RuleOrIntroController () {
        $('[data-toggle="tooltip"]').tooltip();
        console.log('rule');
        let vm = this;

        class Person {

            public name : string;
            public surname : string;
            public email : string;

            constructor(name, surname, email) {
                this.name = name;
                this.surname = surname;
                this.email = email;
            }

            greet () {
                alert("a");
            }
        }

    }
})();
