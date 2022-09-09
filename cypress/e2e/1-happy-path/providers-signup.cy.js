import SignUpPage from '../page-objects/SignUpPage'
import SignupFactory from '../factories/SignupFactory'


describe('Valid Signup', () => {
  it('Step 01 - User', () => {

    var newUser = SignupFactory.newUser()

    SignUpPage.go()
    SignUpPage.fillForm(newUser)

  })

  it('Step 02 - Validation', () => {
    //For the automation of this step I tried to use the MailoSaur and MailSlurp libraries to obtain the automatic verification code
    //but I didn't succeed in time. Therefore, this step of placing the confirmation code was manual,
    // that's why the delay in the last step, which would be the time needed to copy the code sent by email and paste it manually
    cy.wait(20000)
    SignUpPage.btnNext()
  })

  it('Step 03 - Company', () => {

    var newCompany = SignupFactory.newCompany()
    
    SignUpPage.segmentCompany()
    SignUpPage.modalCompany()
    SignUpPage.typeCompany()
    SignUpPage.fillFormCompany(newCompany)
    SignUpPage.btnNext()

  })

  // it('Step 04 - Files', () => {

  //   const expectedMessage = 'Enviado'

  //   var documentos = {
  //     contratoSocial: 'contrato-social',
  //     cnhFrente: 'cnh-frente',
  //     cnhVerso: 'cnh-verso'
  //   }

  //   cy.wait(1000)
  //   cy.get(':nth-child(5) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').attachFile('/images/' + documentos.contratoSocial).wait(5000).should('have.text', 'Enviado')
  //   cy.get(':nth-child(7) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').attachFile('/images/' + documentos.cnhFrente).wait(5000).contains('have.text', 'Enviado')
  //   cy.get(':nth-child(9) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').attachFile('/images/' + documentos.cnhVerso).wait(5000).contains('have.text', 'Enviado')
  //   cy.get('.sc-faIbUi > .jmdoSl').click()
  // })

  // it('Step 06 - Confirmation', () => {

  //   const successMessage = 'Sua conta foi cadastrada com sucesso!'
  //   SignUpPage.confirmationMessage(successMessage)

  // })

})