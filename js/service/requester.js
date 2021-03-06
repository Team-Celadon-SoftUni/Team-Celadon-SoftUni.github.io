faqSystemApp.factory('requester', function requester($http) {
    var content = 'application/json';
    var contentRaw = 'application/raw';
    var rootURL = 'http://faqsystem.apphb.com/';
    var auth = 'Bearer ';

    function request(method, path, data, success, error, token, params) {
        console.log(rootURL + path);
        //console.log(data);

        $http({
                method: method,

                data: JSON.stringify(data),
                headers:{
                    "Authorization": "Bearer " + token
                },
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
        data = 'Username=' + data['Username'] + '&Password=' + data['Password'] + '&grant_type=password';
        console.log(data);

        $http({
                method: "POST",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: data,
                url: rootURL + "Token"
            }
        )
            .success(function (data, status, headers, config) {
                success(data, status, headers(), config);
            })
            .error(function (data, status, headers, config) {
                error(data, status, headers(), config);
            }
        );

        //request("POST", "Token", data, success, error);
    }

    function addPoster(data, success, error) {

        request("POST", "classes/Poster", data, success, error);
    }

    function getPosters(query, success, error) {
        request("GET", "classes/Poster", null, success, error, query);
    }

    function getQuestions(query, success, error) {
        request("GET", "api/Questions", null, success, error, "", query)
    }

    function getUsersQuestions(success, error, token){
        request("GET", "api/user/Question", null, success, error, token, null)
    }

    function deleteQuestion(id, success, error, token){
        request("DELETE", "api/user/question?id=" + id, null, success, error, token, null)
    }

    function getQuestionAnswers(id, success, error){
        request("GET", "api/answer/question?questionid=" + id, null, success, error, "", null)
    }

    function getUserById(id, success, error, token){
        request("GET", "api/user/" + id, null, success, error, token, null)
    }

    function postNewQuestion(title, success, error, token){
        request("POST", "api/user/question", title, success, error, token, null)
    }

    function postNewAnswer(questionId, text, success, error, token){
        request("POST", "api/user/answer?questionid=" + questionId, text, success, error, token, null)
    }

    return {
        register: register,
        login: login,
        addPoster: addPoster,
        getPosters: getPosters,
        getQuestions: getQuestions,
        getQuestionAnswers: getQuestionAnswers,
        getUserById: getUserById,
        postNewQuestion: postNewQuestion,
        getUsersQuestions: getUsersQuestions,
        deleteQuestion: deleteQuestion,
        postNewQuestion: postNewAnswer
    }
});