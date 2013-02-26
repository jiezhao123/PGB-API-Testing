var client = require('phonegap-build-api');

var signin_key_test = require('./testapi_signin_key');
var new_app_test    = require('./testapi_newapp');
var edit_account    = require('./testapi_editaccount');
var build           = require('./testapi_build');
var collaborator    = require('./testapi_collaborator');
var configuration   = require('./testapi_configuration');
var shareapp        = require('./testapi_shareapp');
var settings        = require('./testapi_settings');
var configxml       = require('./testapi_configxml');


var util    = require('./util');
var sleep   = require('sleep');
var async   = require('async');
var data    = require('./testapi_data.json');

var userinfo = {
	username: data.config.userinfo.user,
	password: data.config.userinfo.passwd
};

client.auth(userinfo, function(e, api) {
	if (e) {
		console.log('login error',e);   
		return;
	}

//  new_app_test.runcase(api);

//	signin_key_test.runcase(api);

//  edit_account.runcase(api); // Error: changing '/me' 's username can not find page.

//  build.runcase(api);

//  collaborator.runcase(api);

//  configuration.runcase(api); // Put 404 error / post 500 error

//  shareapp.runcase(api);

//  settings.runcase(api); //Error: ENOENT

//  configxml.runcase(api);


 });
