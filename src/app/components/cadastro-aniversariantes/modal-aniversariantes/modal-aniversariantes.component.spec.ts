import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAniversariantesComponent } from './modal-aniversariantes.component';

describe('ModalAniversariantesComponent', () => {
  let component: ModalAniversariantesComponent;
  let fixture: ComponentFixture<ModalAniversariantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAniversariantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAniversariantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
