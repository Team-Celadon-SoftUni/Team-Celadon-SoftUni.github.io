var barOut = true;
var barLogged = false;
var barAdmin = false;

faqSystemApp.controller("HeaderController", function ($scope, $rootScope, $location, Func) {

    $scope.barOut = barOut;
    $scope.barLogged = barLogged;
    $scope.barAdmin = barAdmin;
    if($rootScope.username){
        $scope.username = $rootScope.username;
    }

    $scope.redirect = function (path) {
        Func.redirect(path);
    }
});