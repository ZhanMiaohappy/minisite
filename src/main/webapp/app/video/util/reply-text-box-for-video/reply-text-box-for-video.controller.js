/**
 * Created by arslan on 3/3/17.
 */
(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('ReplyTextBoxForVideoController', ReplyTextBoxForVideoController);

    ReplyTextBoxForVideoController.$inject = ['createVideoComment', 'toaster', '$state', '$rootScope', 'Principal', 'RegisterService'];

    function ReplyTextBoxForVideoController (createVideoComment, toaster, $state, $rootScope, Principal, RegisterService) {
        var vm = this;
        vm.submit = submit;
        vm.login = "true";

        $rootScope.$watch('globalVariable.id', function () {
            vm.personName = $rootScope.globalVariable.nickName || $rootScope.globalVariable.phone;
        });

        vm.avatar = 'content/images/join/3.png';
        $rootScope.$watch('globalVariable.avatarUrl', function() {
            vm.avatar =  'content/images/join/3.png';
        });
        vm.reply = {
            title: '',
            content: vm.commentTarget?'@' + vm.commentTarget + ' ': '',
            state:  '',
            level: vm.level,
            video: {id: vm.videoId},
            leaderComment: {id: vm.leaderPostId} || null
        };

        vm.personName = $rootScope.globalVariable.nickName;

        $rootScope.$watch('globalVariable.nickName', function () {
            vm.personName = $rootScope.globalVariable.nickName;
        });

        Principal.identity().then(function(account) {
            if (account == null) {
                vm.login = false;
            } else {
                vm.login = true;
            }
        });

        function submit() {
            Principal.identity().then(function(account) {
                if (account == null) {
                    RegisterService.open('signin', function success() {
                        $state.reload();
                    }, function fail() {

                    });
                } else {

                    createVideoComment.post(vm.reply, function success(result) {
                        toaster.pop('success', " ", '已成功');
                        $state.reload();
                    }, function error(result) {
                        toaster.pop('error', " ", '失败');
                    });
                }
            });

        }
    }
})();
