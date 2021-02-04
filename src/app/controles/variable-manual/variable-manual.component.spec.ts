import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableManualComponent } from './variable-manual.component';

describe('VariableManualComponent', () => {
  let component: VariableManualComponent;
  let fixture: ComponentFixture<VariableManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
