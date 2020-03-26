import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GridnodeComponent } from './components/gridnode/gridnode.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LayoutComponent,
    GridnodeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,        
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
