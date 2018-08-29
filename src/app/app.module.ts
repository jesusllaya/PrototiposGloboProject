import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { JuanComponent } from '../app/components/juan/juan.component';
import { appRoutes } from './app.routing';
import { Routes, RouterModule } from '@angular/router';
import { PruebaMenuComponent } from './prueba-menu/prueba-menu.component';
import { NewProjectComponent } from './components/new-project/new-project.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    JuanComponent,
    PruebaMenuComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
