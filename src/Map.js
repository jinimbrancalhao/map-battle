const Player = require('../src/Player')
const Monster = require('../src/Monster')

class Map {
  constructor() {
    this.map = []
    this.collision = false
  }
  generateMap() {
    this.map.push([0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0])
  }
  resetMap() {
    this.map = []
  }
  spawnCharacters(player, monster) {
    const playerRandom1 = Math.floor(Math.random() * 4)
    const playerRandom2 = Math.floor(Math.random() * 4)

    this.map[playerRandom1][playerRandom2] = 'P'

    let monsterCount = 0

    while (this.collision === false && monsterCount < 6) {
      let monsterRandom1 = Math.floor(Math.random() * 4)
      let monsterRandom2 = Math.floor(Math.random() * 4)
      if (this.map[monsterRandom1][monsterRandom2] != 'P') {
        this.map[monsterRandom1][monsterRandom2] = 'M'
        monsterCount++
      } else {
        this.battle(player, monster)
        this.collision = true
      }
    }

    if (monsterCount === 6) {
      console.log('The monsters escaped today')
    }
  }
  battle(player, monster) {
    console.log(this.map)
    console.log('A battle is happening now')

    console.log(`${player.name} is battling a monster! Let's see who wins?`)
    while (player.hp > 0 && monster.hp > 0) {
      let attack1 = player.attack()
      monster.hp -= attack1.damage
      console.log(
        `${player.name} attacked the monster with ${attack1.attack}. The monster has ${monster.hp} hp left`
      )
      let attack2 = monster.attack()
      player.hp -= attack2.damage
      console.log(
        `The monster attacked ${player.name} with ${attack2.attack}. ${player.name} has ${player.hp} hp left`
      )
    }
    if (player.hp <= 0) {
      console.log('The monster has won!')
    } else if (monster.hp <= 0) {
      console.log(`${player.name} has won!`)
    }
  }
}

const testMap = new Map()
const testPlayer = new Player('Jin', 50)
const testMonster = new Monster('Monster', 50)

testMap.generateMap()
console.log(testMap.spawnCharacters(testPlayer, testMonster))
testMap.resetMap()

module.exports = Map
