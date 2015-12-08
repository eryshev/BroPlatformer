import PIXI from 'pixi.js';
import p2 from 'p2';

import Plate from './Plate';
import Man from './Man';

const viewPort = [window.innerWidth, window.innerHeight];

const renderer = PIXI.autoDetectRenderer(viewPort[0], viewPort[1], {
    backgroundColor: 0x999999
});
document.body.appendChild(renderer.view);

const stage = new PIXI.Container();
stage.x = viewPort[0] / 2;
stage.y = viewPort[1] / 2;

const world = new p2.World();
const objects = [];

const plate = new Plate({
    x: 0,
    y: 0,
    width: 100,
    height: 15
});
plate.addTo(stage, world);
objects.push(plate);

const man = new Man({
    x: 0,
    y: 100
});
man.addTo(stage, world);
objects.push(man);

let lastTimeUpdate = Date.now();

function render() {
    requestAnimationFrame(render);

    const now = Date.now();
    const delta = now - lastTimeUpdate;

    world.step(delta / 1000);

    objects.forEach(el => el.update());

    renderer.render(stage);

    lastTimeUpdate = now;
}

render();
