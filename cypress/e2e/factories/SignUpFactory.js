var faker = require('faker')

export default {

    newUser: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var user = {
            email: 'luccas.candido@outlook.com', // <-- seu e-mail aqui
            name: `${firstName} ${lastName}`,
            phone: '5543998786785',
        }

        return user

    },

    newCompany: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var company = {
            employerIdentification: '95312037000161',
            companyName: `${firstName} ${lastName}`,
            companyPhone: '4333224455',
            postalCode: '21011020',
            addressName: 'Rua da Batata',
            addressNumber: '868',
            addressLine: 'Casa',
            addressDistrict: 'Rio de Janeiro/RJ'
        }

        return company

    }

}