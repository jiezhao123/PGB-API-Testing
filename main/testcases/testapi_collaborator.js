// testapi_collaborator.js
/*
 *  Collaborator
 *
 *  User POST method to add collaborator (dev/tester) to an app.
 *  Then alter each collaborator's role with test/dev.
 */

var options_dev = {
	form: {
		data: {
			email: 'lulichuan628@gmail.com',
			role: 'dev'
		}
	},
	method:'POST'
};

var options_tester = {
	form: {
		data: {
			email: 'ofshuay@gmail.com',
			role: 'tester'
		}
	},
	method: 'POST'
};

var options_D2T = { // role to tester
	form: {
		data: {
			role: 'tester'
		}
	},
	method: 'PUT'
};

var options_T2D = { // role to dev
	form: {
		data: {
			role: 'dev'
		}
	},
	method: 'PUT'
};

exports.runcase = function(api) {

	api('/apps/314532/collaborators', options_dev, function(e, data) {
		if(e) {
			console.log('Collaborator -> add dev collaborator error: fail'.red);
            console.log("\t Add dev collaborator error message:\n".red);
            console.log(e.toString().red);
        }
		else{
            console.log('Collaborator -> add dev collaborator : ', 'pass'.green);
        }
	});

	api('/apps/314532/collaborators', options_tester, function(e, data) {
		if(e)
			console.log('Collaborator -> add tester collaborator error: ', e.red);
		else
			console.log('Collaborator -> add tester collaborator : ', 'pass'.green);
	});

	api('/apps/314532/collaborators/303290', options_D2T, function(e, data) {
		if(e){
            var errMsg = "Collaborator -> change collaborator role to tester: \n \tThe error message was: "
                + e.toString();
            console.log(errMsg.red);
        }
		else
			console.log('Collaborator -> change collaborator role to tester: pass'.green);
	});

	api('/apps/314532/collaborators/303291', options_T2D, function(e, data) {
		if(e) {
            var errMsg = "Collaborator -> change collaborator role to dev: fail\n \tThe error message was:\t"
                + e.toString();
            console.log(errMsg.red);
        }
		else
			console.log('Collaborator -> change collaborator role to dev: ', 'pass'.green)
	});

};