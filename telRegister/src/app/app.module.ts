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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterListComponent,
    HomeComponent,
    RegisterDetailsComponent,
    NewRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
