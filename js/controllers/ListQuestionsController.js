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
        }

        $scope.loadAnswers = function(id){
            requester.getQuestionAnswers(
                id,
                function(data){
                    console.log(data);
                    $scope.answers = data;
                    $('#question-' + id + ' .answers-container').toggleClass('hidden');
                },
                function(error){
                    console.log(error);
                }
            )
        }
});