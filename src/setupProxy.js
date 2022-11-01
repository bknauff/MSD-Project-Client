const proxy = require('http-proxy-middleware');

module.exports = function(app){
	
	app.use(proxy('/api', { target: '10.107.36.16:8080/' }));
    app.use(proxy('/account', { target: '10.102.205.230:8081/' }));
}
