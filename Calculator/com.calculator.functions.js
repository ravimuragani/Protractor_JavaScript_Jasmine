describe('CalculatorFunction with Protractor', function() {
	var obj = require("./com.calculator.pageObjects.js");
	var using = require('jasmine-data-provider')
	var dataset = require("./com.calculator.datadriven.js")

	function Calc(a, b, required) {
		obj.firstInput.sendKeys(a);
		obj.secondInput.sendKeys(b);
		obj.operator.each(function(item) {
			item.getAttribute("value").then(function(operator) {

				if (operator == required) {
					item.click();
				}
			})

		})

		obj.goButton.click();
	}
	beforeEach(function() {
		obj.getURL()
	})

	using(dataset.DataDriven, function(data, description) {

		it('Calculator-Operations: ' + description, function() {
			Calc(data.firstInput, data.secondInput, data.Operation);

			expect((obj.actualResult).getText()).toBe(data.expected)

		})

	})

	afterEach(function() {
		obj.allResultRows.each(function(item) {

			item.element(by.css("td:nth-child(3)")).getText().then(
					function(text) {

						console.log("Result is : " + text)

					})

		})
	})

})