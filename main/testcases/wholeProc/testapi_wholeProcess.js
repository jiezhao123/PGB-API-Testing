// The whole process of creating an app, which includes
// 1, Unlock a signing key 
// 2, Attach one signing key to an app
// 3, Build the app
// 4, Download the app

var client = require('phonegap-build-api');
var data    = require('../testapi_data.json');

var for_iOS = require('./testapi_for_iOS');
var for_Android = require('./testapi_for_Android');
var for_BlackBerry = require('./testapi_for_BlackBerry');

var userinfo = {
    username: data.config.userinfo.user,
    password: data.config.userinfo.passwd
};

client.auth(userinfo, function(e, api) {
    if (e) {
        console.log('login error',e);   
        return;
    }

    //for_iOS.runcase(api);
     for_Android.runcase(api);
    // for_BlackBerry.runcase(api);

});