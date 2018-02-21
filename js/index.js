function caricaData() {
	setTimeout(function() {
		var sunrise = 1485726240;
		var sunset = 1485763863;
		var today = moment();
		var sunriseDate = moment.unix( sunrise );
		var sunsetDate = moment.unix( sunset );
		var expireDate = today.add( 30, 'days' );

		moment('it');

		document.getElementById('today').innerText = today.format('LLLL');
		document.getElementById('sunrise').innerText = sunriseDate.format('h:mm:ss a');
		document.getElementById('sunset').innerText = sunsetDate.format('h:mm:ss a');
		document.getElementById('expire').innerText = expireDate.format('LLL');
	}, 1000);
}