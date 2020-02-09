import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { AppComponent } from './app.component';
import {SidebarModule} from 'primeng/sidebar';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    FormsModule,
    MenubarModule,
    NgSelectModule,
    BrowserAnimationsModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
