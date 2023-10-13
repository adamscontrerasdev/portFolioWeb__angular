import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisorProyectosComponent } from './divisor-proyectos.component';

describe('DivisorProyectosComponent', () => {
  let component: DivisorProyectosComponent;
  let fixture: ComponentFixture<DivisorProyectosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivisorProyectosComponent]
    });
    fixture = TestBed.createComponent(DivisorProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
