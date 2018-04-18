describe('Form submission', () => {
  it('Has a working profile page', () => {
    cy.visit('/')

    cy.get('#dino-list > li').should('have.length.gte', 3)

    cy.get('#dino-list > li')
      .eq(0).find('.skills-list > li').should('be.hidden')

    cy.get('#dino-list > li header')
      .eq(0).click()

    cy.get('#dino-list > li')
      .eq(0).find('.skills-list > li')
      .eq(0).should('have.text', 'stepping on things')
    cy.get('#dino-list > li')
      .eq(0).find('.skills-list > li')
      .eq(1).should('have.text', 'musing on life')
    cy.get('#dino-list > li')
      .eq(0).find('.skills-list > li')
      .eq(2).should('have.text', 'MS Office')

    cy.get('#dino-list > li header')
      .eq(0).click()

    cy.get('#dino-list > li')
      .eq(0).find('.skills-list > li').should('be.hidden')

    cy.get('#dino-list > li header')
      .eq(1).click()

    cy.get('#dino-list > li')
      .eq(1).find('.skills-list > li')
      .eq(0).should('have.text', 'being contrary')
  })
})
