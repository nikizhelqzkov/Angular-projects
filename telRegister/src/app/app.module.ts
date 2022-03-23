import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterListComponent } from './register/register-list/register-list.component';
import { HomeComponent } from './home/home.component';
import { RegisterService } from './services/register/register.service';
import { RegisterDetailsComponent } from './register/register-details/register-details.component';
import { NewRegisterComponent } from './register/new-register/new-register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PassportGroupComponent } from './register/new-register/passport-group/passport-group.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterListComponent,
    HomeComponent,
    RegisterDetailsComponent,
    NewRegisterComponent,
    PassportGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
