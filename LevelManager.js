class LevelManager {
    constructor(ctx, canvas) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.currentLevel = 0;
    }

    run() {
        console.log("Level Manager started");
        this.loadLevel(this.currentLevel);
    }

    loadLevel(levelIndex) {
        console.log(`Loading level ${levelIndex}`);
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    nextLevel() {
        this.currentLevel++;
        this.loadLevel(this.currentLevel);
    }
}

export default LevelManager;