/**
 * Created by BaoChaoying on 08/04/2017.
 */
(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('DashboardCheckListController', DashboardCheckListController);

    DashboardCheckListController.$inject = ['$state', 'toaster', 'GetAllPersonel','GetTaskData', 'GetTeamRegistrations','AdminGetAllRegistrations', 'SweetAlert', 'ExitRegistrations','GetAllCityMember'];

    function DashboardCheckListController($state, toaster,GetAllPersonel, GetTaskData,GetTeamRegistrations, AdminGetAllRegistrations, SweetAlert, ExitRegistrations,GetAllCityMember) {
        var vm = this;
        vm.page = 1;
        vm.playerNumber = "";
        vm.totalPages = "";
        vm.loadAll = loadAll;
        vm.loadPage = loadPage;
        vm.loadAll();

        /*注册用户   绑定战网ID的人数  注册队伍数量*/
        // GetTaskData.get({}, function (res) {
        //     vm.content = res;
        // }, function () {
        //
        // });

        function loadAll() {
            GetAllPersonel.query(null,function (response) {
                // console.log(response);
                vm.teams = response;
                vm.playerNumber = response.totalElements;
                vm.totalPages = response.totalPages;
            },function (error) {

            });
        }

        /*翻页*/
        function loadPage(page) {
            vm.page = page;
            loadAll();
        }
    }
})();
