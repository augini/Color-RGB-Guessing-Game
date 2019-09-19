var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#displayColor");
var message = document.getElementById("message");
var header = document.querySelector("h1");
var NewColorButton = document.querySelector("#NewColorB");
var modeButtons = document.getElementsByClassName("mode");

init();

function init() {
    //mode buttons Event listeners
    setupModeButtons();
    //new colors button and resetting the game
    setupSquares();
    //generates new colors and picks one random color
    reset();

}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                message.textContent = "Correct!";
                header.style.backgroundColor = pickedColor;
                NewColorButton.textContent = "Play again?";
                for (var n = 0; n < squares.length; n++) {
                    squares[n].style.backgroundColor = pickedColor;
                }
            } else {
                message.textContent = "Try again!";
                this.style.backgroundColor = "#23232323";
            }
        })
    }
}


function reset() {
    colors = generateRandom(numSquares);
    pickedColor = pickColor();
    displayColor.textContent = pickedColor;
    NewColorButton.textContent = "New Colors";
    message.textContent = " ";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    header.style.backgroundColor = "steelblue";
}


//To customize the new color button so that everytime it resets the colors

NewColorButton.addEventListener("click", function() {
    reset();
})

// To choose different colors every time when we refresh or start the game
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// To generate 6 different colors on every square at the start or refresh
function generateRandom(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        arr.push(randomColor());
    }
    return arr;
}

//To generate just a random color to be used mainly for generateRandom()
function randomColor() {
    //Generating random color for red
    var r = Math.floor(Math.random() * 256);
    //Generating random color for blue
    var g = Math.floor(Math.random() * 256);
    //Generating random color for green
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

for (var i = 0; i < squares.length; i++) {
    squares[i].classList.add("hover-shadow-box-animation");
}