import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaccComponent } from './nacc.component';

describe('NaccComponent', () => {
  let component: NaccComponent;
  let fixture: ComponentFixture<NaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
