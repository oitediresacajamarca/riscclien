import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteCargasComponent } from './reporte-cargas.component';

describe('ReporteCargasComponent', () => {
  let component: ReporteCargasComponent;
  let fixture: ComponentFixture<ReporteCargasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteCargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
