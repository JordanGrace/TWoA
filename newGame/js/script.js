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

/*
function abc(id){
$(".tab").each(function(index){
	$(this).css("width", 70);
	console.log(index);
});
$(id).css("width", 100);
}*/

function test(percent){
	if(percent > 100){
		$("#hpBar").css("width", 100+"%");
	}
	else{$("#hpBar").css("width", percent+"%");}
	
}