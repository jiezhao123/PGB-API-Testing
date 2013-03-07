// whole process for iOS

var colors = require('colors');

var id_app = 318395;
var id_signingkey = 54642;

var options_unlock_ios = {
    form: {
        data: {
            password: "Global1"
        }
    }
};

var options_attach_key_ios = {
    form: {
        data: {
            keys: {
                ios: {
                    id: id_signingkey
                }
            }
        }
    }
};

var options_build = {
    form: {
        data: {
            platforms: ['ios']
        }
    }    
};

exports.runcase = function(api) {

    // unlock a signing key
    api.put('/keys/ios/'+id_signingkey, options_unlock_ios, function(e, data) {
        console.log('ios error:', e);
        console.log('ios data: ', data);
    });


    // attach an unlocked signing key to an app
    api.put('/apps/'+id_app, options_attach_key_ios, function(e, data) {
        console.log('ios error:', e);
        console.log('ios data: ', data);
    });
    
    // Build the app
    api.post('/apps/'+id_app+'/build', options_build, function(e, data) {
        if(e) {
            var errMsg = "Build -> Fail: Try to build platforms: iOS.";
            console.log(errMsg.red);
            console.log('Error: ', e);
        } else {
            console.log('Build -> Pass: Try to build platform: iOS.'.green);
        }
    });


    // download the app
    api.get('/apps/'+id_app+'/ios', function(e, data) {
        if(e) {
            console.log("No, this is not what we expect, please investigate".red);
            return;
        } else {
            fs = require('fs');
            colors = require('colors');
            fs.writeFile('test.ipa', data, function(err) {
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