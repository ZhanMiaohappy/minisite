/**
 * Created by rhd on 2017/7/18.
 */
angular
    .module('bsbmsoneApp')
    .directive('pieChart', pieChart);

function pieChart() {
    var directive = {
        templateUrl: "app/components/charts/pie/pie-chart.html",
        restrict: 'EA',
        replace:true,
        scope: {},
        controller: 'PieChartController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}
