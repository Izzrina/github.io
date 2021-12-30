const canvas = document.getElementById("field");
const ctx = canvas.getContext("2d");

const explosion = document.querySelector("#hit");
const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

let laser = new Audio("laserSmall_000.ogg");

let score = 0;
let speed = 1;
let landed = false;

let ufos1 = [];
let ufos2 = [];
let ufos3 = [];
let ufos4 = [];
let ufos5 = [];

function myRandom(min, max) {
    var x = Math.random(); // [0.0 .. 1.0]
    var y = (max - min) * x + min;
    return myRound(y);
}
function myRound(n) {
    return Math.round(n);
}

function createUfos1() {
    ufo1 = {
        x: myRandom(0, 150),
        y: -400,
        width: 120,
        height: 80,
        src: "ufo-3157681_1280 (1).png",
        img: new Image()
    };
    ufo1.img.src = ufo1.src;
    ufos1.push(ufo1);
}

function createUfos2() {
    ufo2 = {
        x: myRandom(200, 350),
        y: -600,
        width: 130,
        height: 90,
        src: "ufo-3157681_1280 (1).png",
        img: new Image()
    };
    ufo2.img.src = ufo2.src;
    ufos2.push(ufo2);
}

function createUfos3() {
    ufo3 = {
        x: myRandom(300, 450),
        y: -800,
        width: 100,
        height: 60,
        src: "ufo-3157681_1280 (1).png",
        img: new Image()
    };
    ufo3.img.src = ufo3.src;
    ufos3.push(ufo3);
}

function createUfos4() {
    ufo4 = {
        x: myRandom(500, 650),
        y: -1000,
        width: 120,
        height: 80,
        src: "ufo-3157681_1280 (1).png",
        img: new Image()
    };
    ufo4.img.src = ufo4.src;
    ufos4.push(ufo4);
}

function createUfos5() {
    ufo5 = {
        x: myRandom(700, 850),
        y: -1000,
        width: 130,
        height: 90,
        src: "ufo-3157681_1280 (1).png",
        img: new Image()
    }
    ufo5.img.src = ufo5.src;
    ufos5.push(ufo5);
}



function update() {

    if (score >= 10) {
        speed = 2;
    }
    if (score >= 20) {
        speed = 3;
    }
    if (score >= 30) {
        speed = 4;
    }
    if (score >= 40) {
        speed = 5;
    }
    if (score >= 50) {
        speed = 6;
    }


    ufo1.y += speed;
    if (ufo1.y > 600) {
        ufos1.shift(ufo1);
        landed = true;
        document.getElementById("hit").classList.add("hide");
        clearInterval(timer);

    }

    ufo2.y += speed;
    if (ufo2.y > 600) {
        ufos2.shift(ufo2);
        landed = true;
        document.getElementById("hit").classList.add("hide");
        clearInterval(timer);

    }

    ufo3.y += speed;
    if (ufo3.y > 600) {
        ufos3.shift(ufo3);
        landed = true;
        document.getElementById("hit").classList.add("hide");
        clearInterval(timer);
    }

    ufo4.y += speed;
    if (ufo4.y > 600) {
        ufos4.shift(ufo4);
        landed = true;
        document.getElementById("hit").classList.add("hide");
        clearInterval(timer);
    }

    ufo5.y += speed;
    if (ufo5.y > 600) {
        ufos5.shift(ufo5);
        landed = true;
        document.getElementById("hit").classList.add("hide");
        clearInterval(timer);

    }

    draw(canvas);
}

