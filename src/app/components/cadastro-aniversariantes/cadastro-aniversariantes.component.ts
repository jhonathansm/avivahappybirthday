import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FirebaseService } from './../../service/firebase.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalAniversariantesComponent } from './modal-aniversariantes/modal-aniversariantes.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface PeriodicElement {
  key: string;
  name: string;
  date: number;
  congregacao: string;
  happy?: string;
}

@Component({
  selector: 'app-cadastro-aniversariantes',
  templateUrl: './cadastro-aniversariantes.component.html',
  styleUrls: ['./cadastro-aniversariantes.component.scss']
})
export class CadastroAniversariantesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'date', 'congregacao', 'happy', 'actions'];
  dataSource: any[] = [];

  constructor(
    public dialog: MatDialog,
    private firebaseService: FirebaseService,
    private db: AngularFireDatabase,
    private fs: AngularFirestore
  ) {

   }

  ngOnInit(): void {
    this.list();
  }

  delete(key: any) {
    this.firebaseService.delete(key);
  }

  edit(data: any) {
    const dialogRef = this.dialog.open(ModalAniversariantesComponent, {
      width: '500px',
      data: {...data, type: 'edit' },
    });
    dialogRef.afterClosed().subscribe(result => {
      result.date = new Intl.DateTimeFormat().format(result.date);
      this.firebaseService.update(data.key, result);
    });
  }

  create(data = null): void {
    const dialogRef = this.dialog.open(ModalAniversariantesComponent, {
      width: '500px',
      data: {data, type: 'create' },
    });

    dialogRef.afterClosed().subscribe(result => {
      result.date = new Intl.DateTimeFormat().format(result.date);
      this.firebaseService.createData(result);
    });
  }

  list() {
    this.db.list('aniversariantes').snapshotChanges().subscribe((data) => {
      this.dataSource = [];
      data.forEach((el) => {
        const data = {key: el.payload.key};
        Object.assign(data, el.payload.val())
        console.log(data, 'ts');
        this.dataSource.push(data);
      })
    })
  }
}
