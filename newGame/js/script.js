/*		USER PANEL TABS		*/
$('#itemTab').click(function(){tabSelect("#items");});
$('#statTab').click(function(){tabSelect("#stats");});
$('#optionTab').click(function(){tabSelect("#options");});

function tabSelect(id){
	$("#items").css("display","none");
	$("#stats").css("display","none");
	$("#options").css("display","none");

	$(id).css("display","block");
}