/**
 * Created by BaoChaoying on 08/04/2017.
 */
angular
    .module('bsbmsoneApp')
    .directive('dashboardPushPicture', dashboardPushPicture);

function dashboardPushPicture() {
    var directive = {
        templateUrl: 'app/account/dashboard/util/dashboard-push-picture/dashboard-push-picture.html',
        restrict: 'EA',
        scope: {
        },
        controller: 'DashboardPushPictureController',
        controllerAs: 'vm'
    };
    return directive;
}
