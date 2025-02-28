import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightImageTextComponent } from './right-image-text.component';

describe('RightImageTextComponent', () => {
  let component: RightImageTextComponent;
  let fixture: ComponentFixture<RightImageTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightImageTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightImageTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
