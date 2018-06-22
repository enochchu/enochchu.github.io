/*
 * Genric AJAX Loading
 */

(function() {
	var SimpleAjaxGet = function(requestMethod, url, callback) {
		var request = new XMLHttpRequest();

		request.addEventListener("load", callback);

		request.open(requestMethod, url);

		request.send();
	}

	SimpleAjaxGet('GET', '/feed.xml', (this) => {
		console.log(this.responseText);
	});

})(this);

/*
 * This function loads the RSS resource
 */
(function() {
	var request = new XMLHttpRequest(); var response;

	request.addEventListener("load", () => {
		this.response = this.responseText;

		window.test = response;
	});

	request.open("GET", "/feed.xml");

	request.send();
})(this);

/*
 * This function detects if the user has passed a certain part and does
 * something
 */

(function() {

})(this);