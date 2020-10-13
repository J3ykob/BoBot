var cloudscraper = require("cloudscraper");

cloudscraper.get("https://chmielna20.pl/").then(console.log, console.error);
