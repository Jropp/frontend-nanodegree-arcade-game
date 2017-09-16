var Enemy = function(enemyX, enemyY, enemySpeed, row) {//constructor for enemies
	this.x = enemyX;
    this.y = enemyY;
    this.row = row;
    this.front = "";
    this.col = "";
	this.speed = enemySpeed;
	this.sprite = 'images/enemy-bug.png';
};
Enemy.prototype.render = function() {//draws the enemy on string (called in engine.js line 150)
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemy.prototype.update = function(dt) {
    this.x = this.x + this.speed * dt;
	if (this.x > 550) {
        this.x = -50;
		this.speed = 100 + Math.round(Math.random() * 50 * player.points);//as points increase the bugs get faster
    };
    if (0 < this.x && this.x > 33) {
        this.col = "#1" 
        this.front = "#2" //broadens the size of the bug presence on the canvas so that the game triggers a collision when it actually appears that they have collided rather than waiting for the bug to be halfway throught he character.
        };
    if (34 < this.x && this.x > 66) {
        this.col = "#2";
        this.front = "#3"
    }; 
    if (67 < this.x && this.x > 100) {
        this.col = "#3";
        this.front = "#4"
    }; 
    if (101 < this.x && this.x > 133) {
        this.col = "#4";
        this.front = "#5"
    }; 
    if (134 < this.x && this.x > 166) {
        this.col = "#5";
        this.front = "#6"
    };
    if (167 < this.x && this.x > 200) {
        this.col = "#6";
        this.front = "#7"
    };
    if (201 < this.x && this.x > 233) {
        this.col = "#7";
        this.front = "#8"
    };
    if (234 < this.x && this.x > 266) {
        this.col = "#8";
        this.front = "#9"
    };
    if (267 < this.x && this.x > 300) {
        this.col = "#9";
        this.front = "#10"
    };
    if (301 < this.x && this.x > 333) {
        this.col = "#10";
        this.front = "#11"
    };
    if (334 < this.x && this.x > 366) {
        this.col = "#11";
        this.front = "#12"
    };
    if (367 < this.x && this.x > 400) {
        this.col = "#12";
        this.front = "#13"
    };
    if (401 < this.x && this.x > 433) {
        this.col = "#13";
        this.front = "#14"
    };
    if (434 < this.x && this.x > 466) {
        this.col = "#14"; 
        this.front = "#15"      
    };
    if (467 < this.x && this.x > 500) {
        this.col = "#15";
        this.front = "#16"
    };
    if (this.row === player.row && this.col === player.col) {
       player.collide();
    };
    if (this.row === player.row && this.front === player.col) {
       player.collide();
    };

};
var Player = function(playerX, playerY, playerSpeed) {//constructor for the player you control
    this.x = playerX;
    this.y = playerY;
    this.row = "grass1";
    this.col = "#2";
	this.update = function() {//sets the player location, updates points, sets row so that you can check equality of row with a bug for collision function
        if (this.y === -25) {
            this.row = "water";
            this.points++;
            this.x = 400;
            this.y = 375;
        }
        else if (this.y === 55) {
            this.row = "brick1";
        }
        else if (this.y === 135) {
            this.row = "brick2";
        }
        else if (this.y === 215) {
            this.row = "brick3";
        }
        else if (this.y === 295) {
            this.row= "grass";
        }
        else if (this.y === 375) {
            this.row = "grass";
        };
        if (0 < this.x && this.x > 33) {//sets the column property to see if the bug and the player overlap if in the same row
            this.col = "#1"
            };
        if (34 < this.x && this.x > 66) {
            this.col = "#2";
        }; 
        if (67 < this.x && this.x > 100) {
            this.col = "#3";
        }; 
        if (101 < this.x && this.x > 133) {
            this.col = "#4";
        }; 
        if (134 < this.x && this.x > 166) {
            this.col = "#5";
        };
        if (167 < this.x && this.x > 200) {
            this.col = "#6";
        };
        if (201 < this.x && this.x > 233) {
            this.col = "#7";
        };
        if (234 < this.x && this.x > 266) {
            this.col = "#8";
        };
        if (267 < this.x && this.x > 300) {
            this.col = "#9";
        };
        if (301 < this.x && this.x > 333) {
            this.col = "#10";
        };
        if (334 < this.x && this.x > 366) {
            this.col = "#11";
        };
        if (367 < this.x && this.x > 400) {
            this.col = "#12";
        };
        if (401 < this.x && this.x > 433) {
            this.col = "#13";
        };
        if (434 < this.x && this.x > 466) {
            this.col = "#14";       
        };
        if (467 < this.x && this.x > 500) {
            this.col = "#15";
        };
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(40,0,70,70);//draws a white rectangle over top of old numbers to make way for new numbers.
        ctx.fillStyle = "#000000";
        ctx.fillText("Points: " + this.points, 50,10);//draws the points
        ctx.fillText("Lives: " + this.lives, 50,30);//draws lives 
	}; 
    this.speed = playerSpeed;
    this.points = 0;
    this.lives = 3;
    this.collide = function  () {
       window.alert("Dead");
       this.x = 400;
       this.y = 375;
       this.col = "#10";
       this.row = "grass1";
       this.lives = (this.lives - 1);
       if (this.lives === 0) {
           window.alert("GAME OVER! Your score: " +this.points);
           this.lives = 3;
           this.x = 400;
           this.y = 375;
           this.points = 0;
        }; 
    }
	this.handleInput = function(dir) { //takes cues from document.addEventListener
            if (dir === "up") {
                this.y -= playerSpeed;
            } else if (dir === "down") {
                if (player.y != 375) {//keeps player from moving off screen.
                    this.y += playerSpeed;
                }
            } else if (dir === "left") {
                if (player.x != 0) {
                    this.x -= playerSpeed;
                }
            } else if (dir === "right") {
                if (player.x != 400) {
                    this.x += playerSpeed;
                }
            }    
    };
	this.sprite = 'images/char-boy.png';
}
//INSTANTIATION OF OBJECTS**************
// Place the player object in a variable called player
var player = new Player(400, 375, 80, );
var enemy1 = new Enemy(-250, 50, 600, "brick1");
var enemy2 = new Enemy(-110, 150, 300, "brick2");
var enemy3 = new Enemy(-300, 225, 200, "brick3");
var enemy4 = new Enemy(-500, 50, 400, "brick1");
var enemy5 = new Enemy(-300, 150, 300, "brick2");
var enemy6 = new Enemy(-500, 225, 500, "brick3");
var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6]; //array of enemy bug objects. Function iterates through these.
// *****************************************
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};
	player.handleInput(allowedKeys[e.keyCode]);
});