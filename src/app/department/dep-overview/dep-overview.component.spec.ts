import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepOverviewComponent } from './dep-overview.component';

describe('DepOverviewComponent', () => {
  let component: DepOverviewComponent;
  let fixture: ComponentFixture<DepOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
