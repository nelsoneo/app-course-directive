import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { MarcaTextDirective } from '../app/shared/directives/marca-text.directive';
import { PeopleService } from './shared/services/people.service';
import { ListApiComponent } from './shared/components/list-api/list-api.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaTextDirective,
    ListApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
