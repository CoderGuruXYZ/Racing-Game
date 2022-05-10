var keys = [];

window.onkeydown = function (event) {
    keys[event.key] = true;
    event.preventDefault();
}

window.onkeyup = function (event) {
    keys[event.key] = false;
}

function checkCollisions(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
        return true;
    } else {
        return false
    }
}

var player = new Player(13.5, 13.5);

var timeout;

function tick(tickTime) {
    timeout = window.setTimeout(update, tickTime);
}

function update() {
    canvas = document.getElementById("gc");
    ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    player.move();

    player.draw();

    window.clearTimeout(timeout);

    tick(11);
}

update();