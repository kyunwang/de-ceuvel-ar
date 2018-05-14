var sock = new SockJS('http://localhost:9999/echo');
// var sock = new SockJS('https://834e6f60.ngrok.io/echo');

sock.onopen = function() {
	console.log('Sock connection opened');
};

sock.onmessage = function(e) {
	var data = JSON.parse(e.data);

	// Push data to the
	graphData.push(data);

	if (graphData.length) {
		if (graphData.length > 20) {
			graphData.shift();
		}
		renderLine(graphData);
	}
};

sock.onclose = function() {
	console.log('Sock connection closed');
};
