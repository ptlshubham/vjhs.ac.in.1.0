import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcellComponent } from './ipcell.component';

describe('IpcellComponent', () => {
  let component: IpcellComponent;
  let fixture: ComponentFixture<IpcellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpcellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpcellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
