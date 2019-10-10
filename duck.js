var div = document.createElement("div");
document.body.appendChild(div);
div.id = "gamezone";
ducks = document.getElementsByClassName("duck");

function createDuck() {
    var duck = document.createElement("div");
    div.appendChild(duck);
    duck.className = "duck";
    return duck
};

function setRandomPosition(duck) {
    posX = Math.random() * 520
    posY = Math.random() * 420
    duck.style.top = posY + "px"
    duck.style.left = posX + "px"
};
for (let i = 0; i < 15; i++) {
    var duckElement = createDuck();
    setRandomPosition(duckElement)
    duckElement.addEventListener("click", killduck)

}

function move() {
    ducks = document.getElementsByClassName("duck")
    for (let i = 0; i < ducks.length; i++) {
        setRandomPosition(ducks[i]);
        ducks[i].style.transitionDuration = "4s";
    };
};

setInterval(move, 1000)

function killduck(event) {
    this.remove();
    var duckElement = createDuck();
    setRandomPosition(duckElement);
    duckElement.addEventListener("click", killduck);
};