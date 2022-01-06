const Player = require('../src/Player')

describe('Player Class', () => {
  const testPlayer = new Player('Player 1', 100)

  test('Player has a name', () => {
    expect(testPlayer.name).toBe('Player 1')
  })

  test('Player has hp', () => {
    expect(testPlayer.hp).toBe(100)
  })

  test('Player has attacks', () => {
    expect(testPlayer.attacks).toContainEqual({ attack: 'kick', damage: 15 })
  })
})
