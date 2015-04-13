faqSystemApp.factory('requester', function requester($http) {
    var content = 'application/json';
    var rootURL = 'http://faqsystem.apphb.com/';
    var auth = 'Bearer ';

    function request(method, path, data, success, error, token, params) {
        console.log(rootURL + path);
        console.log(data);

        $http({
                method: method,
                //headers: {
                //    "Authorization": auth + token
                //},
                data: JSON.stringify(data),
                //content: content,
                //params: params,
                url: rootURL + path
            }
        )
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            }
        );
    }

    function register(data, success, error) {
        request("POST", "api/Account/Register", data, success, error);
    }

    function login(data, success, error) {
        data['grant_type'] = 'password';
        request("POST", "Token", data, success, error);
    }

    function addPoster(data, success, error) {

        request("POST", "classes/Poster", data, success, error);
    }

    function getPosters(query, success, error) {
        request("GET", "classes/Poster", null, success, error, query);
    }

    function getQuestions(query, success, error){
        request("GET", "api/Questions", null, success, error, "", query)
    }

    return {
        register: register,
        login: login,
        addPoster: addPoster,
        getPosters: getPosters,
        getQuestions: getQuestions
    }
});