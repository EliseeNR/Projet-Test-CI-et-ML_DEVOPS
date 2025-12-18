describe('Streamlit Dashboard - Maison', () => {
 
    it('Affiche un message d’erreur si taille ou chambres <= 0', () => {

    cy.get('input[data-baseweb="input"]').eq(0).clear().type('-5')
    cy.get('input[data-baseweb="input"]').eq(1).clear().type('-3')

    cy.contains('mettre taille correcte').should('exist')
    cy.contains('mettre nombre de chambre correct').should('exist')
  })
 
 
    it('Affiche correctement la prédiction', () => {
    cy.visit('http://localhost:8501')  // URL par défaut de Streamlit

    // Remplir les champs
    cy.get('input[data-baseweb="input"]').eq(0).clear().type('100')  // taille
    cy.get('input[data-baseweb="input"]').eq(1).clear().type('3')    // nb_rooms
    cy.get('input[data-baseweb="input"]').eq(2).clear().type('1')    // jardin

    // Vérifier que la prédiction est affichée
    cy.contains('le prix de la maison est').should('exist')
  })


})
