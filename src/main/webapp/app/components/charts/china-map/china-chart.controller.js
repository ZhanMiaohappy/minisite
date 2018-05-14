/**
 * Created by rhd on 2017/7/18.
 */
(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('ChinaChartController', ChinaChartController);

    ChinaChartController.$inject = ['GetCityNumber'];

    function ChinaChartController(GetCityNumber) {
        var vm = this;

        GetCityNumber.get({},function (response) {
            vm.cityNumber = response;
            createChart();
        },function (error) {
            //console.log(error);
        });

        function createChart() {
            /*var data1 = [
           {name: "北京", value: [116.46,39.92,'29所高校']}
       ];

       var data2 = [
           {name: "山东", value: [118.52,36.09,'12所高校']},
           {name: "山西", value: [112.51,37.86,'18所高校']},
           {name: "河北", value: [114.48,38.03,'12所高校']},
           {name: "上海", value: [121.48,31.22,'12所高校']},
           {name: "陕西", value: [109.50,35.86,'17所高校']},
           {name: "天津", value: [117.20,39.09,'12所高校']}
       ];

       var data3 = [
           {name: "黑龙江", value: [126.63,45.75,'12所高校']},
           {name: "吉林", value: [126.55,43.84,'14所高校']},
           {name: "江西", value: [115.67,27.75,'15所高校']},
           {name: "湖北", value: [112.41,31.20,'18所高校']},
           {name: "内蒙古", value: [111.77,40.82,'13所高校']},
           {name: "浙江", value: [120.16,30.27,'18所高校']},
           {name: "河南", value: [113.63,34.75,'19所高校']}
       ];

       var data4 = [
           {name: "江苏", value: [118.76,32.06,'16所高校']},
           {name: "安徽", value: [117.29,31.86,'10所高校']},
           {name: "湖南", value: [111.72,27.69,'15所高校']},
           {name: "广东", value: [113.23,23.16,'20所高校']},
           {name: "四川", value: [104.08,30.65,'10所高校']},
           {name: "重庆", value: [106.54,29.59,'13所高校']}
       ];

       var data5 = [
           {name: "贵州", value: [106.71,26.60,'15所高校']},
           {name: "新疆", value: [87.63,43.79,'17所高校']},
           {name: "福建", value: [119.30,26.10,'12所高校']}
       ];*/
            var data1 = [
                {name: "大连", value: [121.44,39.01,vm.cityNumber[0]+'人']},
                {name: "北京", value: [116.02,40.13,vm.cityNumber[1]+'人']},
                {name: "沈阳", value: [123.25,41.48,vm.cityNumber[2]+'人']},
                {name: "天津", value: [117.21,39.24,vm.cityNumber[3]+'人']}
            ];

            var data2 = [
                {name: "武汉", value: [114.31,30.59,vm.cityNumber[4]+'人']},
                {name: "长沙", value: [112.93,28.22,vm.cityNumber[5]+'人']},
                {name: "石家庄", value: [114.51,38.04,vm.cityNumber[6]+'人']},
                {name: "太原", value: [112.55,37.87,vm.cityNumber[7]+'人']}
            ];

            var data3 = [
                {name: "青岛", value: [120.38,36.06,vm.cityNumber[8]+'人']},
                {name: "上海", value: [121.47,31.23,vm.cityNumber[9]+'人']},
                {name: "南京", value: [118.79,32.05,vm.cityNumber[10]+'人']},
                {name: "杭州", value: [120.15,30.27,vm.cityNumber[11]+'人']}
            ];

            var data4 = [
                {name: "西安", value: [108.93,34.34,vm.cityNumber[12]+'人']},
                {name: "成都", value: [104.06,30.57,vm.cityNumber[13]+'人']},
                {name: "重庆", value: [106.55,29.56,vm.cityNumber[14]+'人']},
                {name: "贵阳", value: [106.63,26.64,vm.cityNumber[15]+'人']}
            ];

            var data5 = [
                {name: "广州", value: [113.26,23.12,vm.cityNumber[16]+'人']},
                {name: "深圳", value: [114.05,22.54,vm.cityNumber[17]+'人']},
                {name: "厦门", value: [118.08,24.47,vm.cityNumber[18]+'人']},
                {name: "福州", value: [119.29,26.07,vm.cityNumber[19]+'人']}
            ];

            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.name + ' : ' + params.value[2];
                    }
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: data1,
                        symbol: 'pin',
                        symbolSize: 20,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            normal: {
                                color: '#399be6'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 1000;
                        }
                    },
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: data2,
                        symbol: 'pin',
                        symbolSize: 20,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            normal: {
                                color: '#399be6'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 2500;
                        }
                    },
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: data3,
                        symbol: 'pin',
                        symbolSize: 20,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            normal: {
                                color: '#399be6'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 4000;
                        }
                    },
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: data4,
                        symbol: 'pin',
                        symbolSize: 20,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            normal: {
                                color: '#399be6'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 5500;
                        }
                    },
                    {
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: data5,
                        symbol: 'pin',
                        symbolSize: 20,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            },
                            normal: {
                                color: '#399be6'
                            }
                        },
                        animationDelay: function (idx) {
                            return idx * 10 + 7000;
                        }
                    }
                ],
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                }
            };

            var myChart = echarts.init(document.getElementById('china-chart'));
            myChart.setOption(option);
            window.onresize = myChart.resize;
        }

    }
})();
