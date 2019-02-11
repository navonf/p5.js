var nodes = new Object();
var count = 0;
var connect = new Array();

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255, 200, 255);
    // Rendering the nodes to the canvas.
    for(var key in nodes) {
        nodes[key].show();
    }

    if(connect.length === 2) {
        // Poll the 2 nodes that were clicked, and reset.
        var n1 = connect.shift();
        var n2 = connect.shift();
        connect.length = 0;
        conn(n1, n2);
    }
}

function conn(n1, n2) {
    console.log("connecting nodes " + n1 + " -> " + n2);
}
function keyPressed() {
    // Render one node while space bar is pressed.
    if(keyCode == 32) {
        var node = new Node(mouseX, mouseY, ++count);
        nodes[count] = node;
    }
}

function mouseClicked() {
    // Process each node that is clicked.
    for(var key in nodes) {
        var nodeClicked = nodes[key].clicked(mouseX, mouseY);
        // Do not take any undefined keys.
        if(typeof nodeClicked !== "undefined") {
            connect.push(nodeClicked);
        }
    }
}