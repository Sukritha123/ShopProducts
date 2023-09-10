# ShopProducts
Web Automation framework to test a shopping website

Project Title : ShopProducts

Description: 
This project is to develop a web automation test framework to test a shopping website.  This task is achieved with Cypress using Javascript, and BDD tests are written in Cucumber using Gherkin syntax. 
 

Additional Features :

	1. Generated reports on Cypress dashboard
	2. Test data values are stored in json file in fixture folder
	3. Cucumber test data parameterization is implemented in feature file
	4. Page object model(POM) concept is implemented
	5. Retries has been added. To automatically rerun failed test due to environment. 
	6. Tags in feature files are implemented. Commands to run tests based on tags is detailed in Execution instruction section. 
 	7. Assertions have been used to test the behaviour and data values.
	

Execution Instruction:

	1. Copy the Git Hub URL.
	URL - https://github.com/Sukritha123/ShopProducts.git
	
	2. Open Visual Studio Code and open the terminal

	3. Clone the Git Hub repository. Type below command and press ENTER. Repository will be cloned.
	git clone https://github.com/Sukritha123/ShopProducts.git

	4. Open the project folder. Type below command and press ENTER.
	cd ShopProducts
	
	5. Install all project dependencies. Type below command and press ENTER.
	npm install

	6. Run the below command as per execution requirement:
		a. To open the test runner and click to run test - 
		npx cypress open 
		
		b. To run in electron browser and  headless mode
		npx cypress run
		
		c. To run test in chrome browser and headed mode
		npx cypress run --headed --browser chrome  
		
		d. To run only the scenario with tag= @initial in headed mode and chrome browser
		npx cypress-tags run -e TAGS=\"@initial" --headed --browser chrome  
		
		e. To run only the scenario with tag= @final in headless mode and default electron browser
		npx cypress-tags run -e TAGS=\"@final" 
		
Recommendations: 

		1. I would recommend to use Electron Browser and Headless mode for faster test execution. But other Browsers can be used if the need arises. Especially during development/ debugging in headed mode. 
		

