var client = require('phonegap-build-api');
var data    = require('./testapi_data.json');

var color = require('colors');

var old_token = {
    token: data.config.userinfo.old_token
};
var new_token = {
    token: data.config.userinfo.new_token
};
var another_new_token = {
    token: data.config.userinfo.another_new_token
};

client.auth(old_token, function(e, api) {
    api.get('/me', function(e,data) {
        if(e) {
            console.log('Yes, there should be an error, which should means with an invalid token.\n The error was: ', e);
            console.log("PASS".green);
        } else {
            console.log("No error, which was not expected. pls investigate it.".red);
            console.log("/me 's data: ", data);
        }
    });
});

client.auth(new_token, function(e, api) {
    api.get('/me', function(e, data) {
        if(e) {
            console.log("Error: ", e);
            console.log("This is not expected, you should investigate it".red);
        } else {
            console.log("Yes, we can auth with the new token, PASS".green);
        }
    });
});

// Please manually delete the token at page https://build.phonegap.com/people/edit 
// and comments the other client.auth functions
// then test this file.
client.auth(new_token, function(e, api) {
    api.get('/me', function(e,data) {
        if(e) {
            console.log('Yes, there should be an error, which should means with an invalid token.\n The error was: ', e);
            console.log("PASS".green);
        } else {
            console.log("No error, which was not expected. pls investigate it.".red);
            console.log("/me 's data: ", data);
        }
    });
});

// Please manually new a token at page https://build.phonegap.com/people/edit, 
// and fill the new-generated token at testapi_data.json file
// comment the other client.auth functions
// then test this file.
client.auth(another_new_token, function(e, api) {
    api.get('/me', function(e, data) {
        if(e) {
            console.log("Error: ", e);
            console.log("This is not expected, you should investigate it".red);
        } else {
            console.log("Yes, we can auth with the new-generated token, PASS".green);
        }
    });
});
