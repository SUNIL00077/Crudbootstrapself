import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunilComponent } from './sunil.component';

describe('SunilComponent', () => {
  let component: SunilComponent;
  let fixture: ComponentFixture<SunilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
