$(document).ready(function() {
	$('div.title').click(function() {
    	location.reload();
	});

	$('input.add').click(function() {
		var todo = prompt("Item title: ");
		$('#containerID')
			.append('<div class="nerdStuff">' + '<input class="newThing" type="checkbox">' + todo)
	});

	$('input.remove').click(function(){
		$("div.nerdStuff > input:checked").parent().remove();
	});

	$(document).on("click", "div.nerdStuff > input" , function(e) {
		e.stopPropagation();
	});

	$(document).on("click", "div.nerdStuff" , function(e) {
		e.preventDefault();
		if ($(e.currentTarget).children("input").prop('checked') == false) {
			$(e.currentTarget).children("input").prop('checked', true); 
		} else {
			$(e.currentTarget).children("input").prop('checked', false);
		}
	});
});