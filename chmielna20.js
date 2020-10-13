// NON CF_IP 172.67.74.203
// SECOND ONE 104.26.5.188
//https://chmielna20.pl/cdn-cgi/challenge-platform/orchestrate/jsch/v1

var https = require("https");

const puppeteer = require("puppeteer");
const request_client = require("request-promise-native");

var cookies;

(async () => {
	const browser = await puppeteer.launch({ headless: false });
	const page = await browser.newPage();
	await page.goto("https://chmielna20.pl");
	const result = [];

	await page.setRequestInterception(true);

	page.on("request", (request) => {
		//	console.log(request.headers.toString());
		request.continue();
	});

	page.on("response", (response) => {
		//	console.log(response["_headers"]);
		// response.continue();
	});
	await page.waitForNavigation();
	cookies = await page.cookies();
	console.log(cookies);
	await browser.close();
})().then(() => {
	var URL = "https://chmielna20.pl/air-jordan-3-retro-se-cz6431-100.html";
	console.log(cookies);

	console.log(`${URL.split("https://chmielna20.pl", 2)[1]}`);

	var cf_options = {
		headers: {
			host: "chmielna20.pl",
			accept:
				"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",

			"sec-fetch-user": "?1",
			"upgrade-insecure-requests": "1",
			cookie: [],
		},

		method: "GET",
		mode: "cors",
		host: "172.67.74.203",
		port: 443,
		path: "",
	};

	cookies.forEach((e, i, a) => {
		cf_options.headers["cookie"].push(`${e.name}=${e.value}`);
	});
	console.log(cf_options);
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
			console.log(response);
			response = response.split(
				'action="https://chmielna20.pl/basket/add',
				2
			)[1];

			var toAddURL = "/basket/add" + response.split('"')[0];

			shoeToken = response
				.split('name="_token" type="hidden" value="', 2)[1]
				.split('"', 2)[0];

			const basketAddOptions = {
				method: "POST",
				host: "172.67.74.203",
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
});

// fetch("https://chmielna20.pl/cdn-cgi/challenge-platform/orchestrate/jsch/v1", {
// 	headers: {
// 		accept: "*/*",
// 		"accept-language": "pl",
// 		"cache-control": "no-cache",
// 		pragma: "no-cache",
// 		"sec-fetch-dest": "script",
// 		"sec-fetch-mode": "no-cors",
// 		"sec-fetch-site": "same-origin",
// 	},
// 	referrer: "https://chmielna20.pl/",
// 	referrerPolicy: "no-referrer-when-downgrade",
// 	body: null,
// 	method: "GET",
// 	mode: "cors",
// 	credentials: "include",
// });

// fetch(
// 	"https://chmielna20.pl/cdn-cgi/challenge-platform/generate/ov1/0.04438594166165163:1599512974:d4ddf7b8b674e07c66e8f37cfd3f73795402b9da64dafead8c890d65d4968ae6/5cf3719a9f5acc87/54352508537f50b",
// 	{
// 		headers: {
// 			accept: "*/*",
// 			"accept-language": "pl",
// 			"cache-control": "no-cache",
// 			"cf-challenge": "54352508537f50b",
// 			"content-type": "application/x-www-form-urlencoded",
// 			pragma: "no-cache",
// 			"sec-fetch-dest": "empty",
// 			"sec-fetch-mode": "cors",
// 			"sec-fetch-site": "same-origin",
// 			cookie:
// 				"__cfduid=dfe4238323df64794d63ebf3443e876261599513118; cf_chl_rc_ni=1; __cf_bm=af1abf3fc63cfcab648b0df0b35be52204d1a4e5-1599513312-1800-AfpbW4hwHdEnv9SSNiKzP9hm4gX0rGALCpwj33+Ks5VB; cf_chl_prog=e",
// 		},
// 		referrer: "https://chmielna20.pl/",
// 		referrerPolicy: "no-referrer-when-downgrade",
// 		body:
// 			"v_5cf3719a9f5acc87=BWVjvj%2bjtjrjYemkAmhGdUxmZji1GYcVDtm$mov5LGhto-BmZDiZWmdWvCWGmbjA2UnoDmU8tGi+fmLeAvzz3t+e5mHQencjmgEmDFV939ijRmhjUtmMIVCFm2biyBG31GGmRf021mK9pdzi9jjPZ$D3mmbQDIjGiDRmJvimoY5m+2Wm3oGmmWm7jhqmUOOmofmAjDbm3YiVjUDJ+hTmZ1XXxjmX9Z6QjDqXjmN1jhdmJcymBVmpw7OKihRmBcYpiVeG+EFUiDADc-2VXpm-Df2yLATPmUeS3T16n1WYXB5brSLddiqxcB2mU$4k6bn2Ymf+hm1bqFGj6bq4tUFi2SmDeMxtPTdNbdljeUij-6jDp9gDj7hoYEJYEjG+tQjjNbApjGNTgcGqDse-kqGGYmU9aCfSo5p3WJDBUkssoptBivLjex2+ELZmmwmmAyxTx7Fxi2gDdQjAlEjrb5DRVAme6m7Of1PbA38bQUJQmbyb5AoVNT7gimV5pdycO59aiVUA$R5pUmmE+6SAb4hhNm6bZUYQU+JtvjyW+KNbyjQd+nI+4qh3oKhDh4fonEnAmYP$NKeNQn0m6zxKij4oSYbKjvRKTUVvd7qHiYgqLiK4JtlnsLVELJ3qxKMKB14feQhTZiWGc1UC-4AqNUKKjBK21gffGjWk4-UKTQN7J3hUecKcZAYjU25U2S+g4V0kacooedkiaiKBoAjGVjfhePhAIEJmbh1U2VGJnc-6GtjTnTZfMERKIRErAUsb7G2e5qnIxdOtjVLTAilm2iBUI1o2yJbGjWUzK5L5RnmhGJi2+x5GizLt+mPGRtmSGJpf2URUjGIGJtRGNQ50b2LizI6tjGE92YM+aVf9GJQdY1bbg+IjQmVIzDotI6+my+gAize53UAEeZmUUiJmRhjmfpmVZi0TtUo5ErPyR5JZ6khnnmzxATv4naicMnj$Ut5JMvELTQ5VIRcV6mbTp6LtTp0iAEU$IVkmpT9iIEhegfajmEqeEeTpWIOqiJUiMqWJqS-knKMIFNtKjW+tVfSJFQ-ENNA6ZmGVyqEJ3my1t+iVm2Q--6131d5D4yIFbp16eBkieUWb1pGN5myDV2izhrhmp+tJmp4RPffntKfDL3GjsI8b1vjNYOynt2iexgQVanaG6sm3-19xaBo-bA2Y$ERnrfM9kiVJGQj28F3mpTdJBONq9jaIp3U$5y1nEErbmDxaU2X+TMVWmGSWVEjgfRh1+i+v6JUxfjpxEmeGj6IGQdUJ+NBHJbBM5LVF104N5ibGJnv3EbhdeNfKW6UgjfbhJb2W59UIoI8MyNJ2Vm",
// 		method: "POST",
// 		mode: "cors",
// 	}
// );
