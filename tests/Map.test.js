const Map = require('../src/Map')

describe('Map Class', () => {
  const testMap = new Map()

  test('Map starts with empty array', () => {
    expect(testMap.map).toStrictEqual([])
  })

  test('Generate map works', () => {
    testMap.generateMap()
    expect(testMap.map).toContainEqual(
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    )
  })

  test('Reset map to work', () => {
    testMap.resetMap()
    expect(testMap.map).toStrictEqual([])
  })
})
