$(document).ready(function(){
	$('.calendarBig').hide();
	$('.weatherBig').hide();
	$('.clockBig').hide();
	
	$('#clockT button').click(function(){
		$('.home').slideUp();
		$('.calendarBig').slideUp();
		$('.weatherBig').slideUp();
		$('.clockBig').slideDown();
	});
	
	$('#calendarT button').click(function(){
		$('.home').slideUp();
		$('.calendarBig').slideDown();
		$('.weatherBig').slideUp();
		$('.clockBig').slideUp();
	});
	
	$('#weatherT button').click(function(){
		$('.home').slideUp();
		$('.calendarBig').slideUp();
		$('.weatherBig').slideDown();
		$('.clockBig').slideUp();
	});
	
	$('.clockBig #home').click(function(){
		$('.home').slideDown();
		$('.clockBig').slideUp();
	});
	
	$('.calendarBig #home').click(function(){
		$('.home').slideDown();
		$('.calendarBig').slideUp();
	});
	
	$('.weatherBig #home').click(function(){
		$('.home').slideDown();
		$('.weatherBig').slideUp();
	});
});