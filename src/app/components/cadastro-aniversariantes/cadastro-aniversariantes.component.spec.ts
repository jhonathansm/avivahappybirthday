import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroAniversariantesComponent } from './cadastro-aniversariantes.component';

describe('CadastroAniversariantesComponent', () => {
  let component: CadastroAniversariantesComponent;
  let fixture: ComponentFixture<CadastroAniversariantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroAniversariantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroAniversariantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
