'use strict';

faqSystemApp.controller("ListQuestionsController",
    function ListQuestionsController($scope, $rootScope, $location, requester, Func) {
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
});