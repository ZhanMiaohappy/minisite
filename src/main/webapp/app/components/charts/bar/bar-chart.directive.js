/**
 * Created by rhd on 2017/7/18.
 */
angular
    .module('bsbmsoneApp')
    .directive('barChart', barChart);

function barChart() {
    var directive = {
        templateUrl: "app/components/charts/bar/bar-chart.html",
        restrict: 'EA',
        replace:true,
        scope: {},
        controller: 'BarChartController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}
