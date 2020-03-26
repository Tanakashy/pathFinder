import { Injectable } from '@angular/core';
import { GridService } from 'src/app/services/grid/grid.service';
import { GridNode } from 'src/app/services/grid/node';

@Injectable({
  providedIn: 'root'
})
export class BfsService {

  constructor(private gridService: GridService) { }

  async bfs(ms) {
    this.gridService.grid[this.gridService.start.x][this.gridService.start.y] = new GridNode(this.gridService.start.x, this.gridService.start.y, 7)
    this.gridService.start = this.gridService.grid[this.gridService.start.x][this.gridService.start.y]
    let s = this.gridService.start
    let g = this.gridService.grid
    let stack = new Array<GridNode>(g[s.x][s.y + 1], g[s.x + 1][s.y], g[s.x - 1][s.y], g[s.x][s.y - 1]);
    while (stack.length > 0) {
      let node = stack.shift()
      if (node.type === 2) {
        break;
      }
      if (node.type === 0) {
        g[node.x][node.y] = new GridNode(this.gridService.start.x, this.gridService.start.y, 5)
        if (g[node.x + 1][node.y].type === 2 || g[node.x + 1][node.y].type === 0) {
          stack.push(g[node.x + 1][node.y])
        }
        if (g[node.x - 1][node.y].type === 2 || g[node.x - 1][node.y].type === 0) {
          stack.push(g[node.x - 1][node.y])
        }
        if (g[node.x][node.y + 1].type === 2 || g[node.x][node.y + 1].type === 0) {
          stack.push(g[node.x][node.y + 1])
        }
        if (g[node.x][node.y - 1].type === 2 || g[node.x][node.y - 1].type === 0) {
          stack.push(g[node.x][node.y - 1])
        }   
        //await new Promise(resolve => {setTimeout(() => {resolve(1)}, ms);});
      }
    }
    this.gridService.mouse.processing = false;
  }
}
