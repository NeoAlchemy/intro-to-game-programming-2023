---
slug: move-sprite
title: How to Create and Use Cursor Keys to Move Sprite
authors: [NeoAlchemy]
tags: [coding]
---

Once you have a sprite you will need to move the sprite for your game.  Sometimes people have the sprite just move up and down like in pong.    In that case you would just need the up and down arrow.  Perhaps it's flappy birds and you just need the space bar to fly the bird.  Sometimes like in Asteroid or Tank the up and down moves the sprite forwards and backwards, but the left and right rotate the sprite.  What you need to be aware of is how to know when a keyboard button is pressed.  Afterwards you will need to know what game mechanics that press does.

## Code Example

### Create Cursor Keys

In the `create` method of your `Main Level` you will need to create a cursor key listener.  You will also need to assign the return value to a private member of the `Main Level` class.

```js
create() {
    // there may be code above
    const cursorKeys = this.input.keyboard.createCursorKeys();
    this.cursorKeys = cursorKeys;
    // there may be code below
}

// there may be other private members above
private cursorKeys: Phaser.Types.Input.Keyboard.CursorKeys;
// there may be other private members below
```

### Code for cursor key pressed

```js
update() {
    // there may be code above

    moveSprite() // or call this something else
    
    // there may be code below
}

moveSprite() {
    if (this.cursorKeys.up.isDown) {
      // add code to move sprite
    }

    if (this.cursorKeys.down.isDown) {
      // add code to move sprite 
    }
}
```

## Helpful code

using sprite as the private name for your hero, character, ship, snake or whatever your sprite is.  Feel free to rename below

```js
this.sprite.x += 1; // will move your sprite right

this.sprite.x -= 1; // will move your sprite left

this.sprite.y += 1; // will move your sprite up

this.sprite.y -= 1; // will move your sprite down

this.sprite.angle += 15 // will move your sprite by 15 degrees
```

this complex code might be helpful if you need to move a character forward when at an angle

```js
update() {
    this.moveSprite();    
}

moveSprite() {
    if (this.cursorKeys.up.isDown) {
        // to move sprite by 4 pixels instead of 1
        this.moveForward(this.sprite, 4) 
    }
}

moveForward(gameObject: Phaser.GameObjects.Sprite, speed: number = 1) {
    //angle in radians
    var angleRad = (gameObject.angle - 90) * (Math.PI / 180); 
    
    gameObject.x = gameObject.x + 1 * Math.cos(angleRad) * speed;
    gameObject.y = gameObject.y + 1 * Math.sin(angleRad) * speed;
}

```