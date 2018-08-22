import { Component } from '@angular/core';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
  selector: 'app-root',
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
  constructor(private service: TNSFontIconService) {}
}
