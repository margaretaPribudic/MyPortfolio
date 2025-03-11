//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// ovdje pišete svoje klase

class Djevojka extends Sprite {
    constructor(x, y, layer) {
        super(x, y, 60, 60);
        this.frame_sets = {
            "up": [0],
            "walk-up": [0],
            "right": [0],
            "walk-right": [0,1,2,3,0],
            //"down": [0],
            //"walk-down": [0],
            "left": [8],
            "walk-left": [8,9,10,11,8]
        };

        this.bodovi = 0;
        this.zivoti = 3;

        this.layer = layer;
        this.visible = true; //tek kad se postavi layer

    }

    get bodovi() {
      return this._bodovi;
    }
    set bodovi(v) {
      if(v==3){
        GameSettings.output("Pobijedili ste")
        btnStop_click();
      }
      this._bodovi = v;
    }
  
  get zivoti() {
      return this._zivoti;
    }
  set zivoti(v) {
      if(v==1){
          this._zivoti=1;
          Postavke.zivot.visible=true;
      }
      else if (v <= 0) {
        this._zivoti = 0;
        GameSettings.output("Izgubili  ste")
        btnStop_click();
      }
      else {
        this._zivoti = v;
      }
  }



    start(){
        this.x=64;
        this.y=6*64;
    }

    touching(sprite) {
        if (sprite == null || sprite == undefined) return false;
    
        let rez = super.touching(sprite);
    
        return rez;
    }

    moveRight() {
        this.direction = 90;
        this.velocity_x += 1.5;
    }
    
    moveLeft() {
        this.direction = 270;
        this.velocity_x -= 1.5;
    }

    jump(h = 50) {

        if (!this.jumping) {
    
          this.jumping = true;
          this.velocity_y -= h;
    
        }
    }

    updatePosition() {
        super.updatePosition(2, 0.8);
    
        if (this.y >= Postavke.dno) {
          this.start();
          this.zivoti--;
        }
    
    }

    bacaj(b) {
        b.put = 0;
        b.x = this.x;
        b.y = this.y;
        b.visible = true;
        b.move = true;
    }

    collect(c) {
        this.bodovi++;
        c.visible=false;
    }
  }



/*class Kamen extends Item {
    constructor(layer) {
      super(layer);
      this.visible = false;
      this.put = 0;
      this.move = true;
    }
  
    get put() {
      return this._put;
    }
    set put(v) {
      if (v >=128) {
        this._put = 0;
        this.move = false;
        this.visible = false;
      }
      else {
        this._put = v;
      }
    }
  
    updatePosition() {
      if (this.move) {
          this.x -= 5;
          this.put += 5;
      }
      //console.log(this.put);
    }
  
    stop() {
      this.visible = false;
      this.move = false;
    }
  }*/


class Collectable extends Item{
    
    constructor(layer) {
        super(layer);
    
    }
    
    getType() {
        return this.constructor.name;
    }
}

class Novcic extends Collectable{

    constructor(layer) {
        super(layer);
        this.visible = true;
        //this.value = 1;
    }
    
    start() {
        this.x = Postavke.random(0, 18*64);
        this.y = Postavke.random(0, 8*64);
    }
}

class Zivot extends Collectable{

    constructor(layer) {
        super(layer);
        //this.visible = true;
    }
}

class Neprijatelj extends Item{
    constructor(layer){
        super(layer)
        this.y-=2*64;
    }
}
