(function() {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('JoinController', JoinController);

    JoinController.$inject = ['$state','$scope','TeamRegister','GetMyTeam', 'toaster','Principal','RegisterService','TeamRegistrations','AccountCurrent','PersonUpdateInfo'];

    function JoinController($state,$scope,TeamRegister,GetMyTeam, toaster,Principal,RegisterService,TeamRegistrations,AccountCurrent,PersonUpdateInfo) {
        var vm = this;
        vm.selectMember = selectMember;
        vm.isLogIn = false;
        vm.warn = false;
        vm.disabled = false;
        vm.submit = submit;

        function selectMember(number,idx) {
            vm.info = idx;
            vm.memberNameColor = number;
        }
        selectMember("队员1", 1);
        vm.captain = {
            teamName: "",
            school:"",
            name: "",
            phone:"",
            ID: "",
            schoolId: "",
            miID:""
        };


        document.body.scrollTop = document.documentElement.scrollTop = 0;
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
            school:"",
            personID:"",
            schoolID:"",
            miID:"",
            teamPlayers: [
                {
                    name: "string",
                    phone: "string",
                    personalId: "string",
                    schoolId: "string",
                    miID:"string"
                }
            ]
        };
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

        /*检测是不是登录*/
        Principal.identity().then(function (account) {
            if (account === null) {
                RegisterService.open('signin', function success() {
                    $state.reload();
                }, function fail() {

                });
            } else {
                vm.isLogIn = true;
                $state.go("competingInfo");
                getPersonInfo();
                getMyInfo();
            }
        });

        /*得到手机号*/
        function getPersonInfo() {
            AccountCurrent.get(function (response) {
                vm.personPhone=response.phone.substring(0,3)+"****"+response.phone.substring(7,11);
            }, function (res) {

            });
        }

        function testInputError() {
            for (var item in vm.captain) {
                if (!vm.captain[item]) {
                    return true;
                }
            }

            for (var i = 0; i < 4; i++) {
                if (!vm.member[i].name || !vm.member[i].phone || !vm.member[i].ID || !vm.member[i].schoolId || !vm.member[i].miID) {
                    return true;
                }
            }
        }
        // function getMyInfo() {
        //     GetMyTeam.get(null,function (response) {
        //         vm.captain={
        //             school:response.school,
        //             teamName:response.teamName,
        //             name:response.name,
        //             ID:response.personID,
        //             schoolId:response.schoolID,
        //             phone:response.phone,
        //             miID:response.miID
        //         };
        //         console.log("response.message");
        //         if (response.message==="非队长不能查询"){
        //             RegisterService.open('noMatch',function success(){
        //                 $state.reload();
        //             },function fail() {
        //
        //             });
        //         }else{
        //             response.teamPlayers.forEach(function(item,index){
        //                 if(item){
        //                     vm.member[index].name=item.name;
        //                     vm.member[indec].phone=item.phone;
        //                     vm.member[index].schoolId=item.Id;
        //                     vm.member[index].ID=item.ID;
        //                     vm.member[index].miID=item.miID;
        //                 }
        //             });
        //         }
        //     },function error(){
        //     });
        // }

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
                    var obj = {name:'',schoolId:'',personalId:'',phone:'',miID:''};
                    obj.name=vm.member[i].name;
                    obj.schoolId=vm.member[i].schoolId;
                    obj.personalId=vm.member[i].ID;
                    obj.phone=vm.member[i].phone;
                    obj.miID=vm.member[i].miID;
                    vm.teamInfo.teamPlayers.push(obj);
                    // console.log(vm.teamInfo);
                }
                TeamRegistrations.save(null,vm.teamInfo, function (response) {
                    RegisterService.open('isSuccess', function success() {
                        $state.reload();
                    }, function fail() {
                    });
                }, function (error) {
                })
            } else {
                vm.warn = true;
            }
        }

        // function PersonUpdateInfo() {
        //     var personInfoData = {
        //         name: vm.captain.name,
        //         nickname: vm.captain.account,
        //         personalId: vm.captain.ID
        //     };
        //     PersonUpdateInfo.save(personInfoData, function (response) {
        //         toaster.pop("success", "", "小队报名成功");
        //         vm.disabled = true;
        //         $state.go("competingInfo");
        //     }, function (error) {
        //          console.log("出错！！！！");
        //     })
        // }
    }
})();

