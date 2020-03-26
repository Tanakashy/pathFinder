import { Component } from '@angular/core';
import { GridService } from 'src/app/services/grid/grid.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(private gridService: GridService) { }

  mouseup() {
    this.gridService.mouse.clicked = false
  }

}
