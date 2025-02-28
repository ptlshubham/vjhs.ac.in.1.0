import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GsirfComponent } from './gsirf.component';

describe('GsirfComponent', () => {
  let component: GsirfComponent;
  let fixture: ComponentFixture<GsirfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GsirfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GsirfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
