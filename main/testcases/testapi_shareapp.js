/*
 *  Share app
 *
 *  Use GET method to download each platform application to the current folder
 *  then use fs to check if each app was downloaded successfully.
 */

var colors  = require('colors');
var data    = require('./testapi_data.json');
var fs      = require('fs');


exports.runcase = function(api) {
    api.get('/apps/314532/android').pipe(fs.createWriteStream('app.apk'));
    api.get('/apps/314532/ios').pipe(fs.createWriteStream('app.ipa'));
    api.get('/apps/314532/blackberry').pipe(fs.createWriteStream('app.jad'));

    fs.exists('app.apk', function(exists) {
        if(exists) {
            console.log('Share App -> with Android: pass'.green);
        } else {
            console.log('Share App -> with Android: Fail'.red);
        }
    });

    fs.exists('app.ipa', function(exists) {
        if(exists) {
            console.log('Share App -> with iOS: pass'.green);
        } else {
            console.log('Share App -> with iOS: Fail'.red);
        }
    });

    fs.exists('app.jad', function(exists) {
        if(exists) {
            console.log('Share App -> with BlackBerry: pass'.green);
        } else {
            console.log('Share App -> with BlackBerry: Fail'.red);
        }
    });
};