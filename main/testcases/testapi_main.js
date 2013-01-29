var client = require('phonegap-build-api');
var signin_key_test = require('./testapi_signin_key')
var new_app_test = require('./testapi_newapp')

client.auth({ username: 'lulichuan628@gmail.com', password: '1234abcd'}, function(e, api) {
	console.log('login error',e);   

	//I18N test cases for signin key
	//signin_key_test.runcase(api);
	//I18N test case for new app
	new_app_test.runcase(api);
     

 })   