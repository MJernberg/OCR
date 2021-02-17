$(document).ready(function(){
    // if($("#known").is(":checked")){
    //     $("#sprak").removeClass("w3-hide");
    // } else {
    //     $("#sprak").addClass("w3-hide");
    // }
    $("#known").change(function(){
        if($(this).is(":checked")){
            $("#sprak").removeClass("w3-hide");
        } else {
            $("#sprak").addClass("w3-hide");
        }
    });

});