import { Component, OnInit, Input } from '@angular/core';
import { GridNode } from 'src/app/services/grid/node';
import { GridService } from 'src/app/services/grid/grid.service';

@Component({
  selector: 'app-gridnode',
  templateUrl: './gridnode.component.html',
  styleUrls: ['./gridnode.component.scss']
})
export class GridnodeComponent implements OnInit {

  @Input("node")
  public node: GridNode

  type: string = 'node basic'

  constructor(private gridService: GridService) { }

  ngOnInit() {
    this.type = 'node ' + this.gridService.typeTable[this.node.type]
  }

  mouseover() {
    if (!this.gridService.mouse.processing) {
      if (this.gridService.mouse.clicked === true) {
        if (this.gridService.mouse.startType === 0 || this.gridService.mouse.startType === 3) {
          if (this.node.type == 0) {
            this.gridService.grid[this.node.x][this.node.y] = new GridNode(this.node.x, this.node.y, 3)
          }
        } else if (this.gridService.mouse.startType === 1) {
          this.gridService.setStart(this.node.x, this.node.y)
        } else if (this.gridService.mouse.startType === 2) {
          this.gridService.setEnd(this.node.x, this.node.y)
        }
      }
    }
  }

  mousedown() {
    if (!this.gridService.mouse.processing) {
      this.gridService.mouse.clicked = true;
      this.gridService.mouse.startType = this.node.type;
      if (this.node.type == 0) {
        this.gridService.grid[this.node.x][this.node.y] = new GridNode(this.node.x, this.node.y, 3)
      }
    }
  }
}
