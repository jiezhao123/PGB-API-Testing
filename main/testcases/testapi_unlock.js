var data = require('./testapi_data.json');

var options_ios = {
    form: {
        data: {
            cert_passwd: "Global1",
            locked: "false",
            default: "true"
        }
    }
};

var options_android = {
    form: {
        data: {
            cert_password: "d!lat0",
            keystore_password: "d!lat0",
            locked: "false",
            default: "true"
        }
    }
};

var options_blackberry = {
    form: {
        data: {
            key_password: "dilat0",
            locked: "false",
            default: "true"
        }
    }
};

var runcase = function(api){

    api.put('/keys/ios/54642', options_ios, function(e, data) {
        console.log('ios error:', e);
        console.log('ios data: ', data);
    });

    api.put('/keys/android/13390', options_android, function(e, data) {
        console.log('android error:', e);
        console.log('android data:', data);
    });    

    api.put('/keys/blackberry/3366', options_blackberry, function(e, data) {
        console.log('bb error:', e);
        console.log('bb data:', data);
    });
}

module.exports.runcase = runcase;