$.getJSON('https://nepalcorona.info/api/v1/data/nepal', function(data){
    $('.iv').append(data.tested_positive);
    $('.tv').append(data.tested_total);
    $('.pv').append(data.tested_negative);
    $('.date').append(data.lastest_sit_report.date);
});

$.getJSON('https://corona.blloc.com/current?country=nepal', function(data1){
	var confirmed=data1.confirmed;
	var recover=data1.recovered;
    var death=data1.deaths;
	$('.rv').append(recover);
	$('.dv').append(death);
});