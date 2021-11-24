import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes =[
  {path: '', component: LoginComponent},
  {path: 'user', component: UserComponent},
  {path: 'user-list', component: UserListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
