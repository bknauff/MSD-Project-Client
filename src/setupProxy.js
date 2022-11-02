const proxy = require('http-proxy-middleware');

module.exports = function(app){
	
	app.use(proxy('/api', { target: '10.109.185.54:8080/' }));
    app.use(proxy('/account', { target: '10.100.136.47:8081/' }));
}
