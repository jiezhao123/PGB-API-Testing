// util.js
var colors = require('colors');
// var async = require('async');

/*
 *  Try to get the latest app ID
 *  and the collaborator ID
 */

function Util(){
    this.getAppID = function(api) {
        var id ;
        api.get('/apps', function(e, data) {
            console.log('apps count:', data.apps.length);
            // console.log('apps[0] id: ', data.apps[0].id);

            id = data.apps[data.apps.length - 1].id;

            if(!id) {
                console.log('Error: no app at http://build.phonegap.com.'.red);
                return undefined;
            }
            console.log('apps[0] id: ', data.apps[0].id);
        });
        return id;
    };
    this.getCollID = function(role, api) {
        var coll_ID;
        api.get('/apps/' + this.getAppID(api), function(e, data) {
            var activeNo = data.collaborators.active.length;
            for(var i = activeNo - 1; i > 0; --i) { // active[0] was 'admin'
                if(role == data.collaborators.active[i].role) {
                    coll_ID = data.collaborators.active[i].id;
                    break;
                }
            }
        });
        if(!coll_ID) {
            console.log('File util.js Error: no collaborator at http://build.phonegap.com.'.red);
            return undefined;
        }
        return coll_ID;
    };
}

module.exports = new Util();
