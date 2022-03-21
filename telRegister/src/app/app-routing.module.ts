import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterListComponent } from './register/register-list/register-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch: 'full'},
  {path:'register', component: RegisterListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
