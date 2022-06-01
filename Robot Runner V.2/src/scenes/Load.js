class Load extends Phaser.Scene {
    constructor() {
        super('loadScene');
    }

    preload() {
        // loading bar
        // see: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/loader/
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, centerY, w * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        // set load path
        this.load.path = './assets/';

        // load graphics assets
        this.load.image('Robot', 'Robot.png');
        this.load.image('LowOb', 'LowOb.png');
        this.load.image('Grass', 'Grass.png');
        this.load.image('FarCity', 'farCity_Bg.png');
        this.load.image('CloseCity', 'closeCity_Bg.png');
        this.load.image('Sunset', 'sunset_Bg.png');
        this.load.image('Clouds', 'clouds_Bg.png');


        // load spritesheet
        this.load.spritesheet('Running', 'Robot_Run.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 10});
        this.load.spritesheet('Idling', 'Robot_Idle.png', {frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 8});


        // load audio assets
        this.load.audio('startgame', 'startgame.mp3');
        
    }

    create() {
        // check for local storage browser support
        if(window.localStorage) {
            console.log('Local storage supported');
        } else {
            console.log('Local storage not supported');
        }


        // create animations
        
        
        // go to Title scene
        this.scene.start('menuScene');
    }
}

// Copied from Nathan Altice PaddleParkourP3 on GitHub