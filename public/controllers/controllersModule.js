/**
 * Created by viveksh2 on 8/29/15.
 */
angular.module('controllersModule', ['servicesModule'])
    .controller('carriersCtrl', function ($scope, dataManagement) {
        var getDataPromise = dataManagement.getCarriers();
/*
        getDataPromise.success(function (data) {
            $scope.carriers = data.data;
        });

        getDataPromise.error(function (data, status) {
            $scope.errorMessage = status;
        });
*/
        getDataPromise.then(
            // success callback
            function (data) {
                $scope.carriers = data.data.data;
            },
            // error callback
            function (data, status) {
                $scope.errorMessage = status;
            });
    }).controller('carriersDetailsCtrl', function ($scope, dataManagement, $routeParams) {

        var getDataPromise = dataManagement.getCarriersDetails($routeParams.flightId);
/*
        getDataPromise.success(function (data) {
            $scope.flightDtls = data.data.flights;
        });

        getDataPromise.error(function (data, status) {
            $scope.errorMessage = status;
        });
*/
        getDataPromise.then(
            function (data) {
                $scope.carrier = data.data.data.short_name;
                $scope.flightDtls = data.data.data.flights;
            },
            function (data, status) {
                $scope.errorMessage = status;
            }
        );
    });

