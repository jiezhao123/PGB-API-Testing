/*
 *  New App
 *
 *  Use POST method to create an app at build.phonegap.com with either a repo address or a .zip file
 *  Then verify that apps can be created with both methods
 *      by use the GET method to get the app's information, such as ID,... to check whether or not the app
 *      was created.
 */

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

var options_pubrepo = {
    form: {
        data: {
            title: data.config.basic.i18nshort,
            create_method: 'remote_repo',
            repo: 'https://github.com/YanShuai-Dilato/phonegap-start.git'
        }
    }
};

var runcase = function(api){

    api.post('/apps', options_pubrepo, function(e, data) {
        if(e) {
            var errMsg = "New App -> Create new app with public repo fail\n\tThe error message was\n\t"
                + e.toString();
            console.log(errMsg.red);
        } else {
            console.log('New App -> Create new app with public repo: pass'.green);
        }
    });

    /*
    api.post('/apps', options_zip, function(e, data) {
        if(e) {
            var errMsg = "New App -> Create new app with .zip file fail\n\tThe error message was\n\t"
                + e.toString();
            console.log(errMsg.red);
        } else {
            console.log("New App -> Create new app with .zip file: pass".green);
        }
    });
    */

}
module.exports.runcase = runcase;