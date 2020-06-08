import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargasHisCCComponent } from './descargas-his-cc.component';

describe('DescargasHisCCComponent', () => {
  let component: DescargasHisCCComponent;
  let fixture: ComponentFixture<DescargasHisCCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargasHisCCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargasHisCCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
