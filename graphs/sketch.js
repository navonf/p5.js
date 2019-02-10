var nodes = new Object();
var count = 0;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255, 200, 255);
    // Rendering the nodes to the canvas.
    for(var key in nodes) {
        nodes[key].show();
    }
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
        nodes[key].clicked(mouseX, mouseY);
    }
}