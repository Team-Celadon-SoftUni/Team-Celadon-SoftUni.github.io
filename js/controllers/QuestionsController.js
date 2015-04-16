'use strict';

faqSystemApp.controller("QuestionsController",
    function QuestionsController($scope, $rootScope, $location, requester, $cookieStore) {
        $scope.getAllQuestions = function(){
            requester.getQuestions(
                "",
            function(data){
                console.log(data);
                $scope.questions = data;
            },
            function(error){
                console.log(error);
            })
        };

        $scope.getMyQuestions = function(){
            requester.getUsersQuestions(
                function(data){
                    console.log(data);
                    $scope.questions = data;
                },
                function(error){
                    console.log(error)
                },
                $cookieStore.get("access_token")
            )
        };

        $scope.deleteQuestion = function(id){
            requester.deleteQuestion(
                id,
                function(data){
                    console.log(data);
                },
                function(error){
                    console.log(error);
                },
                $cookieStore.get('access_token')
            )
        }

        $scope.loadAnswers = function(id){
            requester.getQuestionAnswers(
                id,
                function(data){
                    console.log(data);
                    $scope.answers = data;


                    $('.answers-container').css("display", "none");
                    $('#question-' + id + ' .answers-container').css("display", "block");
                },
                function(error){
                    console.log(error);
                }
            )
        }

        $scope.getUser = function(userId, questionId, type){
            requester.getUserById(
                userId,
                function(data){
                    $('#' + type + '-' + questionId + " .user-container .user-span").text(data.Username);
                },
                function(error){
                    console.log(error);
                },
                $cookieStore.get("access_token"))
        }

});