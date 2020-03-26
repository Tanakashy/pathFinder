import { Injectable } from '@angular/core';
import { GridService } from 'src/app/services/grid/grid.service'
import { GridNode } from 'src/app/services/grid/node';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class DfsService {

  ms: number;

  constructor(private gridService: GridService) { }

  async rec(x: number, y: number) {
    return new Promise(resolve => {
      setTimeout(async() => {
        if (x < 0 || x >= this.gridService.rows || y < 0 || y >= this.gridService.cols) {
          resolve(-1);
        } else if (this.gridService.grid[x][y].type === 0) {
          this.gridService.grid[x][y] = new GridNode(x, y, 4)
          if ((<number>await this.rec(x + 1, y)) === 1 || (<number>await this.rec(x, y + 1)) === 1 || (<number>await this.rec(x - 1, y)) === 1 || (<number>await this.rec(x, y - 1)) === 1) {
            this.gridService.grid[x][y] = new GridNode(x, y, 6)
            resolve(1)
          } else {
            this.gridService.grid[x][y] = new GridNode(x, y, 5)
            resolve(-1) 
          }
        } else if (this.gridService.grid[x][y].type === 2) {
          this.gridService.grid[x][y] = new GridNode(x, y, 9)
          this.gridService.end = this.gridService.grid[x][y]
          resolve(1)
        } else if (this.gridService.grid[x][y].type === 7) {
          if ((<number>await this.rec(x + 1, y)) === 1 || (<number>await this.rec(x, y + 1)) === 1 || (<number>await this.rec(x - 1, y)) === 1 || (<number>await this.rec(x, y - 1) === 1)) {
            this.gridService.grid[x][y] = new GridNode(x, y, 8)
            this.gridService.start = this.gridService.grid[x][y]
            resolve(1)
          } else {
            resolve(-1)
          }
        } else {
          resolve(-1);
        }
      }, this.ms);
    });
  }

  async dfs(ms) {
    this.ms = ms
    this.gridService.grid[this.gridService.start.x][this.gridService.start.y] = new GridNode(this.gridService.start.x, this.gridService.start.y, 7)
    this.gridService.start = this.gridService.grid[this.gridService.start.x][this.gridService.start.y]
    await this.rec(this.gridService.start.x, this.gridService.start.y)
    this.gridService.mouse.processing = false;
  }
}
