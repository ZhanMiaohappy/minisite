/**
 * Created by BaoChaoying on 08/04/2017.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
            .controller('DashboardPushScheduleController', DashboardPushScheduleController);

    DashboardPushScheduleController.$inject = ['AvatarUploadService','UploadPicture','toaster'];

    function DashboardPushScheduleController (AvatarUploadService,UploadPicture,toaster) {
        var vm = this;
        vm.Upload = Upload;
        vm.submit = submit;
        vm.thumbnailUploadStatus = '';
        vm.picture = {
            url: '',
            tag: ''
        };

        function Upload() {
            AvatarUploadService.open("ArticleImage", {aspectRatio:16/9,compress:true, width:350},
                function (result) {
                    if(result){
                        vm.picture.url = 'https://msone.bisaibang.com/' + result;
                        vm.thumbnailUploadStatus = '上传成功';
                    }
                }, function () {
                    vm.thumbnailUploadStatus = '发生虾米事情了?上传未成功';
                });
        }

        function submit() {
            if(vm.picture.url){
                UploadPicture.save({}, vm.picture, function success(result) {
                    toaster.pop('success', " ", '已成功');
                    vm.picture = {
                        url: '',
                        tag: ''
                    };
                }, function error(result) {
                    toaster.pop('error', " ", '失败');
                });
            }
        }
    }
})();
