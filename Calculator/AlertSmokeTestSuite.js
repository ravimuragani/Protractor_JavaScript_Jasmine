describe('Dropdown Demo',function(){
		
		it('Actions',function(){
			
			browser.waitForAngularEnabled(false)
			browser.get("https://rahulshettyacademy.com/AutomationPractice/");
			element(by.id("alertbtn")).click()
			browser.switchTo().alert().accept().then(function(){
				browser.sleep(1000)
			})
		
			
			
		})
		
		
	})