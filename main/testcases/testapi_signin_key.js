var data = require('./testapi_data.json');

var options_ios = {
    form: {
        data: {
            title: 'iOS Signing Key' + data.config.basic.i18nlong,
            password: 'Global1'
        },
        cert: data.config.key.ios.cert,
        profile: data.config.key.ios.profile
    }
};

var options_android = {
    form : {
        data: {
            title: 'android signing key ' + data.config.basic.i18nshort,
            alias: 'android alias ' + data.config.basic.i18nlong
            // password: 'd!lat0'
        },
        keystore: data.config.key.android.keystore
    }
};

var options_blackberry = {
    form: {
        data: {
            title: 'My BlackBerry Signing Key'+data.config.basic.i18nlong,
            password: '1234abcd'
        },
        db: data.config.key.blackberry.db,
        csk: data.config.key.blackberry.csk
    }
};

var runcase = function(api){

    api.post('/keys/ios', options_ios, function(e, data) {
        console.log('ios error:', e);
        console.log('ios data:', data);
    });


    api.post('/keys/android', options_android, function(e, data) {
        console.log('android error:', e);
        console.log('android data:', data);
    });    


    api.post('/keys/blackberry', options_blackberry, function(e, data) {
        console.log('bb error:', e);
        console.log('bb data:', data);
    });

}
module.exports.runcase = runcase;