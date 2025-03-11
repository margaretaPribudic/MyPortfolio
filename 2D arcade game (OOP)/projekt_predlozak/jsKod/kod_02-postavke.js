//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="kod_01-likovi.js"/>

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

/*const btnGame = document.getElementById("btnGame");
//const gameoverEvent = new Event("gameover");

const gameoverEvent = new CustomEvent("gameover", {
  detail: {
    win: false
  }
});

const winEvent = new CustomEvent("gameover", {
  detail: {
    win: true
  }
});

function kraj(ev) {
  //console.log(ev);  
  btnStop_click();
  if (ev.detail.win) {
    console.log("Pobjeda");
  }
  else {
    console.log("Izgubili ste!");
  }
}

btnGame.addEventListener("gameover", kraj);*/

function setup() {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "v10":
      setupVjezbe10();
      break;

    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */
function setupVjezbe10() {
  GAME.clearSprites();

  GAME.activeWorldMap.setCollisions("platforme");

  Postavke.djevojka = new Djevojka(0,0,GAME.getSpriteLayer("djevojka"));
  GAME.addSprite(Postavke.djevojka);
  Postavke.djevojka.start();


  Postavke.zaba1 = new Neprijatelj(GAME.getSpriteLayer("zaba1"));
  Postavke.zaba1.visible = true;
  GAME.addSprite(Postavke.zaba1);

  let c=["coin1","coin2","coin3"];

  for (let i = 0; i < c.length; i++) {
    let layer=GAME.getSpriteLayer(c[i]);
     let co = new Novcic(layer);
     co.visible = true;
     GAME.addSprite(co);
     Postavke.novcici.push(co);
  }




  //Postavke.kamen = new Kamen(GAME.getSpriteLayer("kamen"));
  //GAME.addSprite(Postavke.kamen);


  Postavke.zivot=new Zivot(GAME.getSpriteLayer("zivot"));
  GAME.addSprite(Postavke.zivot);


}
