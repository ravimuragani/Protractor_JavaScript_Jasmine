var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
	//seleniumAddress : 'http://localhost:4444/wd/hub',
	specs : [ 'com.calculator.functions.js' ],
	onPrepare : function() {
		console.log("onPrepare intiated")
		jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
			savePath : './Calculator/Results/screenshots'
		}));
	},
	suites : {
		
		regression:'com.calculator.functions.js',
		smoke:'AlertSmokeTestSuite.js'

	},
	jasmineNodeOpts : {
		showColors : true, // Use colors in the command line report.
	}

};