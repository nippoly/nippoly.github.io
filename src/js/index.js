import $ from 'jquery';
import SweetScroll from "sweet-scroll"

//scrollの実装
//safariのブラウザ判定
let userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('opera') != -1) {
  console.log("opera");
  const sweetScroll = new SweetScroll();
} else if (userAgent.indexOf('msie') != -1) {
  console.log("msie");
  const sweetScroll = new SweetScroll();
} else if (userAgent.indexOf('chrome') != -1) {
  console.log("chrome");
  const sweetScroll = new SweetScroll();
} else if (userAgent.indexOf('safari') != -1) {
  console.log("safari");
} else if (userAgent.indexOf('gecko') != -1) {
  console.log("gecko");
  const sweetScroll = new SweetScroll();
} else {
  console.log("違うよ");
  const sweetScroll = new SweetScroll();
}

$(document).ready( function(){
	//モバイルかPCの判定
	let getDevice = (function(){
		let ua = navigator.userAgent;
		if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
		    console.log("sp");
			//gifをリロードしても動かす
			var now = new Date().getTime();
			$('#box').append('<img id="step_1" src="./img/download.gif'+'?'+''+now+'" alt="" />');
			$('#box2').append('<img id="step_2" src="./img/copy.gif'+'?'+''+now+'" alt="" />');
			$('#box3').append('<img id="step_3" src="./img/clipboard.gif'+'?'+''+now+'" alt="" />');
			$('#box4').append('<img id="step_4" src="./img/clip.gif'+'?'+''+now+'" alt="" />');
			$('#box-loading').append('<img id="step_5" src="./img/loading.gif'+'?'+''+now+'" alt="" />');
			//gifを何回も動かす
			setInterval(function(){
			    var timestamp = new Date().getTime();
			    $('#step_1').attr('src', './img/download.gif' + '?' + timestamp);
			    $('#step_2').attr('src', './img/copy.gif' + '?' + timestamp);
			    $('#step_3').attr('src', './img/clipboard.gif' + '?' + timestamp);
			    $('#step_4').attr('src', './img/clip.gif' + '?' + timestamp);
			}, 3200);

			//loading用
			setInterval(function(){
			    var timestamp = new Date().getTime();
			    $('#step_5').attr('src', './img/loading.gif' + '?' + timestamp);
			},5000);
			setTimeout(function(){
				$(".loadingWrap").fadeOut("slow");
			},5000);
		}else{
		    console.log("その他");
			//gifをリロードしても動かす
			var now = new Date().getTime();
			$('#box').append('<img id="step_1" src="./img/download.gif'+'?'+''+now+'" alt="" />');
			$('#box2').append('<img id="step_2" src="./img/copy.gif'+'?'+''+now+'" alt="" />');
			$('#box3').append('<img id="step_3" src="./img/clipboard.gif'+'?'+''+now+'" alt="" />');
			$('#box4').append('<img id="step_4" src="./img/clip.gif'+'?'+''+now+'" alt="" />');
			$('#box-loading').append('<img id="step_5" src="./img/loading.gif'+'?'+''+now+'" alt="" />');
			//gifを何回も動かす
			setInterval(function(){
			    var timestamp = new Date().getTime();
			    $('#step_1').attr('src', './img/download.gif' + '?' + timestamp);
			    $('#step_2').attr('src', './img/copy.gif' + '?' + timestamp);
			    $('#step_3').attr('src', './img/clipboard.gif' + '?' + timestamp);
			    $('#step_4').attr('src', './img/clip.gif' + '?' + timestamp);
			}, 2000);

			//loading用
			setInterval(function(){
			    var timestamp = new Date().getTime();
			    $('#step_5').attr('src', './img/loading.gif' + '?' + timestamp);
			},3000);
			setTimeout(function(){
				$(".loadingWrap").fadeOut("slow");
			},4000);
		}
	})();

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
