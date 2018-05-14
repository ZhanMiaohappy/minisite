/**
 * Created by BaoChaoying on 08/04/2017.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
            .controller('DashboardPushFinalController', DashboardPushFinalController);

    DashboardPushFinalController.$inject = ['AvatarUploadService','CreateVideo','toaster'];

    function DashboardPushFinalController (AvatarUploadService,CreateVideo,toaster) {
        var vm = this;
        vm.Upload = Upload;
        vm.submit = submit;
        vm.status = 'global';
        vm.thumbnailUploadStatus = '';
        if(!vm.video) {
            //若修改vm.video初始化数据，请在dashboard-sidebar.controller.js中同时进行修改
            vm.video = {
                tag:"",
                thumbnailUrl: ''
            };
        }

        function Upload(tab) {
           vm.status = tab;
            AvatarUploadService.open("ArticleImage", {aspectRatio:1006/528,compress:false, width:850},
                function (result) {
                console.log(vm.status)
                    if(result){
                        vm.video.thumbnailUrl = 'https://msone.bisaibang.com/' + result;
                        vm.thumbnailUploadStatus = '上传成功';
                    }
                }, function () {
                    vm.thumbnailUploadStatus = '发生虾米事情了?上传未成功';
                });
        }

        function submit(tag) {
            if(vm.video.thumbnailUrl){
                vm.video.tag = tag === 'country' ? 'final' : 'global';
                CreateVideo.save({}, vm.video, function success(result) {
                    toaster.pop('success', " ", '已成功');
                    vm.video.thumbnailUrl = null;
                }, function error(result) {
                    toaster.pop('error', " ", '失败');
                });
            }
        }
    }
})();
