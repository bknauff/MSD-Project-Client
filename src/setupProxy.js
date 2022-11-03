const proxy = require('http-proxy-middleware');

module.exports = function(app){
	
	app.use(proxy('/api', { target: '10.96.16.252:8080/' }));
    app.use(proxy('/account', { target: '10.110.22.72:8081/' }));
}
