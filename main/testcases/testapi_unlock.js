var data = require('./testapi_data.json');

var options_ios = {
    form: {
        data: {
            password: "Global1"
        }
    }
};

var options_android = {
    form: {
        data: {
            key_pw: "d!lat0",
            keystore_pw: "d!lat0"
        }
    }
};

var options_blackberry = {
    form: {
        data: {
            password: "dilat0"
        }
    }
};

var runcase = function(api){

    // Good
    api.put('/keys/ios/54642', options_ios, function(e, data) {
        console.log('ios error:', e);
        console.log('ios data: ', data);
    });

    // Good
    api.put('/keys/android/13390', options_android, function(e, data) {
        console.log('android error:', e);
        console.log('android data:', data);
    });    

    // Good
    api.put('/keys/blackberry/3366', options_blackberry, function(e, data) {
        console.log('bb error:', e);
        console.log('bb data:', data);
    });

}

module.exports.runcase = runcase;