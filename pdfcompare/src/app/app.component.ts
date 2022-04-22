import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'pdfcompare';
   pdfSrc = "";
   pdfSrc1 = "";
   @ViewChild(PdfViewerComponent, { static: false })
  public pdfComponent!: PdfViewerComponent;
 // pdfComponent: any;
  
  constructor() {
  
  }

  ngOnInit() {
   
  }
  NavigateToSingleSelectPage(){

  }
}
