class Node {
    constructor(x, y, key) {
        this.x        = x;
        this.y        = y;
        this.r        = 30;
        this.key      = key;
        this.children = [];
        this.visited  = false;
    }

    showNode() {
        ellipse(this.x, this.y, this.r);
        text(this.key, this.x- (this.r/7), this.y + (this.r/8));
    }

    connectChildren(nodes) {
        this.children.forEach((key) => {
            line(this.x, this.y, nodes[key].x, nodes[key].y);
        });
    }

    clicked(dx, dy) {
        let d = dist(dx, dy, this.x, this.y);
        if(d < this.r) {
            // We return the key for the node that is clicked.
            const k = this.key;
            return k;
        }

    }

}