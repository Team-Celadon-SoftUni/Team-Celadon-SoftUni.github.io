faqSystemApp.run(function ($cookieStore, $rootScope) {
    if ($cookieStore.get('access_token')) {
        barOut = false;
        barLogged = true;
        barAdmin = false;
        $rootScope.username = $cookieStore.get('userName');
    }
    else {
        barOut = true;
        barLogged = false;
        barAdmin = false;
    }
});