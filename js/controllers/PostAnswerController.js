'use strict';

faqSystemApp.controller("PostAnswerController",
    function PostAnswerController($scope, requester, $cookieStore, $location, $rootScope) {
        $scope.postNewAnswer = function(answerInfo){
            console.log(answerInfo);
            requester.postNewQuestion(
                $rootScope.questionId,
                answerInfo,
                function(data){
                    $location.path("#/");
                    $rootScope.questionId = undefined;
                },
                function(error){
                    console.log(error);
                },
                $cookieStore.get("access_token"))
        }
    });