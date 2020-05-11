import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePreliminarComponent } from './reporte-preliminar.component';

describe('ReportePreliminarComponent', () => {
  let component: ReportePreliminarComponent;
  let fixture: ComponentFixture<ReportePreliminarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportePreliminarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePreliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
