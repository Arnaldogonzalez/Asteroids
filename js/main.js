// GENERATE ASTEROIDS IN HTML DOCUMENT
var asteroids = require('./createAsteroids.js');
asteroids();
var shipMove = require( './controls.js');
var collision = require('./collisions.js');
var loopCounter = 0;
var asteroidCounter = 0;


function gameLoop()
{
  shipMove();
  // check position of ship on screen
  // count how many times we've been through the gameLoop
  loopCounter++;
  // every 33 cycles (three times a second), launch a new asteroid BY GIVING IT A CLASS OF "MOVING"
  // but only do this 100 times
  if (loopCounter >= 32 && asteroidCounter <= 100) {
    document.getElementById("asteroid" + asteroidCounter.toString()).className = "moving";
    asteroidCounter++;
    loopCounter = 0;
  }
     collision();
     window.requestAnimationFrame(gameLoop);

  // loop
  // setTimeout(gameLoop,10);
}
gameLoop();
