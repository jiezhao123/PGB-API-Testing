var data = require('./testapi_data')

var options_ios = {
    form: {
        data: {
            title: data.config.basic.i18nlong,
            password: 'Global1'
        },
        cert: data.config.key.ios.cert,
        profile: data.config.key.ios.profile
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

     api.post('/keys/blackberry', options_blackberry, function(e, data) {
        console.log('bb error:', e);
        console.log('bb data:', data);
    });
}
module.exports.runcase = runcase;



