describe ('Invalid Signup', () => {

  it('Step 01 - Invalid User', () =>{
    //Tentativa de prosseguir com o cadastro sem preencher os campos deverá ser exibido mensagem de campos obrigatorios.
    cy.visit('http://nextlab.mksolutions.com.br:4000/register')

    cy.get('.sc-jnrVZQ > input').click()
    cy.get('.sc-dwsnSq').click()

    cy.get(':nth-child(4) > span > p').should('be.visible')
    cy.get('.sc-gLDmcm > :nth-child(1) > span > p').should('be.visible')
    cy.get('.sc-hIagIn > .sc-ksdxgE > span > p').should('be.visible') 
    
        
    })

})