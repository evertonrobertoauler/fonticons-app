import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';

TNSFontIconService.debug = true;

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    TNSFontIconModule.forRoot({
      fa: './assets/css/font-awesome.css'
      // ion: './assets/css/ionicons.css'
    })
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
