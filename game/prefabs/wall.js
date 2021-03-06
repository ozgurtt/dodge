'use strict';

var Wall = function(game, x, y, width, height, asset) {
  Phaser.TileSprite.call(this, game, x, y, width, height, asset);

  // Enable physics on the wall sprite
  // (for collision detection)
  this.game.physics.arcade.enableBody(this);

  // Add autosrcoll to walls
  this.autoScroll(-250, 0);

  // Make wall objects unaffected by gravity
  this.body.allowGravity = false;

  // Make wall objects unaffected by collisions
  this.body.immovable = true;
  
};

Wall.prototype = Object.create(Phaser.TileSprite.prototype);
Wall.prototype.constructor = Wall;

Wall.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Wall;
