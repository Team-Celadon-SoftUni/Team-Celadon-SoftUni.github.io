faqSystemApp.config(function ($locationProvider, $routeProvider) {
    $routeProvider
        .when('/home',
        {
            templateUrl: 'partials/home.html'
        })
        .when('/register',
        {
            templateUrl: 'partials/register.html'
        })
        .when('/askquestion',
        {
            templateUrl: 'partials/askquestion.html'
        })
        .when('/myquestions',
        {
            templateUrl: 'partials/myquestions.html'
        })
        .when('/help',
        {
            templateUrl: 'partials/help.html'
        })
        .when('/feedback',
        {
            templateUrl: 'partials/feedback.html'
        })
        .otherwise(
        {
            redirectTo:'/home'
        }
    );
});
