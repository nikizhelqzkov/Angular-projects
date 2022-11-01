import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  //want route for login and register
  //want route for user info


  {
    path: 'login',
    component: LoginComponentComponent

  },
  {
    path: 'register',
    component: RegisterComponentComponent
  },
  {
    path: 'user-info',
    component: UserInfoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
