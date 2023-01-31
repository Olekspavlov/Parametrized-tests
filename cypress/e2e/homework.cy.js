///<reference types="cypress"/>

beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('div > nb-layout-column > nb-card:nth-child(5) > nb-card-body > img').click();
        cy.get('.menu-title.ng-tns-c141-9').click();
        cy.get('.menu-title.ng-tns-c141-11').click();
        cy.wait(5000);

})
describe('Parametrized tests: Jane Doe', () => {

  const paramTest = ({testData, expectedResult}) =>
        function () {
          
          cy.get('[placeholder="Jane Doe"]').type(`${testData}`);
          cy.get('[placeholder="Jane Doe"]').should("contain.value", `${expectedResult}`)

          cy.get('[placeholder="Email"]').type(`${testData1}`);
          cy.get('[placeholder="Email"]').should("contain.value", `${expectedResult1}`)
        }
  
 it(`search data`, paramTest({testData: "Home", expectedResult: "Home"}))
 it('search data', paramTest({testData: 2, expectedResult: 2}))
 it('search data', paramTest({testData: 3, expectedResult: 3}))

 })

 describe.only('Parametrized tests: Email', () => {

  const paramTest = ({testData1, expectedResult1}) =>
        function () {

          cy.get('div > nb-card > nb-card-body > form > input:nth-child(2)').type(`${testData1}`);
          cy.get('div > nb-card > nb-card-body > form > input:nth-child(2)').should("contain.value", `${expectedResult1}`)
        }
  
 it(`search data`, paramTest({testData1: "Home", expectedResult1: "Home"}))
 it('search data', paramTest({testData1: 2, expectedResult1: 2}))
 it('search data', paramTest({testData1: 3, expectedResult1: 3}))
      
      })
  






   

  

  
  


 