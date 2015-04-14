faqSystemApp.controller("UserController", function ($scope, $rootScope, $modal, $cookieStore, Func, requester) {

    $scope.login = function (user) {
        requester.login(
            user,
            function (data) {
                $scope.barLogged = true;
                $scope.barOut = false;
                $scope.barAdmin = false;

                $cookieStore.put('access_token', data['access_token']);
                $cookieStore.put('userName', data.userName);
                $scope.username = $cookieStore.get('userName');
                Func.alert('success', 'Get Posters Success. Can see it in HOME tab.');
                Func.redirect('home');
            },
            function (error) {
                Func.alert('danger', 'Get Posters failed. Please try again later.');
            }
        );
    }

    $scope.modalSeeAnswers = function (selectedUser) {
        var modalInstance = $modal.open({
            templateUrl: 'partials/modalSeeAnswers.html',
            controller: 'modalSeeAnswers',
            size: 'lg',
            resolve: {
                ad: function () {
                    return selectedUser;
                }
            }
        });
    };
});