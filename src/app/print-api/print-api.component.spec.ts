import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintApiComponent } from './print-api.component';

describe('PrintApiComponent', () => {
  let component: PrintApiComponent;
  let fixture: ComponentFixture<PrintApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
