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
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {

  if (GAME.activeWorldMap.name == "v10")
    vjezbe10();

  GAME.update();

};

function vjezbe10() {
  if (SENSING.left.active) {
    Postavke.djevojka.moveLeft();
  }

  if (SENSING.right.active) {
    Postavke.djevojka.moveRight();
  }

  if (SENSING.up.active) {
    Postavke.djevojka.jump();
  }

  for(let i=0; i<Postavke.novcici.length;i++){  
    const c=Postavke.novcici[i];
    if (Postavke.djevojka.touching(c)){
    Postavke.djevojka.collect(c);
    console.log(Postavke.djevojka.bodovi);
    //if(Postavke.djevojka.bodovi==3){
      //alert("Bravo, prešli ste igricu!");
      //btnStop_click();  
    //}
    }
  }
  
  if (Postavke.djevojka.touching(Postavke.zivot)) {
    Postavke.djevojka.zivoti++;
    console.log(Postavke.djevojka.zivoti);
    Postavke.zivot.visible=false;
  }

  if(Postavke.djevojka.touching(Postavke.zaba1)){
    if(SENSING.space.active){
      Postavke.zaba1.visible=false;
    }
    else{
      Postavke.djevojka.zivoti--;
      console.log(Postavke.djevojka.zivoti);
      Postavke.djevojka.start();
    }
  }

  /*if (SENSING.space.active) {
    Postavke.djevojka.bacaj(Postavke.kamen);
  }

  if (Postavke.kamen.touching(Postavke.zaba1)) {
    Postavke.kamen.stop();
    Postavke.zaba1.visible = false;
  }*/

}
