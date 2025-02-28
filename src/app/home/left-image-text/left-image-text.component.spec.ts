import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftImageTextComponent } from './left-image-text.component';

describe('LeftImageTextComponent', () => {
  let component: LeftImageTextComponent;
  let fixture: ComponentFixture<LeftImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftImageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
