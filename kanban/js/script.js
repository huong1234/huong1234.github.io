var app={ //tao object app
	newJob :function(e, type, input){
		var jobName  =$(input).val();
		var event = window.event|| e; 
		if (event.keyCode ==13 && jobName.trim()!=''){ //chon su kien an nut Enter
			this.addJobToList(type,jobName);
			$(input).val('');
		}

	},

addJobToList: function(type, jobName){
		console.log("da vao them cv moi");
		var item='<a href="#!" class="collection-item">' + jobName +
		'<span class="badge" onclick="app.deleteJob(this)"><i class="tiny material-icons">delete </i></span></a>';

		$('#'+type).append(item);
	}, //ctrl + alt + del to format code
	deleteJob:function(span){
		var modal= $('#modal1');
		modal.openModal();
		var item= $(span).parent();
		$('#btn-delete').on('click', function(){		
			item.remove();
			modal.closeModal();
		});
		
	}
};
$( function() {
	$( ".sorted-list" ).sortable({
		connectWith: ".sorted-list",
    	placeholder:"ui-state-highlight", //tao the div de giu cho khi keo tha
    			start:function(event,ui){
    				//add style class
    				$(ui.item[0]).addClass('dragging'); //hai phuong thuc
    			},
    			stop:function(event, ui){
    				$(ui.item[0]).removeClass('dragging');
    			},    			
    		});
});