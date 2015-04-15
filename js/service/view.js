faqSystemApp.config(function ($locationProvider, $routeProvider) {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'partials/home.html'
        })
        .when('/posters',
        {
            templateUrl: 'partials/posters.html'
        })
        .when('/register',
        {
            templateUrl: 'partials/register.html'
        })
        .when('/help',
        {
            templateUrl: 'partials/help.html'
        })
        .otherwise(
        {
            redirectTo:'/home'
        }
    );
});
