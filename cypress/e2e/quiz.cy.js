describe('Quiz Lesson 1', () => {
  beforeEach(() => {
    cy.visit('quizz.html') // adjust path if needed
  })

  it('should mark all correct answers as Correct', () => {
    cy.get('#q113').check() // correct for Q1.1
    cy.get('#q123').check() // correct for Q1.2
    cy.get('#q134').check() // correct for Q1.3

    cy.get('#form_1 input[type="submit"]').click()

    cy.get('#aq11').should('contain', 'Correct, well done!')
    cy.get('#aq12').should('contain', 'Correct, well done!')
    cy.get('#aq13').should('contain', 'Correct, well done!')
  })

  it('should mark each wrong answer as Incorrect', () => {
    const wrongAnswers = [
      { id: '#q111', feedback: '#aq11' }, // wrong for Q1.1
      { id: '#q112', feedback: '#aq11' },
      { id: '#q114', feedback: '#aq11' },
      { id: '#q121', feedback: '#aq12' }, // wrong for Q1.2
      { id: '#q122', feedback: '#aq12' },
      { id: '#q124', feedback: '#aq12' },
      { id: '#q131', feedback: '#aq13' }, // wrong for Q1.3
      { id: '#q132', feedback: '#aq13' },
      { id: '#q133', feedback: '#aq13' }
    ]

    wrongAnswers.forEach((test) => {
      cy.visit('quizz.html') // reset page for each try
      cy.get(test.id).check()
      cy.get('#form_1 input[type="submit"]').click()
      cy.get(test.feedback).should('contain', 'Incorrect, try again.')
    })
  })
})
