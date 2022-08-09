import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-aniversariantes',
  templateUrl: './modal-aniversariantes.component.html',
  styleUrls: ['./modal-aniversariantes.component.scss']
})
export class ModalAniversariantesComponent {

  public dataHappy = { name: null, date: null, congregacao: null};
  public title = 'Cadastro';
  button = 'Criar';

  constructor(
    public dialogRef: MatDialogRef<ModalAniversariantesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    Object.assign(this.dataHappy, data);
    this.title = (this.data.type !== 'create') ? 'Atualizar' : 'Cadastro';
    this.button = (this.data.type !== 'create') ? 'Atualizar' : 'Criar';
  }


  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