canvas.addEventListener("click", (e) => {

    var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left);  // Subtract the 'left' of the canvas 
    var canvasY = Math.round(e.clientY - cRect.top);

    console.log(ufos1);
    console.log(ufos5);

    if (e.target === canvas) {
        laser.play();
    }

    if (canvasX > ufo1.x &&
        canvasX < ufo1.x + ufo1.width &&
        canvasY > ufo1.y &&
        canvasY < ufo1.y + ufo1.height) {
        score += 1;
        explosion.style.top = e.clientY + "px";
        explosion.style.left = e.clientX + "px";
        document.getElementById("hit").classList.remove("hide");

        ufos1.shift(ufo1);
        createUfos1();

    }

    if (canvasX > ufo2.x &&
        canvasX < ufo2.x + ufo2.width &&
        canvasY > ufo2.y &&
        canvasY < ufo2.y + ufo2.height) {
        score += 1;
        document.getElementById("hit").classList.remove("hide");

        explosion.style.top = e.clientY + "px";
        explosion.style.left = e.clientX + "px";
        document.getElementById("hit").classList.remove("hide");

        ufos2.shift(ufo2);
        createUfos2();
    }

    if (canvasX > ufo3.x &&
        canvasX < ufo3.x + ufo3.width &&
        canvasY > ufo3.y &&
        canvasY < ufo3.y + ufo3.height) {
        score += 1;
        document.getElementById("hit").classList.remove("hide");

        explosion.style.top = e.clientY + "px";
        explosion.style.left = e.clientX + "px";
        document.getElementById("hit").classList.remove("hide");

        ufos3.shift(ufo3);
        createUfos3();
    }
    if (canvasX > ufo4.x &&
        canvasX < ufo4.x + ufo4.width &&
        canvasY > ufo4.y &&
        canvasY < ufo4.y + ufo4.height) {
        score += 1;
        document.getElementById("hit").classList.remove("hide");

        explosion.style.top = e.clientY + "px";
        explosion.style.left = e.clientX + "px";
        document.getElementById("hit").classList.remove("hide");

        ufos4.shift(ufo4);
        createUfos4();
    }
    if (canvasX > ufo5.x &&
        canvasX < ufo5.x + ufo5.width &&
        canvasY > ufo5.y &&
        canvasY < ufo5.y + ufo5.height) {
        score += 1;
        document.getElementById("hit").classList.remove("hide");

        explosion.style.top = e.clientY + "px";
        explosion.style.left = e.clientX + "px";
        document.getElementById("hit").classList.remove("hide");

        ufos5.shift(ufo5);
        createUfos5();
    }
    draw(canvas);
});


function draw() {

    canvas.width = canvas.width;

    ufos1.forEach(function (ufo1) {
        ctx.drawImage(ufo1.img, ufo1.x, ufo1.y, ufo1.width, ufo1.height);
    });

    ufos2.forEach(function (ufo2) {
        ctx.drawImage(ufo2.img, ufo2.x, ufo2.y, ufo2.width, ufo2.height);
    });

    ufos3.forEach(function (ufo3) {
        ctx.drawImage(ufo3.img, ufo3.x, ufo3.y, ufo3.width, ufo3.height);
    });

    ufos4.forEach(function (ufo4) {
        ctx.drawImage(ufo4.img, ufo4.x, ufo4.y, ufo4.width, ufo4.height);
    });

    ufos5.forEach(function (ufo5) {
        ctx.drawImage(ufo5.img, ufo5.x, ufo5.y, ufo5.width, ufo5.height);
    });

    ctx.fillStyle = "black";
    ctx.font = " bold 30px Courier New";
    ctx.fillText("Score " + score, canvas.width - 180, 30);

    if (landed == true) {
        ctx.fillStyle = "black"
        ctx.font = "bold 150px Courier New";
        ctx.fillText("Game Over", 50, 200);
    }

}

function play() {

    //document.getElementById("hit").classList.remove("hide");
    document.getElementById("startBtn").classList.add("hide");
    document.getElementById("resetBtn").classList.remove("hide");

    createUfos1();
    createUfos2();
    createUfos3();
    createUfos4();
    createUfos5();

    draw();

    timer = setInterval(update, 10);


}

function reset() {
    document.location.reload();
}
