/**
 * Created by rhd on 2017/7/18.
 */
(function () {
    'use strict';

    angular
        .module('bsbmsoneApp')
        .controller('PieChartController', PieChartController);

    PieChartController.$inject = ['GetCityNumber'];

    function PieChartController(GetCityNumber) {
        var vm = this;

        GetCityNumber.get({},function (response) {
            vm.cityNumber = response;
            createChart();
        },function (error) {
            //console.log(error);
        });

        function createChart() {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('pie-chart'));

            // 指定图表的配置项和数据
          var option = {
              title : {
                  text: '某站点用户访问来源',
                  x:'center'
              },
              tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: ["大连","北京","沈阳","天津","武汉","长沙","石家庄","太原","青岛","上海","南京","杭州","西安","成都","重庆","贵阳","广州","深圳","厦门","福州"]
              },
              series : [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius : '55%',
                      center: ['50%', '60%'],
                      data: vm.cityNumber=[
                          {value:335, name:'大连'},
                          {value:310, name:'北京'},
                          {value:234, name:'沈阳'},
                          {value:135, name:'天津'},
                          {value:548, name:'武汉'},
                          {value:335, name:'长沙'},
                          {value:310, name:'石家庄'},
                          {value:234, name:'太原'},
                          {value:135, name:'青岛'},
                          {value:158, name:'上海'},
                          {value:335, name:'南京'},
                          {value:310, name:'杭州'},
                          {value:234, name:'西安'},
                          {value:135, name:'成都'},
                          {value:148, name:'重庆'},
                          {value:335, name:'贵阳'},
                          {value:310, name:'广州'},
                          {value:234, name:'深圳'},
                          {value:135, name:'厦门'},
                          {value:154, name:'福州'}
                      ],
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      }
                  }
              ]
          };


            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);

        }
    }
})();
