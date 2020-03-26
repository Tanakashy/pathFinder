import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridnodeComponent } from './gridnode.component';

describe('GridnodeComponent', () => {
  let component: GridnodeComponent;
  let fixture: ComponentFixture<GridnodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridnodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridnodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
