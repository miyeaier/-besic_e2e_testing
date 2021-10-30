describe('User that fills out a registration form', () => {
  describe('with all necessary information', () => {
   before(() => {
     cy.visit('/')
     cy.get('input[name=firstName]').type('Miyeser')
     cy.get('input[name=email]').type('miyesier@gmail.com')
     cy.get('input[name=password').type('my_secret_password')
     cy.get('input[id=submit-button]').click()
    });
  
   it('is expeted to see a confirmation message', () => {
     cy.get('div[id=confirmation-message]').should(
      'contain.text',
      'Welcome to Mars,Thank you for signing up!'
      );
    });
 });

});
