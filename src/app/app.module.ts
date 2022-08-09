import { FirebaseService } from './service/firebase.service';
import { InjectionToken, NgModule, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.prod';
import { LoginModule } from './components/login/login.module';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { HomeModule } from './components/home/home.module';
import { CadastroAniversarianteModule } from './components/cadastro-aniversariantes/cadastro-aniversariante.module';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

const inital = initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    provideFirebaseApp(() => inital),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    MatToolbarModule,
    LoginModule,
    HomeModule,
    MatButtonModule,
    MatIconModule,
    CadastroAniversarianteModule,
    AngularFireDatabaseModule
  ],
  providers: [
    FirebaseService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
