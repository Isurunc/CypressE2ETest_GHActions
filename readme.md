# Cypress Test Suite for daft
This repository contains Cypress tests for validating some functionality on the daft website.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Cypress](https://www.cypress.io/) installed. You can install it using the command `npm install cypress --save-dev`. It will install the latest version. 
This suite has used v13.0.0 using `npm install cypress@13.0.0`
- Make sure to insert username and password values of a registered user in cypress.env.json. I have configured them as secrets in the pipeline.

## Running the Tests

1. Clone this repository:
   `git clone <repository-url>`
2. Navigate to the project directory `cd <project-directory>`
3. Install dependencies: `npm install`
4. Open Cypress: `npx cypress open`
5. In the Cypress Test Runner, click on the test file (daftSearch.ts) to run.

## Notes
- I have registered a Gmail user and completed the scenario as a registered user
- Followed page object design pattern
- CI/CD pipeline is set up inside same repo using GitHub Actions which runs on each push. You can navigate to
"Actions" tab and observe it.

## Project Structure

```

E2ETEST
└── cypress
    └── e2e
        └── daftSearch.ts
    └── cypress.config.ts






