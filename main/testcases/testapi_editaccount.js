/*
 *  Edit Account
 *
 *  Use PUT method to change user's email address, username, ssh-key wich I18N characters
 *  then assert that
 *      the email address should not be changed with I18N characters
 *      the username should be changed successfully with I18N characters
 *      the ssh-key testing may not be necessary, maybe later.
 */


var data   = require('./testapi_data.json');
var colors = require('colors');

var options_change_email = {
    form: {
        data: {
            email: data.config.userinfo.bad_email_address
        }
    }
};

var options_change_username = {
    form: {
        data: {
            username: data.config.userinfo.username
        }
    }
};

exports.runcase = function(api) {

    // email
	api.put('/me', options_change_email, function(e, data) {
        if(e) {
            var errMsg = "Edit Account -> Updating email address with I18N characters.";
            console.log(errMsg.green);
            console.log('pass'.green);
            console.log();
        } else {
            console.log("!!! Hey this is a big mistake, the email address should not contain i18n characters".red);
        }
	});

	// username
	api.put('/me', options_change_username, function(e, data) {
        if(e) {
            console.log("Edit Account -> updating username with I18N characters: fail".red);
            console.log("error", e);
        } else {
            console.log("Edit Account -> updating username with I18N characters: pass".green);
        }
    });

	// How to get sshkey ?
    // Maybe later.
    /*
	api.get('/me', function(e, data) {
		console.log('Edit Account -> get sshkey error: ', e);
		console.log('Edit Account -> get sshkey: ', data["ssh-key"]);
	});
	*/
};