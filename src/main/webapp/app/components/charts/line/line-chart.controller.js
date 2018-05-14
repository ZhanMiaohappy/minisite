/**
 * Created by rhd on 2017/7/18.
 */
(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('LineChartController', LineChartController);

    LineChartController.$inject = ['GetCityNumber'];

    function LineChartController(GetCityNumber) {
        var vm = this;

        GetCityNumber.get({},function (response) {
            vm.cityNumber = response;
            createChart();
        },function (error) {
            //console.log(error);
        });

        function createChart() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('line-chart'));

            // 指定图表的配置项和数据
          var option = {
                         title: {
                             text: '堆叠区域图'
                         },
                         tooltip : {
                             trigger: 'axis',
                             axisPointer: {
                                 type: 'cross',
                                 label: {
                                     backgroundColor: '#6a7985'
                                 }
                             }
                         },
                          legend: {
                                 data:['报名人数','浏览人数']
                             },
                         toolbox: {
                             feature: {
                                 saveAsImage: {}
                             }
                         },
                         grid: {
                             left: '3%',
                             right: '4%',
                             bottom: '3%',
                             containLabel: true
                         },
                         xAxis : [
                             {
                                 type : 'category',
                                 boundaryGap : false,
                                 data: ["大连","北京","沈阳","天津","武汉","长沙","石家庄","太原","青岛","上海","南京","杭州","西安","成都","重庆","贵阳","广州","深圳","厦门","福州"]
                             }
                         ],
                         yAxis : [
                             {
                                 type : 'value'
                             }
                         ],
                         series : [
                             {
                                 name:'报名人数',
                                 type:'line',
                                 stack: '总量',
                                 areaStyle: {normal: {}},
                                 data: vm.cityNumber=[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230,120, 132, 101, 134, 90, 230, 210]
                             },
                             {
                                 name:'浏览人数',
                                 type:'line',
                                 stack: '总量',
                                 areaStyle: {normal: {}},
                                 data:vm.cityNumber=[220, 182, 191, 234, 290, 330, 310,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
                                                                     },
                         ]
                     };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

        }
    }
})();
