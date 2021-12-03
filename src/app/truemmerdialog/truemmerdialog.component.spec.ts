import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruemmerdialogComponent } from './truemmerdialog.component';

describe('TruemmerdialogComponent', () => {
  let component: TruemmerdialogComponent;
  let fixture: ComponentFixture<TruemmerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruemmerdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruemmerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
