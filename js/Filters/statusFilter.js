'use strict';

faqSystemApp.filter('statusFilter',function(){
    return function(input, status, id, title){
        var element = $('#question-' + id + " h4");
        switch (status){
            case 1:
                element.css("background", "green");
                break;
            case 2:
                element.css("background", "red");
                break;
            case 3:
                element.css("background", "orange");
                break;
            case 4:
                element.css("background", "red");
                break;
        }

        return title;
    }
});