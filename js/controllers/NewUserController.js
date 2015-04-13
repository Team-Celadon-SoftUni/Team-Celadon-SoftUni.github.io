daisyApp.controller('NewUserController', function ($scope, $rootScope, Func, requester) {

    $scope.newUser = {
        ConfirmPassword: "Aa#12345",
        Email: "test@abv.bg",
        FullName: "TestTest TestTest",
        Password: "Aa#12345",
        SoftuniId: "121345678",
        Username: "TestTest"
    };
    $scope.register = function (newUser) {
        requester.register(
            newUser,
            function () {
                Func.alert('success', 'Register complete successfully.');
                Func.redirect('home');
            },
            function (error) {
                Func.alert('danger', 'Register failed. Try again.' + error.message);
            }
        );
    }
});