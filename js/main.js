
$(function(){

$(window).resize(function(){
	if ($(window).width() <=768){	
		// do something here
        $(".ulmenu").hide();
        $("#showmenu").show();
	}
    else{
        $(".ulmenu").show();
        $("#showmenu").hide();
    }
});
    $("#showmenu").on('click', function(){
        $(".ulmenu").stop().toggle(400);
    })
})
