import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MdcToolbarComponent } from './mdc-toolbar/mdc-toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { GrProyectListComponent } from './gr-proyect-list/gr-proyect-list.component';

import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        MdcToolbarComponent,
        NavbarComponent,
        MainComponent,
        ContentComponent,
        GrProyectListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
