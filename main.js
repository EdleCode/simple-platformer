import LevelManager from './LevelManager.js';
import Player from './Player.js';

const canvas = document.createElement('canvas');
const ctx    = canvas.getContext('2d');

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.position = 'fixed';
canvas.style.bottom   = '0';
canvas.style.left     = '0';
canvas.style.backgroundColor = 'black';
canvas.style.display         = 'block';
document.body.style.margin   = '0';
document.body.style.overflow = 'hidden';
document.body.appendChild(canvas);

const levelManager = new LevelManager(ctx, canvas);

async function startGame() {
    await levelManager.init();

    const { x, y } = levelManager.levelDef.startPosition;
    const player = new Player(x, y);

    let lastTime = 0;

    function loop(timestamp) {
        const deltaTime = (timestamp - lastTime) / 1000;
        lastTime = timestamp;

        player.update(deltaTime);
        levelManager.update(player, deltaTime);
        levelManager.render(player);

        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    window.addEventListener('resize', () => {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        const bounds = levelManager.spaceManager.activeSpace.bounds;
        levelManager.zoneTrigger.setContext(bounds, canvas.width, canvas.height);
        levelManager.cameraMovement.setSpaceLevel(
            bounds,
            levelManager.levelDef.startPosition,
            null,
            levelManager.levelDef.camHeightMotion ?? 0
        );
    });

}

startGame().catch(err => {
    console.error('[main] Error at game start :', err);
});
