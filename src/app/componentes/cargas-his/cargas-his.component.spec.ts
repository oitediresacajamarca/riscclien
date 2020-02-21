import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargasHisComponent } from './cargas-his.component';

describe('CargasHisComponent', () => {
  let component: CargasHisComponent;
  let fixture: ComponentFixture<CargasHisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargasHisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargasHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
