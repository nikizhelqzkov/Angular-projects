import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import { OrderItemsComponent } from './components/order-items/order-items.component';
import { RegisterComponentComponent } from './components/register-component/register-component.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  //want route for login and register
  //want route for user info

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login/:lastUrl',
    component: LoginComponentComponent,
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  },
  {
    path: 'register',
    component: RegisterComponentComponent,
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
  },
  {
    path: 'orders',
    component: OrderHeaderComponent
  },
  {
    path: 'order-items/:id',
    component: OrderItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
