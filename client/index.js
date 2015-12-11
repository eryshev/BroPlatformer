(function(global) {

    global.p2 = require("phaser/dist/p2");
    global.PIXI = require("phaser/dist/pixi");
    global.phaser = require("phaser/dist/phaser");

}(window));

var Phaser = window.phaser;
var PIXI = window.PIXI;
var P2 = window.p2;

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('sky', 'sky.png');
    game.load.image('ground', 'platform.png');
    game.load.image('star', 'star.png');
    game.load.spritesheet('dude', 'dude.png', 32, 48);
}

function create() {
    game.add.sprite(0, 0, 'sky');
}

function update() {
}
