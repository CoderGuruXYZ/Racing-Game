function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.speed = 0.5;
    this.check = function checkCollisions(rect2) {
        if (this.x < rect2.x + rect2.width &&
            this.x + this.width > rect2.x &&
            this.y < rect2.y + rect2.height &&
            this.height + this.y > rect2.y && rect2.alive) {
            return true;
        } else {
            return false;
        }
    };
}

Player.prototype.move = function () {
    if (keys["ArrowDown"]) {
        this.y += this.speed;
    }

    if (keys["ArrowUp"]) {
        this.y -= this.speed;
    }

    if (keys["s"]) {
        this.y += this.speed;
    }

    if (keys["w"]) {
        this.y -= this.speed;
    }

    if (this.x >= 990) {
        this.x = 990;
    }

    if (this.x <= 0) {
        this.x = 0;
    }

    if (this.y >= 290) {
        this.y = 290;
    }

    if (this.y <= 0) {
        this.y = 0;
    }
}

Player.prototype.draw = function () {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
}