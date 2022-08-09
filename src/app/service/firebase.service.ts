import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  user$ = authState(this.firebaseAuth);
  dbName = 'aniversariantes';
  constructor(public firebaseAuth: Auth, private db: AngularFireDatabase) { }

  public createData(data: any) {
    this.db.list(this.dbName).push(data);
  }

  public update(key: any, data: any) {
    this.db.list(this.dbName).update(key, data);
  }

  public delete(key: any) {
    this.db.list(this.dbName).remove(key);
  }

  public createUser(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, email, password));
  }

  public login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password));
  }

  public logout(): Observable<any> {
    return from(this.firebaseAuth.signOut());
  }
}
