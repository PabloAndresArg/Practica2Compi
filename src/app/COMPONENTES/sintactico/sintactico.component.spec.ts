import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SintacticoComponent } from './sintactico.component';

describe('SintacticoComponent', () => {
  let component: SintacticoComponent;
  let fixture: ComponentFixture<SintacticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SintacticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SintacticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
