import { Router } from '@angular/router';
import { FirebaseService } from './service/firebase.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

export interface Page {
  label: string;
  value: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.firebaseService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }

  ngOnDestroy(): void {
    this.logout();
  }
}
