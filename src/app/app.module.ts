import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgForm } from '@angular/forms';
import { AppComponent } from './app.component';
import { CHijoComponent } from './c-hijo/c-hijo.component';

@NgModule({
  declarations: [AppComponent, CHijoComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
