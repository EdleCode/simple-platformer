import LevelManager from './levelManager.js';

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.backgroundColor = 'black';
canvas.style.display = 'block';
document.body.style.margin = '0';
document.body.style.overflow = 'hidden';

document.body.appendChild(canvas);

const levelManager = new LevelManager(ctx, canvas);
levelManager.run();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    levelManager.loadLevel(levelManager.currentLevel);
});
