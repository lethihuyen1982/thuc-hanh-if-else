function moveUp() {
    let top = document.getElementById("tank").style["top"]
    top = parseInt(top)
    if (top > 0) {
        top = top - 19
        document.getElementById("tank").style["top"] = top + "px"
        document.getElementById("tank").style["transform"] = "rotate(360deg)"
    }
    let left = parseInt(document.getElementById("tank").style['left']);
    if (top == 0 & left == 38) {
        explose()
    }

}

function moveDown() {
    let top = document.getElementById("tank").style["top"]
    top = parseInt(top)
    if (top < 171) {
        top = top + 19
        document.getElementById("tank").style["top"] = top + "px"
        document.getElementById("tank").style["transform"] = "rotate(180deg)"
    }
    let left = parseInt(document.getElementById("tank").style['left']);
    if (top == 0 & left == 38) {
        explose()
    }
}

function moveLeft() {
    let left = document.getElementById("tank").style["left"]
    left = parseInt(left)
    if (left > 0) {
        left = left - 19
        document.getElementById("tank").style["left"] = left + "px"
        document.getElementById("tank").style["transform"] = "rotate(270deg)"
    }
    let top = parseInt(document.getElementById("tank").style['top']);
    if (top == 0 & left == 38) {
        explose()
    }
}

function moveRight() {
    let left = document.getElementById("tank").style["left"]
    left = parseInt(left)
    if (left < 171) {
        left = left + 19
        document.getElementById("tank").style["left"] = left + "px"
        document.getElementById("tank").style["transform"] = "rotate(90deg)"
    }
    let top = parseInt(document.getElementById("tank").style['top']);
    if (top == 0 & left == 38) {
        explose()
    }
}
function explose() {
    // let mineTop = document.getElementById("mine").style['top'];
    // let mineLeft = document.getElementById("mine").style['left'];
    // let tankTop = document.getElementById("tank").style['top'];
    // let tankLeft = document.getElementById("tank").style['left'];
    // if (tankTop == mineTop & tankLeft == mineLeft) {

    // }
    document.getElementById("tank").src = "explosion.png"
}