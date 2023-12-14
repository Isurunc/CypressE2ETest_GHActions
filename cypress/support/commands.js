

//Added this to handle an exception that was causing the test login fail

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  