describe('User that fills out a registration form', () => {
  describe('with all necessary information', () => {
   before(() => {
     cy.visit('/')
     cy.get('input[name=firstName]').type('Miyeser');
     cy.get('input[name=email]').type('miyesier@gmail.com');
     cy.get('input[name=password').type('my_secret_password');
     cy.get('input[id=submit-button]').click();
    });
  
   it('is expeted to see a confirmation message', () => {
     cy.get('div[id=confirmation-message]').should(
      'contain.text',
      'Welcome to Mars,Thank you for signing up!'
      );
   });
 });
     //up happy pass "上面的是用户输入正确出来的结果"
    // down sad pass"下面的是用户如果输入不正确会出来的结果"
    //写两种测试的原因是在用户使用页面的时候有输入正确和错误的情况
 
    describe('with some fields missing', () => {
     before(() => {
       cy.visit("/");
       cy.get('input[name=firstName]').type('Miyeser');
       cy.get('input[name=password').type('my_secret_password');
       cy.get("input[id=submit-button").click();
     });

     it("is expected to see an error messgae",() =>{
       cy.get("div[id=confirmation-message]").should(
         "contain.text",
         "HEY,YOU NEED TO GIVE US YOU EMAIL ADDRESS!"
       );
     });
  });

});
