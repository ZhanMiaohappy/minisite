/**
 * Created by BaoChaoying on 08/04/2017.
 */
angular
    .module('bsbmsoneApp')
    .directive('dashboardPushFinal', dashboardPushFinal);

function dashboardPushFinal() {
    var directive = {
        templateUrl: 'app/account/dashboard/util/dashboard-push-final/dashboard-push-final.html',
        restrict: 'EA',
        scope: {
        },
        controller: 'DashboardPushFinalController',
        controllerAs: 'vm'
    };
    return directive;
}
