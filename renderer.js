// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var contents = $('.editor').html();
$('.editor').blur(function() {
	if (contents!=$(this).html()){
		console.log('Handler for .change() called.');
		contents = $(this).html();
	}
});
