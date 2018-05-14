(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('CompetingInfoController', CompetingInfoController);

    CompetingInfoController.$inject = ['$stateParams', 'toaster','SweetAlert', 'GetMyTeam','TeamRegistrations','EditTeamRegistrations','PersonUpdateInfo', 'Principal', 'RegisterService', 'CheckCreateTeam', 'GetAllPlayer','TeamUpdate'];

    function CompetingInfoController($stateParams, toaster,SweetAlert,GetMyTeam,TeamRegistrations,EditTeamRegistrations, PersonUpdateInfo, Principal, RegisterService, CheckCreateTeam,GetAllPlayer,TeamUpdate) {
        var vm = this;

        vm.isLogIn = false;
        vm.teamid = "";
        /*团队页面*/
        vm.warn = false;
        vm.submit = submit;

        vm.selectMember = selectMember;
        function selectMember(number,idx) {
            vm.info = idx;
            vm.memberNameColor = number;
        }
        selectMember("队员1", 1);
        /*判断状态*/
        /*检测是不是登录*/
        Principal.identity().then(function (account) {
            if (account === null) {
                RegisterService.open('signin', function success() {
                    $state.reload();
                }, function fail() {

                });
            } else {
                vm.isLogIn = true;
                getMyInfo();
            }
        });

        /*得到小队信息 并根据url判断情况*/
        function getMyInfo() {
            GetMyTeam.get(null, function (response) {
                vm.captain = {
                    school: response.school,
                    teamName: response.teamName,
                    name: response.name,
                    ID: response.personID,
                    schoolId: response.schoolID,
                    phone: response.phone,
                    miID: response.miID
                };
                // console.log(response.message);
                if(response.message==='非队长不能查询'){
                    RegisterService.open('noMatch', function success() {
                        $state.reload();
                    }, function fail() {
                    });
                }else{
                    response.teamPlayers.forEach(function (item,index) {
                    if(item){
                        vm.member[index].name=item.name;
                        vm.member[indec].phone=item.phone;
                        vm.member[index].schoolId=item.Id;
                        vm.member[index].ID=item.ID;
                        vm.member[index].miID=item.miID;
                    }
                });
                    // vm.captainPhone = response.phone.substring(0,3)+"****"+response.phone.substring(7,11);
                    // vm.teamid = response.id;
                    }

            }, function (error) {
            });
        }

        vm.personInfoWarn = {
            name: false,
            ID: false,
            email: false,
            account: false
        };

        vm.captain = {
            teamName: "",
            school:"",
            name: "",
            phone:"",
            ID: "",
            schoolId: "",
            miID:""
        };

        vm.member = [
            {id:1, name: "", phone: "", ID: "", schoolId: "", miID:"",src:"/content/images/join/1.png"},
            {id:2, name: "", phone: "", ID: "", schoolId: "", miID:"",src:"/content/images/join/2.png"},
            {id:3, name: "", phone: "", ID: "", schoolId: "", miID:"",src:"/content/images/join/3.png"},
            {id:4, name: "", phone: "", ID: "", schoolId: "", miID:"",src:"/content/images/join/4.png"}
        ];

        vm.teamInfo = {
            name: "",
            teamName:"",
            phone:"",
            schoolID:"",
            personID:"",
            school:"",
            miID:"",
            teamPlayers: [
                {
                    name: "string",
                    phone: "string",
                    personalId: "string",
                    schoolId: "string",
                    miID: "string"
                }
            ]
        };

        function testInputError() {
            for (var item in vm.captain) {
                if (!vm.captain[item]) {
                    return true;
                }
            }

            for (var i = 0; i < 4; i++) {
                if (!vm.member[i].name || !vm.member[i].phone || !vm.member[i].ID  || !vm.member[i].schoolId || !vm.member[i].miID) {
                    return true;
                }
            }
        }
        GetMyTeam.get({}, function (response) {
            // console.log(response);
            if(response.message!=='非队长不能查询'){
                vm.teamid = response.teamPlayers[0].team.id;
            }
        });
        function submit() {
            vm.teamInfo.name = vm.captain.name;
            vm.teamInfo.teamName = vm.captain.teamName;
            vm.teamInfo.phone = vm.captain.phone;
            vm.teamInfo.school = vm.captain.school;
            vm.teamInfo.personID = vm.captain.ID;
            vm.teamInfo.schoolID = vm.captain.schoolId;
            vm.teamInfo.miID = vm.captain.miID;
            vm.teamInfo.teamPlayers = [];
            if (!testInputError()) {
                vm.warn = false;
                for (var i = 0; i < 4; i++) {
                    var obj = {name: '', schoolId: '', personalId: '', phone: '',miID:''};
                    obj.name = vm.member[i].name;
                    obj.schoolId = vm.member[i].schoolId;
                    obj.personalId = vm.member[i].ID;
                    obj.phone = vm.member[i].phone;
                    obj.miID = vm.member[i].miID;
                    vm.teamInfo.teamPlayers.push(obj);
                }
            }
            EditTeamRegistrations.save({teamid:vm.teamid},vm.teamInfo,function (response) {
                RegisterService.open('isModify', function success() {
                    $state.reload();
                }, function fail() {
                });
            }, function (error) {
            });
        }
        // function teamUpdate() {
        //     for (var i = 0; i < 4; i++) {
        //         var obj = {
        //             mail: vm.member[i].email,
        //             name: vm.member[i].name,
        //             nickName: vm.member[i].account,
        //             personalId: vm.member[i].ID,
        //             phone: vm.member[i].phone,
        //             team: {
        //                 type: "string"
        //             }
        //         };
        //         vm.teamInfo.teamPlayer.push(obj);
        //     }
        //     TeamUpdate.save({teamid:vm.teamid},vm.teamInfo, function (response) {
        //         if (response.message === "修改信息成功") {
        //             var personInfoData = {
        //                 email: vm.captain.email,
        //                 name: vm.captain.name,
        //                 nickname: vm.captain.account,
        //                 personalId: vm.captain.ID
        //             };
        //             PersonUpdateInfo.save(personInfoData, function (response) {
        //                 toaster.pop("success", "", "修改成功");
        //             }, function (error) {
        //
        //             });
        //         }
        //     }, function (error) {
        //         toaster.pop("error", "", "修改失败");
        //     })
        // }
    }
})();
