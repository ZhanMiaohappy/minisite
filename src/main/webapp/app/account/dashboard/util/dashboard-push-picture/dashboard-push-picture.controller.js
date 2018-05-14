/**
 * Created by BaoChaoying on 08/04/2017.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('DashboardPushPictureController', DashboardPushPictureController);

    DashboardPushPictureController.$inject = ['AvatarUploadService','CreateVideo','toaster'];

    function DashboardPushPictureController(AvatarUploadService,CreateVideo,toaster) {
        var vm = this;
        vm.Upload = Upload;
        vm.submit = submit;
        vm.selectChange = selectChange;
        vm.thumbnailUploadStatus = '';
        if(!vm.video) {
            //若修改vm.video初始化数据，请在dashboard-sidebar.controller.js中同时进行修改
            vm.video = {
                tag:"",
                thumbnailUrl: ''
            };
        }

        vm.select = [
            {
                "format":"小组赛",
                "group":[
                    "A",
                    "B",
                    "C",
                    "D",
                    "E",
                    "F",
                    "G",
                    "H",
                    "I",
                    "J",
                    "K",
                    "L",
                    "M",
                    "N",
                    "O",
                    "P"
                ]
            },
            {
                "format":"总决赛",
                "group":[
                    "A",
                    "B"
                ]
            }
        ];

        vm.firstSelect = vm.select[0];
        vm.secondSelect = vm.select[0].group[0];

        function selectChange() {
            vm.secondSelect = vm.firstSelect.group[0];
        }

        function Upload() {
            AvatarUploadService.open("ArticleImage", {aspectRatio:1050/650,compress:false, width:1050},
                function (result) {
                    if(result){
                        vm.video.thumbnailUrl = 'https://msone.bisaibang.com/' + result;
                        vm.thumbnailUploadStatus = '上传成功';
                    }
                }, function () {
                    vm.thumbnailUploadStatus = '发生虾米事情了?上传未成功';
                });
        }

        function submit() {
            if(vm.video.thumbnailUrl && vm.firstSelect && vm.secondSelect){
                vm.video.tag = vm.firstSelect.format+"-"+vm.secondSelect;
                //console.log(vm.video.tag);
                CreateVideo.save({}, vm.video, function success(result) {
                    toaster.pop('success', " ", '已成功');
                    vm.video = {
                        tag:"",
                        thumbnailUrl: ''
                    };
                }, function error(result) {
                    toaster.pop('error', " ", '失败');
                });
            }
        }
    }
})();
