/**
 * Created by rhd on 2017/7/18.
 */
angular
    .module('bsbmsoneApp')
    .directive('lineChart', lineChart);

function lineChart() {
    var directive = {
        templateUrl: "app/components/charts/line/line-chart.html",
        restrict: 'EA',
        replace:true,
        scope: {},
        controller: 'LineChartController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}
