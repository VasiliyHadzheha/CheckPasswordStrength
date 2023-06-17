import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { CurrentStatusComponent } from './current-status/current-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFieldComponent,
    CurrentStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
