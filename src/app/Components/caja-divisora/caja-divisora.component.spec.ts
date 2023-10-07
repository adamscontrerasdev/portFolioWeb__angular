import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaDivisoraComponent } from './caja-divisora.component';

describe('CajaDivisoraComponent', () => {
  let component: CajaDivisoraComponent;
  let fixture: ComponentFixture<CajaDivisoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CajaDivisoraComponent]
    });
    fixture = TestBed.createComponent(CajaDivisoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
