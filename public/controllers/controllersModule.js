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

        var getDataPromise = dataManagement.getCarriersDetails($routeParams.carrierName);
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
                $scope.carrierName = data.data.data.short_name;
                $scope.flightDtls = data.data.data.flights;
            },
            function (data, status) {
                $scope.errorMessage = status;
            }
        );
    }).controller('flightDetailsCtrl', function($scope, dataManagement, $routeParams) {
        var getDataPromise = dataManagement.getFlightDetails(
                                    $routeParams.carrierName,
                                    $routeParams.flightFileName);

        getDataPromise.then(
            function (data) {
                var data = data.data.data;
                $scope.flightName = data.flight_name;
                $scope.flightDtls = data.flightDtls;
            },
            function (data, status) {
                $scope.errorMessage = status;
            }
        );
    });

