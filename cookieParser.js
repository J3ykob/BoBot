const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Enter cookie to parse", (lngCookie) => {
	var output = lngCookie.split("; ");
	console.log(output);

	rl.close();
});
