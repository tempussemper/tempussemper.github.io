$(document).ready(
function()
{
	

$("#menu").click(function(){
	
							/*отслеживает клик по элементу и вызываем функцию*/
	var x = document.getElementById("myTopnav")	/*проверка*/

	if(x.className === "topmenu") {
		x.className += "responsive";
	}
	else{
		x.className ="topmenu";
	}
});	

	


	}
	);


/*СКРИПТ ДЛЯ УВЕЛЕЧЕНИЯ ПО ЩЕЛЧКУ*/
$(function(){
  $('.minimized12').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
      left: ($(document).width() - $('#magnify').outerWidth())/2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.04.2020
            top: ($(window).height() - $('#magnify').outerHeight())/2
    });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
 



$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.04.2020
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
 


/*Увелечение частей главной страницы СКРИПТ ДЛЯ УВЕЛЕЧЕНИЯ ПО ЩЕЛЧКУ  закоментировал 26.05.2020*/

/*
$(function(){
  $('.O_kyrse').click(function(event) {
    var i_path = $(this).attr('O_kyrse');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="assets/imgINDEX/O_kyrse.png"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.04.2020
            top: ($(window).height() - $('#magnify').outerHeight())/2	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});


/*Увелечение частей главной страницы СКРИПТ ДЛЯ УВЕЛЕЧЕНИЯ ПО ЩЕЛЧКУ */

/*
$(function(){
  $('.Trebov').click(function(event) {
    var i_path = $(this).attr('Trebov');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="assets/imgINDEX/Trebov.png"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.04.2020
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});

$(function(){
  $('.Form_comp').click(function(event) {
    var i_path = $(this).attr('Form_comp');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="assets/imgINDEX/Form_comp.png"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.04.2020
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});

$(function(){
  $('.Progr_kursa').click(function(event) {
    var i_path = $(this).attr('Progr_kursa');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="assets/imgINDEX/Progr_kursa.png"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.04.2020
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});


$(function(){
  $('.Result').click(function(event) {
    var i_path = $(this).attr('Result');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="assets/imgINDEX/Result.png"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.04.2020
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});


$(function(){
  $('.Obr_sviaz').click(function(event) {
    var i_path = $(this).attr('RObr_sviaz');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="assets/imgINDEX/Obr_sviaz.png"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
	    left: ($(document).width() - $('#magnify').outerWidth())/2,
	    // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.04.2020
            top: ($(window).height() - $('#magnify').outerHeight())/2
	  });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
 
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});
*/