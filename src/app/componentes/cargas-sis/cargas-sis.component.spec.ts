import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargasSisComponent } from './cargas-sis.component';

describe('CargasSisComponent', () => {
  let component: CargasSisComponent;
  let fixture: ComponentFixture<CargasSisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargasSisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargasSisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
