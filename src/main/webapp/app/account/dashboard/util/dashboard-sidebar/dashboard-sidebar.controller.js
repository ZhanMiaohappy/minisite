/**
 * Created by arslan on 3/27/2017.
 */
(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('DashboardSideBarController', DashboardSideBarController);

    DashboardSideBarController.$inject = ['$interval', 'DeleteVideoTag', 'SweetAlert'];

    function DashboardSideBarController($interval, DeleteVideoTag, SweetAlert) {
        var vm = this;
        vm.deleteTag = deleteTag;
        vm.clearVideoData = clearVideoData;
        vm.clearArticleData = clearArticleData;

         vm.navLength = false;    //一级侧边栏

        vm.changeNavWidth = changeNavWidth;     //调整侧边栏宽度

        vm.tabs = [
            ['postArticle', 'manageArticle', 'manageComment'],
            ['postVideo', 'manageVideo', 'addVideoTag'],
            ['manageCommunicateSection', 'manageGameMatchSection', 'manageComplaintSection'],
            ['checkList', 'deleteTeam', 'changeName'],
            ['pushArticle', 'pushSchedule'],
            ['markUser', 'pushPicture']
        ];

        // GetAllVideoTag.get(function (result) {
        //     vm.tags = result;
        // });
        function deleteTag(tag) {
            SweetAlert.swal({
                    title: "您要删除标签吗？",
                    text: "删除标签后不可恢复",
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
                        DeleteVideoTag.save({id: tag.id}, null, function () {
                            // GetAllVideoTag.get(function (result) {
                            //     vm.tags = result;
                            // });
                        })
                    }

                }
            );
        }

        function clearVideoData() {
            //若修改vm.video初始化数据，请在dashboard-post-video.controller.js中同时进行修改
            vm.video = {
                abondon: false,
                name: '',
                thumbnailUrl: '',
                url: '',
                tag: ''
            };
        }

        function clearArticleData() {
            //若修改vm.article初始化数据，请在dashboard-post-article.controller.js中同时进行修改
            vm.article = {
                authorName: null,
                introduction: '',
                thumbnailUrl: '',
                content: '',
                contentContentType: null,
                createDate: new Date(),
                editDate: null,
                id: null,
                isAbandon: null,
                name: null,
                state: null,
                title: '',
                type: null,
                term:{id:1}
            };
        }

        function changeNavWidth() {
            if (!vm.navLength) {
                vm.navLength = true;
            } else {
                vm.navLength = !vm.navLength;
            }

            if (vm.navLength) {
                document.getElementsByClassName('menu-wraper')[0].style.width = '54px';
                document.getElementsByClassName('console-btn-icon')[0].innerHTML = '|||';
                Array.prototype.forEach.call(document.getElementsByClassName('panel-group'), function (b) {
                    b.style.width = '54px';
                });
                Array.prototype.forEach.call(document.getElementsByClassName('title-span'), function (t) {
                    t.style.display = 'none';
                });
                Array.prototype.forEach.call(document.getElementsByClassName('item-name'), function (c) {
                    c.style.display = 'none';
                });
                Array.prototype.forEach.call(document.getElementsByClassName('dashboard-section'), function (a) {
                    a.style.left = '54px';
                    a.style.width= '95%';
                });

            } else {
                document.getElementsByClassName('menu-wraper')[0].style.width = '180px';
                document.getElementsByClassName('console-btn-icon')[0].innerHTML= '控制器';
                Array.prototype.forEach.call(document.getElementsByClassName('title-span'), function (t) {
                    t.style.display = 'inline-block';
                });
                Array.prototype.forEach.call(document.getElementsByClassName('item-name'), function (c) {
                    c.style.display = 'inline-block';
                });
                Array.prototype.forEach.call(document.getElementsByClassName('panel-group'), function (b) {
                    b.style.width = '180px';
                });
                Array.prototype.forEach.call(document.getElementsByClassName('dashboard-section'), function (a) {
                    a.style.left = '180px';
                    a.style.width= '87%';
                });
            }
            vm.timeColdDown = 1;
            vm.waitColdDown = true;
            var countDown = $interval(function () {
                if (vm.timeColdDown < 1) {
                    $interval.cancel(countDown);
                    vm.waitColdDown = false;
                } else {
                    vm.timeColdDown--;
                }
            }, 10);
        }
    }
})();
