const https = require("https");

const options = {
	host: "151.101.114.133",
	port: 443,
	path: "/shop/all/shirts",
	method: "GET",
	headers: {
		accept:
			"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7",
		"cache-control": "no-cache",
		host: "www.supremenewyork.com",
	},
};

https.get(options, (res) => {
	var response = "";
	res.on("data", (d) => {
		response = `${d}`
			.split('name="csrf-token" content="', 2)[1]
			.split('"', 1)[0];
		console.log(response);
		res.removeAllListeners("data");
	});
});
