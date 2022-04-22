import { Component, OnInit, SkipSelf, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
const pdfjs = import("pdfjs-dist/es5/build/pdf");
@Component({
  selector: 'app-singleselect',
  templateUrl: './singleselect.component.html',
  styleUrls: ['./singleselect.component.css']
})
export class SingleselectComponent implements OnInit {
   reader:any;
  pdfSrc = "";
  pdfSrc1 = "";
  @ViewChild(PdfViewerComponent, { static: false })
  public pdfComponent!: PdfViewerComponent;
  // pdfComponent: any;


  constructor() {

  }


  ngOnInit() {

   
    // var LineNavigator = require("line-navigator");
    // var navigator = new LineNavigator(__dirname + '/index.js');

    // console.log("Reading all file by chunks:");

    // var indexToStartWith = 0;
    // navigator.readSomeLines(indexToStartWith, function linesReadHandler(err: any, index: number, lines: string | any[], isEof: any, progress: any) {
    //   console.log(`   Chunk from line ${index} with ${lines.length} lines (${progress}%)`);

    //   // Error happened
    //   if (err) throw err;

    //   // Reading lines
    //   for (var i = 0; i < lines.length; i++) {
    //     var lineIndex = index + i;
    //     var line = lines[i];

    //     // Do something with line
    //   }

    //   // progress is a position of the last read line as % from whole file length

    //   // End of file
    //   if (isEof) return;

    //   // Reading next chunk, adding number of lines read to first line in current chunk
    //   navigator.readSomeLines(index + lines.length, linesReadHandler);
    // });

    // try
//     function getPageText(pageNum: any, PDFDocumentInstance: { pdfInfo?: { numPages: 0; }; getPage?: any; }) {
//       // Return a Promise that is solved once the text of the page is retrieven
//       return new Promise(function (resolve, reject) {
//         PDFDocumentInstance.getPage(pageNum).then(function (pdfPage: { getTextContent: () => Promise<{ items: any; }>; }) {
//           // The main trick to obtain the text of the PDF page, use the getTextContent method
//           pdfPage.getTextContent().then(function (textContent: { items: any; }) {
//             var textItems = textContent.items;
//             var finalString = "";
    
//             // Concatenate the string of the item to the final string
//             for (var i = 0; i < textItems.length; i++) {
//               var item = textItems[i];
    
//               finalString += item.str + " ";
//             }
    
//             // Solve promise with the text retrieven from the page
//             resolve(finalString);
//           });
//         });
//       });
//     }




// const pdfjsLib = require("//mozilla.github.io/pdf.js");
// pdfjsLib.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
// // Loading file from file system into typed array
// const pdfPath = process.argv[2] || "../../web/compressed.tracemonkey-pldi-09.pdf";

// // Will be using promises to load document, pages and misc data instead of
// // callback.
// const loadingTask = pdfjsLib.getDocument(pdfPath);
// //====
//      // The workerSrc property shall be specified.
//      pdfjsLib.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
//      loadingTask.then(function (PDFDocumentInstance: { pdfInfo: { numPages: any; }; }) {

//       var totalPages = PDFDocumentInstance.pdfInfo.numPages;
//       var pageNumber = 1;

//       // Extract the text
//       getPageText(pageNumber, PDFDocumentInstance).then(function (textPage: any) {
//         // Show the text of the page in the console
//         console.log(textPage);
//       });

//     }, function (reason: any) {
//       // PDF loading error
//       console.error(reason);
//     });
    
    //end

  }
//   async  getContent(src: any) {
//   const doc = await (await pdfjs).getDocument(src).promise
//   const page = await doc.getPage(1)
//   return await page.getTextContent()
// }

// async  getItems(src:any) {
//   console.log("get item function called" );
//   const content = await this.getContent(src)
//   const items = content.items.map((item: any) => {
//     console.log("check" + item.str);
//   })
//   return items
// }
  async onFileSelected1() {
  var $img: any = document.querySelector('#file1');

  if (typeof (FileReader) !== 'undefined') {
     this.reader = new FileReader();

    this.reader.onload = (e: any) => {
    
      this.pdfSrc = e.target.result;
     
      // var pathway =e.target.$img.files[0].webkitRelativePath;
      // console.log("teststydvgscvds" + pathway);
    };
   
     this.reader.readAsArrayBuffer($img.files[0]);
    
    //  reader.onloadend = async (e: any) => {
    //   // this.pdfSrc = e.target.result;
    //   // this.getItems("src/assets/sample1.pdf");
    
    // };
    // var path = require('path')
    // var filePath = path.join(__dirname, 'src/assets/sample1.pdf')
 
    // var pdfToTextCommand = '/opt/bin/pdftotext'
    // var extract = require('pdf-text-extract')
    // var options = {
    //   cwd: "./"
    // }
    // extract(filePath, options, pdfToTextCommand, function (err: any, pages: any) {
    //   if (err) {
    //     console.dir(err)
    //     return
    //   }
    //   console.dir('extracted pages', pages)
    // })
  }

}

onFileSelected2() {
  let $img: any = document.querySelector('#file2');

  if (typeof (FileReader) !== 'undefined') {
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.pdfSrc1 = e.target.result;
     // console.log("my path see", e.target.value);
    };
   //  var text =reader.readAsText($img.files[0]);
    //  console.log("my text see", e.target.value);
    reader.readAsArrayBuffer($img.files[0]);

  }

}
  async pageRendered1(e: CustomEvent) {
  console.log('(page-rendered)', "dgd");
  // var blob = new window.Blob([this.pdfSrc], { type: 'application/pdf' });
  // var txtd=  await this.reader.readAsDataURL(blob);
  // console.log('dsygfdhfhjfhjtjh'+ txtd);
  // this.getItems("pdfcompare/src/sample.pdf");
  // this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
}
pageRendered2(e: CustomEvent) {
  console.log('(page-rendered)', e);
  // var om=  await reader.readAsText($img.files[0]);
  // console.log("omnamhshiway" + om);
  // this.pdfComponent.pdfViewer.currentScaleValue = 'page-fit';
}

}



