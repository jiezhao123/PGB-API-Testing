// whole process for Android

var colors = require('colors');

var id_signingkey = 13390;
var id_app = 318395;

var options_unlock_android = {
    form: {
        data: {
            key_pw: "d!lat0",
            keystore_pw: "d!lat0"
        }
    }
};

var options_attach_key_android = {
    form: {
        data: {
            keys: {
                android: {
                    id: id_signingkey
                }
            }
        }
    }
};

var options_build = {
    form: {
        data: {
            platforms: ['android']
        }
    }    
};

exports.runcase = function(api) {

    // unlock a signing key
    api.put('/keys/android/'+id_signingkey, options_unlock_android, function(e, data) {
        console.log('android error:', e);
        console.log('android data: ', data);
    });

    // attach an unlocked signing key to an app
    api.put('/apps/'+id_app, options_attach_key_android, function(e, data) {
        console.log('android error:', e);
        console.log('android data: ', data);
    });

    // Build the app
    api.post('/apps/'+id_app+'/build', options_build, function(e, data) {
        if(e) {
            var errMsg = "Build -> Fail: Try to build platforms: android.";
            console.log(errMsg.red);
            console.log('Error: ', e);
        } else {
            console.log('Build -> Pass: Try to build platform: android.'.green);
        }
    });

    // download the app
    api.get('/apps/'+id_app+'/android', function(e, data) {
        if(e) {
            console.log("No, this is not what we expect, please investigate".red);
            return;
        } else {
            fs = require('fs');
            colors = require('colors');
            fs.writeFile('test.apk', data, function(err) {
                if(err) {
                    console.log("This is not what we expect. please see the error: \n", err);
                } else {
                    console.log("Yes, we can download the app");
                    console.log("PASS".green);
                }
            });
        }
    });
};