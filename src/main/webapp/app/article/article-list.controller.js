(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('ArticleListController', ArticleListController);

    ArticleListController.$inject = ['GetArticle'];

    function ArticleListController(GetArticle) {
        var vm = this;

        vm.page = 1;
        vm.pageSize=10;
        vm.articles=[];

        vm.loadPage = loadPage;

        function loadAll() {
            GetArticle.get({
                page: vm.page-1,
                size: vm.pageSize,
                sort: ['id,asc']
            }, onSuccess, onError);

            function onSuccess(response) {
                vm.articles = response.content;
                vm.totalPages = response.totalPages;
            }

            function onError(error) {
               //console.log('失败了');
            }
        }

        function loadPage(page) {
            vm.page = page;
            loadAll();
        }




    }
})();
