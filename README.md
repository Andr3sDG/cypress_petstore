# Petstore cypress test suite

The following project is a test suite for [Swagger-petstore](https://github.com/swagger-api/swagger-petstore), please follow the installation guide before to start with the installation of this suite.

## Solution

The tech stack used for this test suite is **Cypress/JavaScript**, as we know that cypress is a good option to use for e2e or component testing it is also a great option to test api's because it has all the methods to perform requests and using javascript it allow us to manipulate the requests and assert the responses.
Additional usgaes of Cypress are:
 - Continuous integration and continuous deployment with Jenkins
 - Behavior-driven development (BDD)
 - Custom commands
 
 To test the mayority of the flows of the app I decided to automate the following list of test cases:
  1. User creates a new pet then search the added pet by id
  2. User finds pets by status and tags
  3. User creates a list of users
  4. User updates his information
  5. User deletes user by his username
  6. User creates a new order and search for it
  7. User lists the inventory then search for an order by id to delete it

In the list there are a complete scenario but we can add more scnearios to the suite since there are created all the requests that the api allow us to use, if in the future were added more features to the api we can just add the new request to create more scenarios of the app.

## Instalation

**Please make sure that the api is running in port 8080 before running the test suite**

Clone this project in some local folder of your local pc:
```
git clone https://github.com/Andr3sDG/cypress_petstore.git
```

After clone the project, open a cmd or terminal and input the following commands:
```
npm install
npx cypress open
```

It should open cypress interface, select e2e testing, then your preferred browser.

At the end select the **petstore.spec.js** and let the magic happen!

## Optional

If you are using the port 8080, please feel free to update the port in the **cypress.config.js** file
