import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresoComponent } from './regreso.component';

describe('RegresoComponent', () => {
  let component: RegresoComponent;
  let fixture: ComponentFixture<RegresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
