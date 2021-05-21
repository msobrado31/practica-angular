import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonsComponent } from '../persons/persons.component';
import { PersonComponent } from '../persons/person/person.component';






@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
            
  bootstrap: [AppComponent]
})
export class AppModule { }
