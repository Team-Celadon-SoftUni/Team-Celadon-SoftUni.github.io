faqSystemApp.run(function ($cookieStore) {
    if ($cookieStore.get('access_token')) {
        barOut = false;
        barLogged = true;
        barAdmin = false;

        if($cookieStore.get('isAdmin')){
            barOut = false;
            barLogged = false;
            barAdmin = true;
        }
    }
    else {
        barOut = true;
        barLogged = false;
        barAdmin = false;
    }
});