import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './product/list.component';
import { ButtonCellRendererComponent } from './shared/button/button-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonCellRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    HttpClientModule , 
    AgGridModule.withComponents([ButtonCellRendererComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
