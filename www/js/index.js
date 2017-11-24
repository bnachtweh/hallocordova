if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

var button = document.getElementById('clickMe');
button.onclick = function (event) {
    navigator.notification.alert(
        'Klikte je alweer?',  // message
        function (){},         // callback
        'Nu heb ik een titel!',            // title
        'Akkoord'                  // buttonName
    );
}

app.initialize();