'use strict';

faqSystemApp.controller("ListQuestionsController",
    function ListQuestionsController($scope, $rootScope, $location, requester, Func) {
        console.log("init");
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
});