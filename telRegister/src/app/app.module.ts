import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterListComponent } from './register/register-list/register-list.component';
import { HomeComponent } from './home/home.component';
import { RegisterService } from './services/register/register.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
