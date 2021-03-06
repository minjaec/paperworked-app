import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { EditorService } from 'src/app/services/editor.service';
import 'fabric';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
declare const fabric: any;

@Component({
  selector: 'app-document-display-area',
  templateUrl: './document-display-area.component.html',
  styleUrls: ['./document-display-area.component.css']
})
export class DocumentDisplayAreaComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    if(!this.pdfSrc) {
      this.pdfRef.getDownloadURL().then( url => {
        console.log("downloading pdf", url);
        this.pdfSrc = url;
      })
    }

    if(!this.fabricCanvas) {
      console.log("init fabric canvas");
      var height = this.el.nativeElement.offsetHeight;
      var width = this.el.nativeElement.offsetWidth;
      // console.log(width, height);
      this.fabricCanvas = new fabric.Canvas('canvas');
      this.fabricCanvas.setWidth(width);
      this.fabricCanvas.setHeight(height);
    }
    this.addCanvasListeners();
    // console.log(this.fabricCanvas);
    this.fabricCanvas.renderAll();
  }

  addCanvasListeners() {
    var rect, isDown, origX, origY;

    this.fabricCanvas.on('mouse:down', function (o) {
      isDown = true;
      var pointer = this.getPointer(o.e);
      origX = pointer.x;
      origY = pointer.y;
      
      rect = new fabric.Rect({
        left: origX,
        top: origY,
        originX: 'left',
        originY: 'top',
        width: pointer.x - origX,
        height: pointer.y - origY,
        angle: 0,
        fill: 'rgba(255,0,0,0.5)',
      });

      this.add(rect);
    });

    this.fabricCanvas.on('mouse:move', function (o) {
      if (!isDown) return;
      var pointer = this.getPointer(o.e);

      if (origX > pointer.x) {
        rect.set({ left: Math.abs(pointer.x) });
      }
      if (origY > pointer.y) {
        rect.set({ top: Math.abs(pointer.y) });
      }

      rect.set({ width: Math.abs(origX - pointer.x) });
      rect.set({ height: Math.abs(origY - pointer.y) });

      this.renderAll();
    });

    this.fabricCanvas.on('mouse:up', o => {
      isDown = false;
    });

    this.fabricCanvas.on("object:added", o => {
      this.addInstructionItem(o);
    })
  }
  addInstructionItem(o: any) {
    console.log(o);
    this.editor.addInstruction( {
      onPage: this.currentPage,
      fabricObject: o.target,
      name: "new item"
    } );
    //add listener to object using o.target.on(eventName, handler)
    //emit on hover so that the correct item on the list can be highlighted
  }

  @Output() onAddItem:EventEmitter<any> = new EventEmitter();

  currentPage: number;
  renderData: any[] = [];
  fabricCanvas: any;
  pdfLoc:any = {
    originX: 'left',
    originY: 'top'
  };

  // ngAfterViewChecked(): void {
  //   console.log("ngAfterViewChecked");
  // }

  pageRendered(e) {
    if (e.pageNumber == this.currentPage) {
      const pdfCanvas = e.source.canvas;
      var img = new Image();
      img.src = pdfCanvas.toDataURL("image/png");
      const fabImg = new fabric.Image(img, { width: pdfCanvas.width, height: pdfCanvas.height });
      fabImg.scaleToHeight(this.el.nativeElement.offsetHeight);
      this.renderData.push(fabImg);
      this.fabricCanvas.setBackgroundImage(fabImg, this.fabricCanvas.renderAll.bind(this.fabricCanvas), this.pdfLoc);
    } else if (e.pageNumber == this.currentPage + 1) {
      const pdfCanvas = e.source.canvas;
      var img = new Image();
      img.src = pdfCanvas.toDataURL("image/png");
      const fabImg = new fabric.Image(img, { width: pdfCanvas.width, height: pdfCanvas.height });
      fabImg.scaleToHeight(this.el.nativeElement.offsetHeight);
      this.renderData.push(fabImg);
    }
    //console.log(this.pdfViewer.pdfViewer.container.firstElementChild.firstElementChild.firstElementChild.firstElementChild);
  }

  nextPage() {
    this.currentPage += 1;
    this.fabricCanvas.setBackgroundImage(this.renderData[this.currentPage - 1], this.fabricCanvas.renderAll.bind(this.fabricCanvas), this.pdfLoc);
  }

  prevPage() {
    this.currentPage -= 1;
    this.fabricCanvas.setBackgroundImage(this.renderData[this.currentPage - 1], this.fabricCanvas.renderAll.bind(this.fabricCanvas), this.pdfLoc);
  }

  //@ViewChild(PdfViewerComponent) pdfView: PdfViewerComponent;
  @ViewChild('canvas') fabricCanvasElement: HTMLCanvasElement;

  pdfSrc;
  pdfRef;

  constructor(private firebase: FirebaseService,
    private editor: EditorService,
    private el: ElementRef) {
    }

  ngOnInit() {
    this.pdfRef = this.firebase.storageRef.child(this.editor.currentProjectData.fullFilePath);
    // var height = this.el.nativeElement.offsetHeight;
    // var width = this.el.nativeElement.offsetWidth;
    // console.log(width, height);
  }

}
