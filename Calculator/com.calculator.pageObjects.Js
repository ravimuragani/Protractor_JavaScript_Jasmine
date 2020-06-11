/**
 * 
 */

function calculatoPageObjects() {
	this.firstInput = element(by.model("first"))
	this.secondInput = element(by.model("second"))
	this.operator = element.all(by.tagName("option"))
	this.goButton = element(by.id("gobutton"))
	this.allResultRows = element.all(by.repeater("result in memory"))
	this.result = element(by.css("td:nth-child(3)"))
	this.actualResult=element(by.xpath("//h2[@class='ng-binding']"))

	this.getURL = function() {
		browser.get("https://juliemr.github.io/protractor-demo/");
	}

}

module.exports = new calculatoPageObjects()