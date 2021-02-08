import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaInicioComponent } from './plantilla-inicio.component';

describe('PlantillaInicioComponent', () => {
  let component: PlantillaInicioComponent;
  let fixture: ComponentFixture<PlantillaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
