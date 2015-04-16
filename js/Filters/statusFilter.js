'use strict';

faqSystemApp.filter('statusFilter',function(){
    return function(input, status, id, title){
        var element = $('#question-' + id + " .status-panel");
        switch (status){
            case 1:
                element.removeClass("panel-default");
                element.addClass("panel-success");
                //element.css("background", "green");
                break;
            case 2:
                element.removeClass("panel-default");
                element.addClass("panel-danger");
                //element.css("background", "red");
                break;
            case 3:
                element.removeClass("panel-default");
                element.addClass("panel-warning");
                //element.css("background", "orange");
                break;
            case 4:
                element.removeClass("panel-default");
                element.addClass("panel-danger");
                //element.css("background", "red");
                break;
        }

        return title;
    }
});