const axios = require("axios");

const get = (url, full) => {
	axios.get(url)
		.then((res) => (full) ? console.log(res) : console.log(res.data))
		.catch((err) => (full) ? console.error(err) : console.error("Response returned with status: " + err.response.status + " " + err.response.statusText))
}

module.exports = get;
