import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaestroEstablecimientoComponent } from './maestro-establecimiento.component';

describe('MaestroEstablecimientoComponent', () => {
  let component: MaestroEstablecimientoComponent;
  let fixture: ComponentFixture<MaestroEstablecimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestroEstablecimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroEstablecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
