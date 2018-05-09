
	
	$(document).ready(function(){
		$(".opener").attr("title","Click to Expand");
		$(".opener").click(function(){
			$(this).find(".glyphicon-plus").toggleClass("glyphicon-minus");
			$(this).next().toggle("medium");
			if($(this).attr("title") == "Click to Expand")
			$(this).attr("title","Click to Reduce")
		else
		$(this).attr("title","Click to Expand")
		})
		
		
	})
	
	$(document).ready(function(){
    $("button").click(function(){
        $("a[href='about.htm']").hide();
    });
});
	
	