function Monter(name, damage, hp, df, counterAttack) {
  this.name = name;
  this.damage = this.damage;
  this.hp = hp;
  this.df = df;
  this.counterAttack = counterAttack;

  this.attack = function (monter) {
    monter.hp -= this.damagev - monter.df;
    this.hp -= monter.counterAttack;
  };

  this.getHp = function () {
    return this.hp > 0 ? this.hp : 0;
  };
}

Monter.prototype.type = "Thổ";

const caMap = new Monter("Cá mập", 50, 600, 50, 50);
const daiBang = new Monter("Đại bàng", 200, 500, 200, 150);

// const hanuu = {
//   name: "Linh Hưu",
//   damage: 80,
//   hp: 100,
//   df: 20,
//   counterAttack: 50,
//   attack: function (monter) {
//     monter.hp -= this.damagev - monter.df;
//     this.hp -= monter.counterAttack;
//   },
//   getHp: function () {
//     return this.hp > 0 ? this.hp : 0;
//   },
// };

// const fish = {
//   name: "Cá mập",
//   damage: 70,
//   hp: 110,
//   df: 30,
//   attack: function (monter) {
//     monter.hp -= this.damagev - monter.df;
//     this.hp -= monter.counterAttack;
//   },
//   getHp: function () {
//     return this.hp > 0 ? this.hp : 0;
//   },
// };

while (true) {
  caMap.attack(daiBang);
  if (daiBang.getHp() <= 0) {
    console.log("Cá mập win");
    break;
  }

  daiBang.attack(caMap);
  if (caMap.getHp() <= 0) {
    console.log("ĐẠi bàng win");
    break;
  }
}

console.table(daiBang);
console.table(caMap);
