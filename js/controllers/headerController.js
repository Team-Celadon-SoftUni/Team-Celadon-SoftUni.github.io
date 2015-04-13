var barOut = true;
var barLogged = false;
var barAdmin = false;
daisyApp.controller("HeaderController", function ($scope, $rootScope, $location, Func, requester) {

    $scope.barOut = barOut;
    $scope.barLogged = barLogged;
    $scope.barAdmin = barAdmin;
    $scope.username = $rootScope.username;

    $scope.redirect = function (path) {
        Func.redirect(path);
    }
});