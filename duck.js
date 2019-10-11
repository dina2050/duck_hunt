var div = document.createElement("div");
document.body.appendChild(div);
div.id = "gamezone";
var img = document.createElement("img");
img.className="img";
gamezone.appendChild(img);
var dog =document.createElement("div");
dog.className="dog";
gamezone.appendChild(dog);
var score = document.createElement("label");
div.appendChild(score);
score.id = "current";
score.innerHTML = "0";
count = score.innerHTML;
click1=null;
click2=null;

ducks = document.getElementsByClassName("duck");

function createDuck() {
    var duck = document.createElement("div");
    div.appendChild(duck);
    duck.className = "duck";
    return duck
};

function setRandomPosition(duck) {
    posX = Math.random() * 520
    posY = Math.random() * 250
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
        count++
        score.innerHTML = count;
        
        if (count%2 == 0) {
            dog.style.display = "block";
            setTimeout(hideDog,1000)
        }
        var duckElement = createDuck();
        setRandomPosition(duckElement);
        duckElement.addEventListener("click", killduck);
    };
                function hideDog() {
                    dog.style.display="none"
                } 