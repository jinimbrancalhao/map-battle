class Player {
  constructor(name, hp) {
    this.name = name
    this.hp = hp
    this.attacks = [
      { attack: 'kick', damage: 15 },
      { attack: 'Punch', damage: 10 }
    ]
  }
  attack() {
    const randomAttack = Math.floor(Math.random() * 2)
    return this.attacks[randomAttack]
  }
}

module.exports = Player
