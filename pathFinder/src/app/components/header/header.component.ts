import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GridService } from 'src/app/services/grid/grid.service';
import { DfsService } from 'src/app/services/algos/dfs/dfs.service';
import { BfsService } from 'src/app/services/algos/bfs/bfs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  algos = [
    {id: 0, name: 'Depth First Search'},
    {id: 1, name: 'Breath First Search'},
    {id: 2, name: 'A-Star'},
    {id: 3, name: 'Dijktra'},
  ];

  speeds = [
    {id: 100, name: 'slow'},
    {id: 50, name: 'regular'},
    {id: 20, name: 'fast'}
  ]

  formAlgos: FormGroup;
  formSpeed: FormGroup;

  constructor(
    private gridService: GridService,
    private dfsService: DfsService,
    private bfsService: BfsService) {

  }

  ngOnInit() {
    this.formAlgos = new FormGroup({
      algo: new FormControl(this.algos[1]),
    });

    this.formSpeed = new FormGroup({
      speed: new FormControl(this.speeds[2])
    })
  }

  go() {
    this.gridService.mouse.processing = true;
    this.gridService.clean()
    if (this.formAlgos.value.algo.id === 0) {
      this.dfsService.dfs(this.formSpeed.value.speed.id)
    } else if (this.formAlgos.value.algo.id === 1) {
      this.bfsService.bfs(this.formSpeed.value.id)
    }
  }
}
