$(document).ready(function() {
	$('div.title').click(function() {
		console.log("test");
    	location.reload();

	});



$('input.add').click(function() {
	var todo = prompt("Item title: ");
$('#containerID')
	.append('<div class="nerdStuff" ><>') 
    .append(
       $(document.createElement('input')).attr({
           id:    'myCheckbox',
           name:  'myCheckbox',
           value: 'myValue',
           type:  'checkbox',


       })
    ).append(todo).append('<br>').append('</div>');
});

$('input.remove').click(function(){
	$("div.nerdStuff, input:checked").remove();

});




});
