import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { CadastroAniversariantesComponent } from "./cadastro-aniversariantes.component";
import { ModalAniversariantesComponent } from './modal-aniversariantes/modal-aniversariantes.component';
import { FormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  declarations: [
    CadastroAniversariantesComponent,
    ModalAniversariantesComponent
  ],
  exports: [ CadastroAniversariantesComponent ],
  imports: [
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CadastroAniversarianteModule {}
