

var data    = require('./testapi_data.json');
var colors  = require('colors');

var options = {
    form: {
        data: {
            title: data.config.basic.i18nshort,
            create_method: 'file'
            // repo: 'https://github.com/YanShuai-Dilato/phonegap-start.git'
        },
        file: data.config.anotherNewApp
    }
};

exports.runcase = function(api) {
    api.put('/apps/314532', options, function(e, data) {

        if(!e) {
            console.log('Settings -> Update with new file path: pass'.green);
        } else {
            var errMsg = "Settings -> update with new file path fail\n\tThe error message was\n\t"
                + e.toString();
            console.log(errMsg.red);
        }
    });
};
