///<reference types="cypress"/>

beforeEach(() => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('div > nb-layout-column > nb-card:nth-child(5) > nb-card-body > img').click();
        cy.get('.menu-title.ng-tns-c141-9').click();
        cy.get('.menu-title.ng-tns-c141-11').click();
        cy.wait(5000);

})
describe('Parametrized tests: Jane Doe', () => {

  const paramTest = ({testData, expectedResult, testData1, expectedResult1}) =>
        function () {
          
          cy.get('[placeholder="Jane Doe"]').type(`${testData}`);
          cy.get('[placeholder="Jane Doe"]').should("contain.value", `${expectedResult}`)

          cy.get('div > nb-card > nb-card-body > form > input:nth-child(2)').type(`${testData1}`);
          cy.get('div > nb-card > nb-card-body > form > input:nth-child(2)').should("contain.value", `${expectedResult1}`)
        }
  
 it(`search data`, paramTest({testData: "Home", expectedResult: "Home"}))
 it('search data', paramTest({testData: 12, expectedResult: 12}))
 //it('search data', paramTest({testData: 3, expectedResult: 3}))

 it(`search data`, paramTest({testData1: "Home1", expectedResult1: "Home1"}))
 it('search data', paramTest({testData1: 22, expectedResult1: 22}))
 //it('search data', paramTest({testData1: 3, expectedResult1: 3}))

 })
