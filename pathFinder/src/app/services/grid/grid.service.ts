import { Injectable } from '@angular/core';
import { GridNode } from './node';

export interface mouse {
  clicked: boolean;
  startType: number;
  processing: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GridService {

  start: GridNode;
  end: GridNode;
  grid: GridNode[][];
  cols: number = 67;
  rows: number = 34;
  typeTable: Array<string> = ["basic", "start", "end", "wall", "visiting", "visited", "path", "startPr", "startPa", "endPa"];
  mouse: mouse = {clicked: false, startType: 0, processing: false}

  constructor() { 
    this.reset()
  }

  reset() {
    this.grid = new Array<Array<GridNode>> ();
    for (let x = 0; x < this.rows; x++) {
      let row = new Array<GridNode> ();
      for (let y = 0; y < this.cols; y++) {
        row.push(new GridNode(x, y))
      }
      this.grid.push(row)
    }
    this.setStart(10, 10);
    this.setEnd(30, 60);
  }

  clean() {
    let dico = new Map<number, number> ([[4, 0], [5, 0], [6, 0], [7, 1], [8, 1], [9, 2]])
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {
        this.grid[x][y].path = ""
        if (dico.has(this.grid[x][y].type) === true) {
          if (this.grid[x][y].type === 7 || this.grid[x][y].type === 8) {
            this.grid[x][y] = new GridNode(x, y, dico.get(this.grid[x][y].type))
            this.start = this.grid[x][y]
          } else if (this.grid[x][y].type === 9) {
            this.grid[x][y] = new GridNode(x, y, dico.get(this.grid[x][y].type))
            this.end = this.grid[x][y]
          } else {
            this.grid[x][y] = new GridNode(x, y, dico.get(this.grid[x][y].type))
          }
        }
      }
    }
  }

  setStart(x: number, y: number) {
    if (this.start) {
      this.grid[this.start.x][this.start.y] = new GridNode(this.start.x, this.start.y)
    }
    this.grid[x][y] = new GridNode(x, y, 1);
    this.start = this.grid[x][y]
  }

  setEnd(x: number, y: number) {
    if (this.end) {
      this.grid[this.end.x][this.end.y] = new GridNode(this.end.x, this.end.y)
    }
    this.grid[x][y] = new GridNode(x, y, 2);
    this.end = this.grid[x][y]
  }
  
}
