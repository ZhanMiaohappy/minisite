/**
 * Created by BaoChaoying on 08/04/2017.
 */
(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('DashboardPushArticleController', DashboardPushArticleController);

    DashboardPushArticleController.$inject = ['$scope','toaster','AlertService','SweetAlert','GetAllPicture','DeletePicture'];

    function DashboardPushArticleController( $scope,toaster,AlertService,SweetAlert,GetAllPicture,DeletePicture) {
        var vm = this;
        vm.page = 1;
        vm.totalPages = "";

        vm.confirmDelete = confirmDelete;
        vm.loadPage = loadPage;

        getAllPicture();

        function getAllPicture() {
            GetAllPicture.get({
                page: vm.page - 1,
                size: 10,
                sort: ["id,asc"]
            },function (response) {
                vm.picture = response.content;
                vm.totalPages = response.totalPages;
            },function (error) {
                //console.log(error);
            });
        }

        function loadPage(page) {
            vm.page = page;
            getAllPicture();
        }


        function confirmDelete(id) {
            SweetAlert.swal({
                    title: "您要删除视频吗？",
                    text: "删除视频后不可恢复",
                    type: "warning",
                    showCancelButton: true,
                    backgroundColor: "#292e3a",
                    confirmButtonColor: "#cb6228",
                    confirmButtonText: "确认删除",
                    //cancelButtonColor: "#2a2e39",
                    cancelButtonText: "放弃"
                },
                function (isConfirm) {
                    if (isConfirm) {
                        DeletePicture.save({pictureid: id}, {}, function (response) {
                            toaster.pop('success', '', '删除成功');
                            getAllPicture();
                        }, function (response) {
                            //console.log(response);
                        });
                    }

                }
            );

        }
    }
})();
