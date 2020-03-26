import { Component, OnInit } from '@angular/core';
import { GridService } from 'src/app/services/grid/grid.service';
import { GridNode } from 'src/app/services/grid/node';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor(private gridService: GridService) { }

  ngOnInit() {

  }

}
