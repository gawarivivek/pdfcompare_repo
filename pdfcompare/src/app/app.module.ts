import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { SingleselectComponent } from './singleselect/singleselect.component';
import { PdfvivevkComponent } from './pdfvivevk/pdfvivevk.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MultiselectComponent,
    SingleselectComponent,
    PdfvivevkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

