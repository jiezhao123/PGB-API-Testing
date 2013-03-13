// testapi_main.js
var client  = require('phonegap-build-api');
var data    = require('./testapi_data.json');

var newapp  = require("./testapi_new_app.js");
var signing_key = require("./testapi_signing_key.js");

var userinfo = {
    username: data.config.userinfo.user,
    password: data.config.userinfo.passwd
};

client.auth(userinfo, function(e, api) {
    if (e) {
        console.log('login error',e);   
        return;
    }

    // newapp.runcase(api); // PASS

    // signing_key.runcase(api); // PASS

});