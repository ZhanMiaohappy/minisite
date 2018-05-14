/**
 * Created by rhd on 2017/7/18.
 */
angular
    .module('bsbmsoneApp')
    .directive('chinaChart', chinaChart);

function chinaChart() {
    var directive = {
        templateUrl: "app/components/charts/china-map/china-chart.html",
        restrict: 'EA',
        replace:true,
        scope: {},
        controller: 'ChinaChartController',
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;
}
