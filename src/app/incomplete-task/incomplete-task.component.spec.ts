import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncompleteTaskComponent } from './incomplete-task.component';

describe('IncompleteTaskComponent', () => {
  let component: IncompleteTaskComponent;
  let fixture: ComponentFixture<IncompleteTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncompleteTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncompleteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
