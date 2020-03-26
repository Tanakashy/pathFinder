export class GridNode {

    type: number;
    x: number;
    y: number;
    path: string;

    constructor (x: number, y: number, type: number = 0) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.path = ""
    }
}