let config = {
    type: Phaser.AUTO,
    width: 960,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { 
                x: 0,
                y: 1200 
            }
        }
    },
    scene: [ Load, Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve useful variables
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;

let cursors;
const SCALE = 0.25;
const tileSize = 35;