/**
 * Created by rhd on 2017/7/18.
 */
(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('BarChartController', BarChartController);

    BarChartController.$inject = ['GetCityNumber'];

    function BarChartController(GetCityNumber) {
        var vm = this;

        GetCityNumber.get({},function (response) {
            vm.cityNumber = response;
            createChart();
        },function (error) {
            //console.log(error);
        });

        function createChart() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('bar-chart'));

            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '各个城市参赛人数'
                },
                color: ['#3398DB'],
                tooltip: {},
                legend: {
                    data:['人数']
                },
                xAxis: {
                    data: ["大连","北京","沈阳","天津","武汉","长沙","石家庄","太原","青岛","上海","南京","杭州","西安","成都","重庆","贵阳","广州","深圳","厦门","福州"]
                },
                yAxis: {},
                /*series: [{
                    name: '人数',
                    type: 'bar',
                    data: vm.cityNumber
                }]*/
                series: [{
                    name: '人数',
                    type: 'bar',
                    data: vm.cityNumber=[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
                                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

        }
    }
})();
