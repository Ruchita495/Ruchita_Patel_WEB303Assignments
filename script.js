/*
	WEB 303 Assignment 1 - jQuery
	Ruchita Patel
*/

$(document).ready(function (){
	$salary = $('#yearly-salary').val();

	$('#percent').on('keyup',function(){
		$per = $('#percent').val();

		$expense = (salary * $per)/100;

		$amt = $expense.toFixed(2);

		$('#amount').text('$' + $amt);``
	})
})
