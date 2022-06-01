class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {
        // create background tile sprites


        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#03d5ff',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROBOT RUNNER', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use ↑ to jump, ← & → to move', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#6edbdb';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press → to Start Game', menuConfig).setOrigin(0.5);

        
    }

    update() {

        //Check to start game
        if(cursors.right.isDown) {
            this.sound.play('startgame');
            this.scene.start('playScene');
        }
        
    }
}