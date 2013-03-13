// testapi_new_app.js

var data   = require('./testapi_data.json')
var colors = require('colors');

var options_zip = {
    form: {
        data: {
            title: data.config.basic.i18nlong,
            create_method: 'file'
        },
        file: data.config.newapp.path
    }
};

var runcase = function(api){
    api.post('/apps', options_zip, function(e, data) {
        if(e) {
            var errMsg = "New App -> Create new app with .zip file fail\n\tThe error message was\n\t"
                + e.toString();
            console.log(errMsg.red);
        } else {
            console.log("New App -> Create new app with .zip file: pass".green);
        }
    });
}
module.exports.runcase = runcase;