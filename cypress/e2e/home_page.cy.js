

import {errorMessages} from '../../test/src/components/Login'

describe('Login Form Tests', () => {
    it('successfully loads', () => {
      cy.visit('http://localhost:5176') // change URL to match your dev URL
    })
  })


  
/* Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor.

email yanlış girdim:

ekranda 1 tane hata mesajı var
ekranda doğru hata mesajı var 
buton disabled mı    */



describe('Login Form Tests', () => {
  beforeEach(() => {
    cy.visit('/'); //arrange
  });

  it('email yanlış girildiğinde', () => {
    cy.get('[data-cy="email"]').type('yanlis@email'); //act
    cy.contains(errorMessages.email);
    cy.get('[data-cy="submit"]').should('be.disabled');//assert
cy.get('[data-cy="error-message"]').should('have.length', 1);//assert
  
   

});
   

it('password ve email yanlış girildiğinde', () => {
    cy.get('[data-cy="email"]').type('yanlis@email'); //act
    
    cy.get('[data-cy="password"]').type('123');//act
    cy.contains(errorMessages.password);
   
cy.get('[data-cy="error-message"]').should('have.length', 2);//assert
  });



});

 
 
 


