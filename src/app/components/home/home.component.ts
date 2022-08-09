import { FirebaseService } from './../../service/firebase.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userLogged$ = this.firebaseService.user$;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

}
