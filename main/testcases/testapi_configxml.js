/*
 *  Config XML
 *
 *  First make some changes to a public repo's config.xml file
 *  then update app with this changed one.
 */

var colors  = require('colors');
var data    = require('./testapi_data.json');

var options = {
    form: {
        data: {
            title: data.config.basic.i18nshort,
            create_method: 'remote_repo',
            repo: 'https://github.com/YanShuai-Dilato/phonegap-start.git'
        }
    }
};

exports.runcase = function(api){
    api.put('/apps/314532',options, function(e, data) {
        if(e) {
            var errMsg = "ConfigXML -> update app with altered repo: fail\n\tThe error message was\n\t"
                + e.toString();
            console.log(errMsg.red);
        } else {
            console.log("ConfigXML -> update app with altered repo: pass".green);
        }
    });
};