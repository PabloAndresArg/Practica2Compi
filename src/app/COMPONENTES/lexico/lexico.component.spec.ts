import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LexicoComponent } from './lexico.component';

describe('LexicoComponent', () => {
  let component: LexicoComponent;
  let fixture: ComponentFixture<LexicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LexicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LexicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
