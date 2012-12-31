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

/*		USER PANEL INVENTORY		*/

test = new Array(20);

for (var i = 0; i < 20; i++) {
	test[i] = {id: "#"+(i+1), itemNum: 0};
};

function invReset(){
	for (var i = 0; i < 20; i++) {
		switch(test[i].itemNum){
			case 0:
				console.log('blank');
			break;
			case 1:
				console.log('hurray');
				$(test[i].id).append("<div id='bloop' class='testItem'></div>");
				$(function() {
		            $( ".testItem" ).draggable({
		            	snapMode: "inner",
		            	revert: "invalid"
		            });  
		            $( ".item" ).droppable();
   				});
			break;
		}
	}
}


