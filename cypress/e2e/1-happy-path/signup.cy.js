describe ('Valid Signup', () => {
  it('Step 01 - User', () =>{
      cy.visit('/register')

      var usuario = {
          email: 'luccas.candido@outlook.com',
          nome: 'Lucas da Silva Candido',
          celular: '5543998899898'
      }

      cy.get(':nth-child(4) > :nth-child(2) > input').type(usuario.email).should(not.be)
      cy.get('.sc-gLDmcm > :nth-child(1) > :nth-child(2) > input').type(usuario.nome)
      cy.get('.sc-hIagIn > .sc-ksdxgE > :nth-child(2) > input').type(usuario.celular)
      cy.get('.sc-jnrVZQ > input').click()
      cy.get('.sc-dwsnSq').click()
          
    })

    it('Step 02 - Validation', () => {
      //Para a automação desta etapa tentei utilizar as bibliotecas MailoSaur e MailSlurp para a obtenção do código de verificação automático
      //porém não obtive sucesso a tempo. Portanto, esta etapa de colocar o código de confirmação, ficou manual,
      //por isso o delay na ultima etapa, que seria o tempo necessario de copiar o código enviado pelo email e colar manualmente.
      cy.wait(15000)
      cy.get('.jmdoSl').click()

    })

    it('Step 03 - Company', () =>{
        var empresa = {
            cnpj: 'luccas.candido@outlook.com',
            razaoSocial: 'Lucas da Silva Candido',
            telefone: '5543998899898',
            cep: '86042420',
            endereco: 'Rua das Batatas',
            numero: '123',
            complemento: 'ed. comercial',
            bairro: 'casa'
        }

        cy.get('.sc-eoHXOn > :nth-child(1)').click()
        cy.get('.sc-ctqQKy').click().wait(1000)
        cy.get('.sc-dFtzxp > :nth-child(1)').click()

        cy.get(':nth-child(8) > :nth-child(2) > input').type(empresa.cnpj)
        cy.get('.sc-ywFzA > :nth-child(1) > :nth-child(2) > input').type(empresa.razaoSocial)
        cy.get('.sc-ywFzA > :nth-child(2) > :nth-child(2) > input').type(empresa.telefone)
        cy.get(':nth-child(10) > :nth-child(2) > input').type(empresa.cep)
        cy.get(':nth-child(11) > :nth-child(2) > input').type(empresa.endereco)
        cy.get('.sc-wkwDy > :nth-child(1) > :nth-child(2) > input').type(empresa.numero)
        cy.get('.sc-wkwDy > :nth-child(2) > :nth-child(2) > input').type(empresa.complemento)
        cy.get(':nth-child(3) > :nth-child(2) > input').type(empresa.bairro)
        cy.get('.jmdoSl').click()

    })

    it('Step 04 - Files', () =>{      
      
      const expectedMessage = 'Enviado'
      
      var documentos = {
          contratoSocial: 'contrato-social',
          cnhFrente: 'cnh-frente',
          cnhVerso: 'cnh-verso'
      }

      cy.wait(1000)
      cy.get(':nth-child(5) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').attachFile('/images/' + documentos.contratoSocial).wait(5000).should('have.text', 'Enviado')
      cy.get(':nth-child(7) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').attachFile('/images/' + documentos.cnhFrente).wait(5000).contains('have.text', 'Enviado')
      cy.get(':nth-child(9) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').attachFile('/images/' + documentos.cnhVerso).wait(5000).contains('have.text', 'Enviado')
      cy.get('.sc-faIbUi > .jmdoSl').click()
  })

    it('Step 06 - Confirmation', () => {
      
      const expectedMessage = 'Sua conta foi cadastrada com sucesso!'
      
      cy.get('.sc-hmvnCu').should('have.text', expectedMessage)

    })

})