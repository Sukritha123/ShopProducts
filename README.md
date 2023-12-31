# ShopProducts
Web Automation framework to test a shopping website

Project Title : ShopProducts

Description: 
This project is to develop a web automation test framework to test a shopping website.  This task is achieved with Cypress using Javascript, and BDD tests are written in Cucumber using Gherkin syntax. 
 

Additional Features :

	1. Generated Mochawesome report
	2. Generated reports on Cypress dashboard
	3. Test data values are stored in json file in fixture folder
	4. Cucumber test data parameterization is implemented in feature file
	5. Page object model(POM) concept is implemented
	6. Retries has been added. To automatically rerun failed test due to environment. 
	7. Tags in feature files are implemented. Commands to run tests based on tags is detailed in Execution instruction section. 
	8. Assertions have been used to test the behaviour and data values.
 	9. No test data is hardcoaded. All the test data is parameterization or stored in fixture file.

	

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
		

Screenshots of execution reports: 

![Mochaawesome Report screenshot](https://github.com/Sukritha123/ShopProducts/assets/144372708/f7406244-cc44-4eda-99ed-3c5cb8ba5256)
![Cypress Dashboard Screenshot](https://github.com/Sukritha123/ShopProducts/assets/144372708/fad09309-0485-4114-bcd5-56d01fd956a4)
![Test Runner execution screenshot](https://github.com/Sukritha123/ShopProducts/assets/144372708/91c0d8f7-05cf-4ab7-8275-00e204f48073)
![Terminal execution screenshot](https://github.com/Sukritha123/ShopProducts/assets/144372708/16682151-b8ca-4bee-9f93-960430d861ce)
