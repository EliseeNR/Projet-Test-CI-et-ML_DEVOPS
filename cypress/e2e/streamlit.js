describe('Streamlit Dashboard - Maison', () => {
  it('Affiche un message d’erreur si taille ou chambres <= 0', () => {
    cy.visit('http://localhost:8501')

    cy.get('input[aria-label="Taille maison"]').clear().type('0')
    cy.get('input[aria-label="Nombre de chambre"]').clear().type('0')

    cy.contains('mettre taille correcte').should('exist')
    cy.contains('mettre nombre de chambre correct').should('exist')
  })

  it('Affiche correctement la prédiction', () => {
    cy.visit('http://localhost:8501')

    cy.get('input[aria-label="Taille maison"]').clear().type('100')
    cy.get('input[aria-label="Nombre de chambre"]').clear().type('3')
    cy.get('input[aria-label="Y a un jardin"]').clear().type('1')

    cy.contains('le prix de la maison est').should('exist')
  })
})
