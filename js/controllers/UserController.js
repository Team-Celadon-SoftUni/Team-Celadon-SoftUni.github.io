daisyApp.controller("UserController", function ($scope, $rootScope, $location, Func, requester) {

    $scope.login = function (user) {
        requester.login(
            user,
            function (data) {
                barLogged = true;
                barOut = false;
                sessionStorage.setItem('access_token', data['access_token']);
                sessionStorage.setItem('userName', ['data.userName']);
                $rootScope.username = sessionStorage.getItem('userName');
                Func.alert('success', 'Get Posters Success. Can see it in HOME tab.');
                Func.redirect('home');
            },
            function (error) {
                Func.alert('danger', 'Get Posters failed. Please try again later.' + error.message);
            }
        );
    }
});