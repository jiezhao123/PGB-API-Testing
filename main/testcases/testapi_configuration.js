/*
*   Configuration
*
*   Use POST method to add an icon to an app, the icon's filename contains I18N characters.
*       PUT method to update an app's title, version, package and description with I18N characters.
*
*   Verify that
*      the containing-i18n-character icon can be added to the app.
*      the title, version, package, and description were all update with I18N characters successfully.
*
*/
var data   = require('./testapi_data.json');
var colors = require('colors');

// icon name with i18n chars.
var options_icon = {
	form: {
		data: {
			icon: data.config.configurationProp.iconFile
		}
	}
};

// the title part was already tested in the newapp.js file.
var options_description = {
    form: {
        data: {
            description: data.config.configurationProp.descriptionStr
        },
        method: 'PUT'
    }
};

var options_package = {
    form: {
        data: {
            package: data.config.configurationProp.package
        }
    }
};

var options_version = {
    form: {
        data: {
            version: data.config.configurationProp.version
        },
        method: 'PUT'
    }
};

exports.runcase = function(api) {

    // icon
    api.post('/apps/314532/icon', options_icon, function(e, data) {
        if(!e) {
            console.log('Configuration -> Post icon with good name and filetype: pass'.green);
        } else {
            console.log('Configuration -> Post icon with good name and filetype: fail'.red);
            console.log("\terror: ", e);
        }
    });

    // Description
    /*
    api('/apps/301542',options_description, function(e, data) {
        if(e) {
            var errMsg = "Configuration -> updating app\'s description with I18N characters: fail \n\t"
                + e.toString();
            console.log(errMsg.red);
        } else {
            console.log("Configuration -> updating app\'s description with I18N characters: pass ".green);
        }
    });
    */

    // version
    /*
    api('/apps/301542', options_version, function(e, data) {
        if(e) {
            var errMsg = "Configuration -> updating app\'s version with I18N characters: fail \n\t"
                + e.toString();
            console.log(errMsg.red);
        } else {
            console.log("Configuration -> updating app\'s version with I18N characters: pass ".green);
        }
    });
    */

    // package
    /*
    api.put('/apps/314532', options_package, function(e, data) {
        if(e) {
            var errMsg = "Configuration -> updating app\'s package with I18N characters: fail \n\t"
                + e.toString();
            console.log(errMsg.red);
        } else {
            console.log("Configuration -> updating app\'s package with I18N characters: pass ".green);
        }
    });
    */
};
