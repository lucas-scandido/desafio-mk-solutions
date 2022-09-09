class SignUpPage {

    go() {
        cy.visit('/')
    }

    fillForm(newUser) {
        //Filling the fields
        cy.get(':nth-child(4) > :nth-child(2) > input').type(newUser.email)
        cy.get('.sc-gLDmcm > :nth-child(1) > :nth-child(2) > input').type(newUser.name)
        cy.get('.sc-hIagIn > .sc-ksdxgE > :nth-child(2) > input').type(newUser.phone)
        cy.get('.sc-jnrVZQ > input').click()
        cy.get('.sc-dwsnSq').click()
    }

    btnNext() {
        cy.get('.jmdoSl').click()
    }

    segmentCompany() {
        cy.get('.sc-eoHXOn > :nth-child(1)').click()
    }

    otherCompany(){
        cy.get('.sc-eoHXOn > :nth-child(2)').click()
    }

    modalCompany() {
        cy.get('.sc-ctqQKy').click().wait(1000)
    }

    limitedCompany() {
        cy.get('.sc-dFtzxp > :nth-child(2)').click()
    }

    associationCompany() {
        cy.get('.sc-dFtzxp > :nth-child(2)').click()
    }
    
    fillFormCompany(newCompany) {
        cy.get(':nth-child(8) > :nth-child(2) > input').type(newCompany.employerIdentification)
        cy.get('.sc-ywFzA > :nth-child(1) > :nth-child(2) > input').type(newCompany.companyName)
        cy.get('.sc-ywFzA > :nth-child(2) > :nth-child(2) > input').type(newCompany.companyPhone)
        cy.get(':nth-child(10) > :nth-child(2) > input').type(newCompany.postalCode)
        cy.get(':nth-child(11) > :nth-child(2) > input').type(newCompany.addressName)
        cy.get('.sc-wkwDy > :nth-child(1) > :nth-child(2) > input').type(newCompany.addressNumber)
        cy.get('.sc-wkwDy > :nth-child(2) > :nth-child(2) > input').type(newCompany.addressLine)
        cy.get(':nth-child(3) > :nth-child(2) > input').type(newCompany.addressDistrict)
    }

    insertFiles() {
        cy.wait(1000)
        cy.get(':nth-child(5) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').selectFile('cypress/fixtures/images/social-contract.jpg', {action: 'drag-drop',}).wait(5000)
        cy.get(':nth-child(7) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').selectFile('cypress/fixtures/images/drive-license-back.jpg', {action: 'drag-drop',}).wait(5000)
        cy.get(':nth-child(9) > .sc-kszsFN > .sc-bOtlzW > .sc-czvZiG').selectFile('cypress/fixtures/images/drive-license-back.jpg', {action: 'drag-drop',}).wait(5000)
    }

    btnInsertFiles() {
        cy.get('.sc-faIbUi > .jmdoSl').click()
    }

    confirmationMessage(successMessage) {
        cy.get('.sc-hmvnCu').should('have.text', successMessage)
    }

}

export default new SignUpPage;