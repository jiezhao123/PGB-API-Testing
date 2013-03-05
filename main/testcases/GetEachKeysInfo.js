//  GetEachKeysInfo.js

var data = require('./testapi_data.json');

var runcase = function(api){

    api.get('/keys/ios', function(e, data) {
        console.log('ios error:', e);
        console.log('ios data: ', data);
    });

    api.get('/keys/android', function(e, data) {
        console.log('android error:', e);
        console.log('android data:', data);
    });    

    api.get('/keys/blackberry', function(e, data) {
        console.log('bb error:', e);
        console.log('bb data:', data);
    });

}
module.exports.runcase = runcase;