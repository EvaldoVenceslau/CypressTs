describe ('Login', ( ) => {
it('Realizar login com sucesso', ( ) => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')
    // Act
    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test=password]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()
    // Assert 

    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
 })

it('Realizar login informando credenciais inválidas', () => {
    // Arrange
    cy.visit('https://www.saucedemo.com/')
    // Act
    cy.get('[data-test="username"]').type('standard_user')

    cy.get('[data-test=password]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    //assert
    cy.get('[data-test="error"]').should('contain.text', 'Username and password do not march any user in this service')

    cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})
