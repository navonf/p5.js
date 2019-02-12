var connections = new Array();
var nodes       = new Object();
var count       = 0;


function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255, 200, 255);

    // Rendering the nodes to the canvas.
    for(var key in nodes) {
        nodes[key].connectChildren(nodes);
        nodes[key].showNode();
    }

    // Connect a node's child.
    if(connections.length === 2) {
        // Poll the 2 nodes that were clicked, and reset.
        var n1 = connections.shift();
        var n2 = connections.shift();
        nodes[n1].children.push(n2);
        connections.length = 0;
    }
}

function keyPressed() {
    // Render one node while space bar is pressed.
    if(keyCode == 32) {
        var node = new Node(mouseX, mouseY, count);
        nodes[count] = node;
        count++;
    }
}

function mouseClicked() {
    // Process each node that is clicked.
    for(var key in nodes) {
        var nodeClicked = nodes[key].clicked(mouseX, mouseY);
        // Do not take any undefined keys.
        if(typeof nodeClicked !== "undefined") {
            connections.push(nodeClicked);
        }
    }
}