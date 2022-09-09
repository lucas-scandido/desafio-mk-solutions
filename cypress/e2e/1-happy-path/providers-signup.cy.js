import SignUpPage from '../page-objects/SignUpPage'
import SignupFactory from '../factories/SignupFactory'


describe('Valid Signup - Limited Company', () => {
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
    SignUpPage.limitedCompany()
    SignUpPage.fillFormCompany(newCompany)
    SignUpPage.btnNext()

  })

  it('Step 04 - Files', () => {

    SignUpPage.insertFiles()
    SignUpPage.btnInsertFiles()

  })

  it('Step 06 - Confirmation', () => {

    const successMessage = 'Sua conta foi cadastrada com sucesso!'
    SignUpPage.confirmationMessage(successMessage)

  })

})

describe('Valid Signup - Limited Company', () => {
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
    SignUpPage.associationCompany()
    SignUpPage.fillFormCompany(newCompany)
    SignUpPage.btnNext()

  })

  it('Step 04 - Files', () => {

    SignUpPage.insertFiles()
    SignUpPage.btnInsertFiles()

  })

  it('Step 06 - Confirmation', () => {

    const successMessage = 'Sua conta foi cadastrada com sucesso!'
    SignUpPage.confirmationMessage(successMessage)

  })

})
