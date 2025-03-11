class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  /** @type {Djevojka} */
  static djevojka;

  /** @type {Novcic} */
  static novcici=[];

  /** @type {Zivot} */
  static zivot;

  //** @type {Kamen} */
  //static kamen;

  /** @type {Neprijatelj} */
  static zaba;

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  static dno = 8 * 64;

}