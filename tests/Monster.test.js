const Monster = require('../src/Monster')

describe('Monster Class', () => {
  const testMonster = new Monster('Monster 1', 100)

  test('Monster has a name', () => {
    expect(testMonster.name).toBe('Monster 1')
  })

  test('Monster has hp', () => {
    expect(testMonster.hp).toBe(100)
  })

  test('Monster has attacks', () => {
    expect(testMonster.attacks).toContainEqual({ attack: 'kick', damage: 30 })
  })
})
