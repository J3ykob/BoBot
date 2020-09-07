// NON CF_IP 172.67.74.203

var https = require("https");

var URL = "https://chmielna20.pl/air-jordan-3-retro-se-cz6431-100.html";

//console.log(`${URL.split("https://chmielna20.pl", 2)[1]}`);

var cf_options = {
	headers: {
		host: "chmielna20.pl",
		accept:
			"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",

		"sec-fetch-user": "?1",
		"upgrade-insecure-requests": "1",
	},

	method: "GET",
	mode: "cors",
	host: "104.26.5.188",
	port: 443,
	path: "",
};

cf_options.path = `${URL.split("https://chmielna20.pl", 2)[1]}`;

https.get(cf_options, (res) => {
	var setCookie = [];
	res.headers["set-cookie"].forEach((e, i, a) => {
		setCookie.push(`${e.split("; ", 2)[0]}`);
	});
	var response = "";
	var shoeToken = "";
	res.on("data", (d) => {
		response += d.toString();
	});

	res.on("end", () => {
		response = response.split('action="https://chmielna20.pl/basket/add', 2)[1];

		var toAddURL = "/basket/add" + response.split('"')[0];

		shoeToken = response
			.split('name="_token" type="hidden" value="', 2)[1]
			.split('"', 2)[0];

		const basketAddOptions = {
			method: "POST",
			host: "104.26.5.188",
			port: 443,
			path: "",
			headers: {
				host: "chmielna20.pl",
				accept:
					"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",

				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1",
			},
		};
		console.log(res.headers);
		basketAddOptions.headers["cookie"] = setCookie;
		basketAddOptions.path = toAddURL;
		console.log(basketAddOptions);
		console.log(`_token=${shoeToken}&size=10.0`);
		const req = https.request(basketAddOptions, (res) => {
			console.log(res.statusCode);
			res.on("data", (d) => {
				console.log(`${d}`);
			});
		});
		req.on("error", (e) => {
			console.error(e);
		});
		req.write(`_token=${shoeToken}&size=10.0`);
		req.end();
	});

	res.on("error", (e) => {
		console.log(e);
	});
});
