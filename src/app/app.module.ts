import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { FormattersComponent } from './formatters/formatters.component';
import { FormsModule } from '@angular/forms';
import { NavigationComponent } from './navigation/navigation.component';
import { ApisComponent } from './apis/apis.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextDisplayComponent,
    FormattersComponent,
    NavigationComponent,
    ApisComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    RouterModule
  ],
  // services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
