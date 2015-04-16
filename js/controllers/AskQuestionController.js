'use strict';

faqSystemApp.controller("AskQuestionController",
    function AskQuestionController($scope, requester, $cookieStore, $location) {
        $scope.postNewQuestion = function(questionInfo){
            console.log(questionInfo);
            requester.postNewQuestion(
                questionInfo,
                function(data){
                    $location.path("#/");
                },
                function(error){
                    console.log(error);
                },
                $cookieStore.get("access_token"))
        }
    });