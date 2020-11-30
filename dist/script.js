//Functions

//Creates task and resets input value
function createTask() {
	if ($('#input').val().length > 0) {
		const item = $("<li></li>").text($('#input').val());
		$('#list').append(item); 
		const check = $("<input>").attr('type','checkbox').click(crossTask);
		item.prepend(check);
		const span = $("<span></span>").text('X').addClass('delete').click(deleteTask);
		item.append(span);
	} else {
		alert('Please Enter a Task')
	}
	$('#input').val('');

}

// Crosses off task when user hits the checkbox or uncrosses when they uncheck
function crossTask(event) {
	$(event.target).parent().toggleClass('strike');
}

//Deletes task when user clicks the delete button
function deleteTask(event) {
	$(event.target).parent().remove();
}

//Event Listeners

$('#add').click(createTask);

$(document).keypress((e) => {
	if(e.which === 13) {
		createTask();
	}
});



