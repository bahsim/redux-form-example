
const { getRequestBody } = require('../modules/misc');
const path = require('path');

module.exports = (app) => {
	
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, '..','frontend/user.html'));
  });
	
	app.post('/mix', (req, res) => {
		getRequestBody(req, (body) => {
			makingRequest(res, body)
		})
	})
	
	async function makingRequest(res, body) {
		const result = await requestToDb(body)
		res.json(result)
	}
	function requestToDb(data) {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve({ success: true, data });
			}, 2000);
		});
	}	
}
