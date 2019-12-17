import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes } from '@angular/router';
import { SingleAppareilComponentComponent } from './single-appareil-component/single-appareil-component.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponentComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponentComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: '**', redirectTo: 'not-found' },
  { path: '', component: AuthComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AuthComponent },
    ]),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponentComponent,
    FourOhFourComponent,
    EditAppareilComponentComponent,
    UserListComponent,
    NewUserComponent,
  ],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/