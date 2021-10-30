describe("user that navigates to the application", ()=>{

 before(()=>{
   cy.visit('/')
 })

 it('is expected to see "Hello World!"',()=>{  
   cy.get('h1').should('contain.text', 'Hello Mars!')
   cy.get('h2').should('contain.text','Independent free people living Mars')
 })
   
});
  
// SETUP -INTEREACT -ASSERT
// ARRANGE -ACT ASSERT