var objPOM = require("./com.calculator.pageObjects.js")


function Calc (a, b, operation) {
		objPOM.firstInput.sendKeys(a);
		objPOM.secondInput.sendKeys(b);
		objPOM.operator.each(function(item) {
			item.getAttribute("value").then(function(operator) {

				if (operator == operation) {
					item.click();
				}
			})

		})

		objPOM.goButton.click();
	}

module.exports=new Calc (a, b, operation)