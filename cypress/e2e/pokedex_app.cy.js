describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  }),
  it('pokemon page can be navigated to Blastoise', function() {
    cy.visit('http://localhost:5000')
    cy.contains('blastoise').click()
    cy.location('pathname').should('eq', '/pokemon/blastoise')
    cy.contains('83')
  })
})