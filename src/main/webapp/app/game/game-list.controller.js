(function(){
    'use strict';
    angular
        .module('bsbmsoneApp')
        .controller('GameController',GameController);
    GameController.$inject=[];
    function GameController(){
        // $('[data-toggle="tooltip"]').tooltip();
        var vm = this;
        var Person =/** @class*/(function(){
            function Person(name,surname,email){
                this.name =name;
                this.surname =surname;
                this.email =email;
            }
            Person.prototype.greet =function(){
                alert("a");
            }
            return Person;
        }());
    }
})();
