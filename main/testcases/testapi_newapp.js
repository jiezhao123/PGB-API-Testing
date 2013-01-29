var data = require('./testapi_data')
var options = {
    form: {
        data: {
            title: data.config.basic.i18nlong,
            create_method: 'file'
        },
        file: data.config.newapp.path
    }
};



var runcase = function(api){
        
  api.post('/apps', options, function(e, data) {
    console.log('new app error:', e);
    console.log('data:', data);
  });
}
module.exports.runcase = runcase;