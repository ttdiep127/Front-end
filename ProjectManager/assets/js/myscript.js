$(document).ready(function() {
    $("#menu").find("[id$='child']").fadeOut(0);

    $("#content-header").find("[id$='header']").fadeOut(0);
    //$("#collapse-header #home-header").fadeIn();

    $("#content-body").find("[id$='tab']").fadeOut(0);
    //$("#content-body #tab-home").fadeIn();

});

$("[id^=btn]").click(function() {
    //Show child element of object button 
    var child_id ="#" + $(this).attr('name') + '-child';
    $(child_id).fadeToggle("fast");

    var header_id ='#'+ $(this).attr('name') + "-header";
    

    if ($(header_id).length > 0 ) {
        //Add tab header of object to content-header
        $("#content-header "+header_id).fadeIn();

        //Show content-body of object
        $("#content-body").find("[id$='tab']").hide();

        var tab_id ='#'+ $(this).attr('name') + "-tab";
        $("#content-body "+tab_id).fadeIn();
    }
});

$("#content-header li a").click(function() {

    //Show content-body of object
    $("#content-body").find("[id$='tab']").hide();
    $("#content-body #" + $(this).attr('name') + "-tab").fadeIn();
});