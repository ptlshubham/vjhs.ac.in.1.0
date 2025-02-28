import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSyllabusComponent } from './new-syllabus.component';

describe('NewSyllabusComponent', () => {
  let component: NewSyllabusComponent;
  let fixture: ComponentFixture<NewSyllabusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSyllabusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
