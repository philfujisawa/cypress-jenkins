# Cypress Tests with CI Using Jenkins
_This project demonstrates the integration of Cypress with Jenkins for an efficient CI/CD pipeline. It was adapted from an EBAC project, focusing on using Jenkins as an automation and continuous integration tool._

**Jenkins**: A CI/CD tool used to configure, manage, and automate tests.

## Cloning and Running on Your Machine
### Pré-requisito:

-Node.js - Download it from: 
+ [Node.js](https://nodejs.org/pt)

-To set up Jenkins on your machine, follow the official guide:
+ [Jenkins](https://www.jenkins.io/doc/book/installing/)

Using the terminal, run the following commands:
```  
git clone https://github.com/philfujisawa/cypress-jenkins.git
```
```
cd path/to/directory/cypress-jenkins.git
```

#### To install dependencies:
```
npm install 
```

#### To run in Headless mode via console:
```
npx cypress run
```

#### To run via Dashboard:
```
npx cypress open 
```
After opening the dashboard, click on "Running integration tests" to execute all tests.


### Supporting Libraries:
-Cypress - Automation framework: https://cypress.io/

-Faker - Library for generating test data: https://www.npmjs.com/package/faker

### Thank you so much!!