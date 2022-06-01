class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    create() {
        // create variables
        this.VelX = 500;
        this.jumpVel= -700;

        // add background
        this.sunset = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'Sunset').setOrigin(0).setScale(7);

        // add parralax scolling
        this.clouds = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'Clouds').setOrigin(0).setScale(7);
        this.far = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'FarCity').setOrigin(0).setScale(7);
        this.close = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'CloseCity').setOrigin(0).setScale(7);



        this.add.text(20, 20, "ROBO RUNNER PLay");

        this.add.text(20, 40, "Work in Progress");

        // Create Floor
        // make ground tiles group 
        this.ground = this.add.group();
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'Grass').setScale(0.25).setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.ground.add(groundTile);
        }

        // Set-up Robot
        this.Robot = this.physics.add.sprite(game.config.width/5, game.config.height/6, 'Robot').setScale(SCALE);

        // add physics colliders
        this.physics.add.collider(this.Robot, this.ground);

        // set up Phaser-provided cursor key input
        cursors = this.input.keyboard.createCursorKeys();


    }

    update() {

        // make background layers scroll
        this.clouds.tilePositionX -= 0.01;
        this.close.tilePositionX -= 0.04;
        this.far.tilePositionX -= 0.02;
        
        // Left/Right Movement
        if(cursors.left.isDown) {
            // set alien velocity here (.setVelocityX())
            // A negative value moves left
            this.Robot.setVelocityX(-200);

            // Animation
            // play(key [, ignoreIfPlaying] [, startFrame])
            this.Robot.setFlip(true, false);
            // this.Robot.anims.play('walk', true);

        } else if(cursors.right.isDown) {
            // Set alien velocity here (.setVelocityX())
            // A positive value moves right
            this.Robot.setVelocityX(200);

            // Animation and arrow key tinting
            this.Robot.resetFlip();
            // this.Robot.anims.play('walk', true);
        } else {
            // Set alien velocity to zero here (.setVelocityX())
            this.Robot.setVelocityX(0);

            // Animation and arrow key tinting
            // this.Robot.anims.play('idle');
        }
        
        // Jump
        if(this.Robot.body.touching.down && Phaser.Input.Keyboard.JustDown(cursors.up)) {
            // set jump velocity here
            this.Robot.setVelocityY(-700);
        }


    }
}