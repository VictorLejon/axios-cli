#!/usr/bin/env node

const yargs = require("yargs");

const options = yargs
 .usage("Usage:http -m <POST/GET> -u <URL> optional: [-d <DATA>, -f]")
 .option("m", { alias: "method", describe: "HTTP Request Method (POST/GET)", type: "string", demandOption: true }) 
 .option("u", { alias: "url", describe: "Website URL for request", type: "string", demandOption: true })
 .option("d", { alias: "data", describe: "Data to send with POST request", type: "string", demandOption: false })
 .option("f", { alias: "fullResponse", describe: "Enable full response data. DEFAULT=false", type: "boolean", demandOption: false })
 .argv;

var full = false;
if (options.fullResponse == true) full = true;

if (options.method.toUpperCase() == "POST"){
	const post = require("./methods/post.js");
	post(options.url, options.data, full);
}
else if (options.method.toUpperCase() == "GET"){
	const get = require("./methods/get.js");
	get(options.url, full);
	//get("https://am.i.mullvad.net/connected", false);
}
