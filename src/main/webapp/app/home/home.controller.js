(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$state','GetMyTeam','$anchorScroll', 'RegisterService', 'CheckCityMember', 'CheckCreateTeam', 'GetArticle', 'GetVideoByTag', 'VideoGetAll', 'GetAllGroup'];

    function HomeController($state, GetMyTeam, $anchorScroll,RegisterService, CheckCityMember, CheckCreateTeam, GetArticle, GetVideoByTag, VideoGetAll, GetAllGroup) {
        var vm = this;
        $anchorScroll();//回到页面顶部
        vm.homeArticle = [];
        vm.personRegister = personRegister;
        vm.teamRegister = teamRegister;
        // vm.currentBracketTag = 'bo1-AB';
        // vm.currentFinalTag = 'bo3-A';
        vm.selectBracketTag = selectBracketTag;
        vm.toOneseasonColor = false;
        vm.toThreeseasonColor = false;
        vm.toFinalseasonColor = false;
        vm.toFinalGlobalColor = true;
        vm.toSeasonOneShow = false;
        vm.toLostOne = toLostOne;
        vm.toLostTwo = toLostTwo;
        vm.toFinal = toFinal;
        vm.toFinalGlobal = toFinalGlobal;
        vm.selectFinalTag = selectFinalTag;
        vm.getPictureByTag = getPictureByTag;
        // vm.seasonColor = true;
        vm.toOneShow = true;
        vm.toThreeShow = false;
        vm.toFinalShow = false;
        vm.toGlobalShow = true;
        selectBracketTag('bo1-A')
        vm.groupList=[{
            'number':'A'
        },{
            'number':'B'
        },{
            'number':'C'
        },{
            'number':'D'
        },{
            'number':'E'
        },{
            'number':'F'
        },{
            'number':'G'
        },{
            'number':'H'
        },{
            'number':'I'
        },{
            'number':'J'
        },{
            'number':'K'
        },{
            'number':'L'
        },{
            'number':'M'
        },{
            'number':'N'
        },{
            'number':'O'
        },{
            'number':'P'
        }];
        vm.imgSrc = '';
        vm.isClick =false;
        GetMyTeam.get(null, function (response) {
            if(response.message!=="非队长不能查询"){
                vm.isClick = true;
            }
            else {
                vm.isClick =false;
            }
        });
        vm.getVideoAll = getVideoAll;
        getFinal();

        function personRegister() {
            getMyPersonInfo();
        }

        function teamRegister() {
            getMyTeamInfo();
        }

        function toLostOne(group) {
            vm.toOneseasonColor = true;
            vm.toThreeseasonColor = false;
            vm.toFinalseasonColor = false;
            vm.toFinalGlobalColor = false;
            vm.toOneShow = true;
            vm.toThreeShow = false;
            vm.toFinalShow = false;
            vm.currentBracketTag = 'bo1-A';
            getPictureByTag(group);
            selectBracketTag('bo1-A')
        }

        function selectFinalTag(group) {
            vm.currentFinalTag = group;
            getPictureByTag(group);
        }

        function selectBracketTag(group) {
            vm.currentBracketTag = group;
            getPictureByTag(group);
            vm.imgSrc = '12'
        }

        function toLostTwo(group) {
            vm.toOneseasonColor = false;
            vm.toThreeseasonColor = true;
            vm.toFinalseasonColor = false;
            vm.toFinalGlobalColor = false;
            vm.toOneShow = false;
            vm.toThreeShow = true;
            vm.toFinalShow = false;
            vm.toGlobalShow = false;
            vm.currentFinalTag = 'bo3-A';
            getPictureByTag(group);
        }

        function toFinal(group) {
            vm.toOneseasonColor = false;
            vm.toThreeseasonColor = false;
            vm.toFinalseasonColor = true;
            vm.toFinalGlobalColor = false;
            vm.toOneShow = false;
            vm.toThreeShow = false;
            vm.toFinalShow = true;
            vm.toGlobalShow = false;
            vm.currentFinalTag = 'bo3-A';
            if (group !== 'final') {
                getPictureByTag(group);
            }
        }

        function toFinalGlobal(group) {
            vm.toOneseasonColor = false;
            vm.toThreeseasonColor = false;
            vm.toFinalseasonColor = false;
            vm.toFinalGlobalColor = true;
            vm.toOneShow = false;
            vm.toThreeShow = false;
            vm.toFinalShow = false;
            vm.toGlobalShow = true;
            vm.currentFinalTag = 'bo3-A';
            if (group !== 'final') {
                getPictureByTag(group);
            }
        }

        /*得到小队信息 并根据url判断情况*/
        function getMyPersonInfo() {
            CheckCityMember.save({}, function (response) {
                if (response.message === "请登录") {
                    signin();
                } else {
                    $state.go("competingInfo", {resigterState: 'person'});
                }
            }, function (error) {
                $state.go("person-register");
            });
        }

        function getFinal() {
            GetAllGroup.query({
                page: 0,
                size: 200,
                sort: ["id,asc"]
            }, function (response) {
                vm.final = response.content.filter(function (item) {
                    return item.tag === 'final';
                });
                vm.global = response.content.filter(function (item) {
                    return item.tag === 'global';
                });

            }, function (err) {
                //console.log(err);
            })
        }

        function getMyTeamInfo() {
            CheckCreateTeam.save({}, function (response) {
                if (response.message === "请登录") {
                    signin();
                } else {
                    $state.go("competingInfo", {resigterState: 'team'});
                }
            }, function (error) {
                $state.go("team-register");
            });
        }

        function signin() {
            RegisterService.open('signin', function success() {
                $state.reload();
            }, function fail() {

            });
        }

        // getHomePage();

        /*得到所有首页新闻id*/
        // function getHomePage() {
        //     GetHomePage.get(function (response) {
        //         console.log(response);
        //         if (response.article_config) {
        //             response.article_config.split("&").forEach(function (item, index) {
        //                 getArticleById(item, index);
        //             })
        //         }
        //     }, function (err) {
        //
        //     })
        // }

        /*根据id获得新闻*/
        // function getArticleById(articleId, index) {
        //     GetArticleById.get({id: articleId}, function (response) {
        //         vm.homeArticle[index] = response;
        //     }, function (err) {
        //
        //     })
        // }

            GetArticle.get({
                page: vm.page-1,
                size: vm.pageSize,
                sort: ['id,asc']
            }, onSuccess, onError);

            function onSuccess(response) {
                vm.articles = response.content.slice(0,4);
                vm.totalPages = response.totalPages;
            }

            function onError(error) {
                //console.log('失败了');
            }


        VideoGetAll.query({page: vm.page - 1, size: 9, sort: 'asc'}, {}, function onSuccess(response) {
            //console.log(response);
            vm.videoAll = response.content.slice(0, 4);
            vm.isFirst = response.first;
            vm.isLast = response.last;
        });

        function getVideoAll() {
            VideoGetAll.query({page: vm.page - 1, size: 9, sort: 'asc'}, {}, function onSuccess(response) {
                // console.log(response);
                vm.videoAll = response.content.slice(0, 8);
                vm.isFirst = response.first;
                vm.isLast = response.last;
                // console.log(vm.currentVideoTag);
            });
        }

        /*默认*/
        getPictureByTag('bo3-A');

        /*根据tag获得不同小组的对阵图*/
        function getPictureByTag(group) {
            GetVideoByTag.get({
                tag: group,
                page: 0,
                size: 1,
                sort: ["id,desc"]
            }, function (res) {
                // vm.pictureUrl = res[0].thumbnailUrl;
            }, function (error) {
            })
        }

    }
})();
