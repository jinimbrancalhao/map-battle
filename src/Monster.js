class Monster {
  constructor(name, hp) {
    this.name = name
    this.hp = hp
    this.attacks = [
      { attack: 'kick', damage: 30 },
      { attack: 'Punch', damage: 2 },
      { attack: 'flamethrower', damage: 20 }
    ]
  }
  attack() {
    const randomAttack = Math.floor(Math.random() * 3)
    return this.attacks[randomAttack]
  }
}

module.exports = Monster
