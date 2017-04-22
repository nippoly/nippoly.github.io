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

	//navのhover 
	var navs = [];
	navs = document.getElementsByClassName("nav_a");
	$(navs[0]).on("mouseover", function() {
		$(navs[1]).animate({
			"opacity" : "0.4"
		},200);
		$(navs[2]).animate({
			"opacity" : "0.4"
		},200);
		$(navs[3]).animate({
			"opacity" : "0.4"
		},200);
	});
	$(navs[1]).on("mouseover", function() {
		$(navs[0]).animate({
			"opacity" : "0.4"
		},200);
		$(navs[2]).animate({
			"opacity" : "0.4"
		},200);
		$(navs[3]).animate({
			"opacity" : "0.4"
		},200);
	});
	$(navs[2]).on("mouseover", function() {
		$(navs[0]).animate({
			"opacity" : "0.4"
		},200);
		$(navs[1]).animate({
			"opacity" : "0.4"
		},200);
		$(navs[3]).animate({
			"opacity" : "0.4"
		},200);
	});
	$(navs[3]).on("mouseover", function() {
		$(navs[0]).animate({
			"opacity" : "0.4"
		},200);
		$(navs[1]).animate({
			"opacity" : "0.4"
		},200);
		$(navs[2]).animate({
			"opacity" : "0.4"
		},200);
	});
	$(navs).on("mouseleave", function() {
		$(navs).animate({
			"opacity" : "1"
		},200);
	});
});
