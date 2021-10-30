describe("user that navigates to the application", ()=>{

 before(()=>{
   cy.visit('/')
 })

 it('is expected to see "Hello World!"',()=>{  
   cy.get('h1').should('contain.text', 'Hello Here Is Mars!')
   cy.get('h2').should('contain.text','We need Independent free mind people')
 })
   
});
  
// SETUP -INTEREACT -ASSERT
// ARRANGE -ACT ASSERT