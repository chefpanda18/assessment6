const express = require('express');
let axios = require('axios');
var app = express();


app.use(express.json()); // 1. added to process req.body


app.post('/', function(req, res, next) {
	try {
		let results = req.body.developers.map(async (d) => {
			return await axios.get(`https://api.github.com/users/${d}`);
		});
		
		// 2. Promise.all added
		Promise.all(results).then(users => {

			// 3. changed results to users ^
			let out = users.map((r) => ({ name: r.data.name, bio: r.data.bio }));

			return res.send(JSON.stringify(out));
		});
		
		
		
	} catch (err) { // 4. err added
		next(err);
	}
});

app.listen(3000);
console.log('listeing on port:3000')