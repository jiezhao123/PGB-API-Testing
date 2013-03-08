// whole process for BlackBerry

var colors = require('colors');

var id_app = 318395;
var id_signingkey = 3366;

var options_unlock_bb = {
    form: {
        data: {
            password: "dilat0"
        }
    }
};

var options_attach_key_bb = {
    form: {
        data: {
            keys: {
                blackberry: {
                    id: id_signingkey
                }
            }
        }
    }
};

var options_build = {
    form: {
        data: {
            platforms: ['blackberry']
        }
    }    
};

exports.runcase = function(api) {

    // unlock a signing key
    api.put('/keys/blackberry/'+id_signingkey, options_unlock_bb, function(e, data) {
        console.log('blackberry error:', e);
        console.log('blackberry data: ', data);
    });


    // attach an unlocked signing key to an app
    api.put('/apps/'+id_app, options_attach_key_bb, function(e, data) {
        console.log('blackberry error:', e);
        console.log('blackberry data: ', data);
    });
    
    // Build the app
    api.post('/apps/'+id_app+'/build', options_build, function(e, data) {
        if(e) {
            var errMsg = "Build -> Fail: Try to build platforms: blackberry.";
            console.log(errMsg.red);
            console.log('Error: ', e);
        } else {
            console.log('Build -> Pass: Try to build platform: blackberry.'.green);
        }
    });

    // download the app
    api.get('/apps/'+id_app+'/blackberry', function(e, data) {
        if(e) {
            console.log("No, this is not what we expect, please investigate".red);
            return;
        } else {
            fs = require('fs');
            colors = require('colors');
            fs.writeFile('test.jad', data, function(err) {
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