import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarColorsComponent } from './bar-colors.component';

describe('BarColorsComponent', () => {
  let component: BarColorsComponent;
  let fixture: ComponentFixture<BarColorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarColorsComponent]
    });
    fixture = TestBed.createComponent(BarColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
