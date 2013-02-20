/*
 *  Builds
 *
 *  Use POST method to build application
 *
 */

var options = {
	form: {
		data: {
			platforms: ['android', 'blackberry', 'ios']
		}
	}
};

exports.runcase = function(api) {
	api.post('/apps/314422/build', function(e, data) {
		if(e) {
            var errMsg = "Build -> Fail: Try to build 3 platforms: android, blackberry, iOS.";
			console.log(errMsg.red);
            console.log('Error: ', e);
		} else {
			console.log('Build -> Pass: Try to build 3 platforms: android, blackberry, iOS.'.green);
		}
	});
};