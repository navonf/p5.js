class Node {
    constructor(x, y, key) {
        this.x = x;
        this.y = y;
        this.r = 20;
        this.key = key;
    }

    show() {
        ellipse(this.x, this.y, this.r);
    }

    clicked(dx, dy) {
        let d = dist(dx, dy, this.x, this.y);
        if(d < this.r)
            console.log("you clicked node: " + this.key);
    }

}