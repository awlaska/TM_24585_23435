var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'jogo',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var enemyInfo = {
    width: 40,
    height: 20,
    count: {
        row: 5,
        col: 9
    },
    offset: {
        top: 100,
        left: 60
    },
    padding: 5
};

var game = new Phaser.Game(config);

function preload(){
    //Carregar assets
    this.load.image("mFalcon", "asset/falcon.png")
    this.load.image("tiefigther", "asset/tief.png")
    this.load.image("laser", "asset/laser_azul.png")
    this.load.image("deathstar", "asset/deathstar.png")
}

enemyInfo = {
    width: 40,
    height: 20,
    count: {
        row: 5,
        col: 9
    },
    offset: {
        top: 100,
        left: 60
    },
    padding: 5
};

function create(){
    //

}

function update(){
    //

}