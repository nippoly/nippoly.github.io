import $ from 'jquery';

$(document).ready( function(){
	//gifをリロードしても動かす
	var now = new Date().getTime();
	$('#box').append('<img id="unchi" src="../img/download.gif'+'?'+''+now+'" alt="" />');
	$('#box2').append('<img id="unchi2" src="../img/copy.gif'+'?'+''+now+'" alt="" />');
	$('#box3').append('<img id="unchi3" src="../img/clipboard.gif'+'?'+''+now+'" alt="" />');
	$('#box4').append('<img id="unchi4" src="../img/clip.gif'+'?'+''+now+'" alt="" />');
	//gifを何回も動かす
	setInterval(function(){
	    var timestamp = new Date().getTime();
	    $('#unchi').attr('src', '../img/download.gif' + '?' + timestamp);
	    $('#unchi2').attr('src', '../img/copy.gif' + '?' + timestamp);
	    $('#unchi3').attr('src', '../img/clipboard.gif' + '?' + timestamp);
	    $('#unchi4').attr('src', '../img/clip.gif' + '?' + timestamp);
	}, 1900);
});
