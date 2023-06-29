import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowComponent } from './tow.component';

describe('TowComponent', () => {
  let component: TowComponent;
  let fixture: ComponentFixture<TowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowComponent]
    });
    fixture = TestBed.createComponent(TowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
