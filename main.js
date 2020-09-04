const https = require("https");

var keywords = "Camo";
var color = "Black";

var CSRFTOKEN = "";

const options = {
	host: "151.101.114.133",
	port: 443,
	path: "/shop/all/shirts",
	method: "GET",
	headers: {
		accept:
			"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control": "no-cache",
		host: "www.supremenewyork.com",
	},
};

var searchByKeyWords = function (keyword, document) {
	//finds specific URL with a help of keywords
	let splitted = document.split("article");
	var i = 0;
	while (
		splitted[i].search(keyword) == -1 ||
		splitted[i].search(color) == -1 ||
		i > splitted.lenth
	) {
		i++;
	}
	return splitted[i].split('href="', 2)[1].split('"')[0];
};

https.get(options, (res) => {
	var response = "";
	res.on("data", (d) => {
		response += `${d}`;
	});
	res.on("end", () => {
		CSRFTOKEN = response
			.split('name="csrf-token" content="', 2)[1]
			.split('"', 1)[0];
		console.log(CSRFTOKEN);

		console.log(searchByKeyWords(keywords, response));
	});
});
