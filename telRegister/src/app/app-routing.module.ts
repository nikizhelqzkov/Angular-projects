import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRegisterComponent } from './register/new-register/new-register.component';
import { RegisterDetailsComponent } from './register/register-details/register-details.component';
import { RegisterListComponent } from './register/register-list/register-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'register', component: RegisterListComponent},
  {path:'register/add', component: NewRegisterComponent},
  {path:'register/details/:id', component: RegisterDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
