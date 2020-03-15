import { ViewChild, ElementRef, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})


export class BenchmarkComponent {
  @ViewChild('benchmarkContainer', {static: false}) benchmarkContainer:ElementRef;
  htmlToAdd = ''
  constructor(private renderer: Renderer2) { }

  addEmptyDivs() {
    for (var i = 0; i <10000; i+=1) {
      var asd = this.renderer.createElement('div');
      this.renderer.setAttribute(asd, 'id', i);
      this.renderer.appendChild(this.benchmarkContainer.nativeElement, asd);
    }
  }

  addDivs() {
    for (var i = 0; i <10000; i+=1) {
      var asd = this.renderer.createElement('div');
      this.renderer.setAttribute(asd, 'id', i);
      var text = this.renderer.createText('asd')
      this.renderer.appendChild(asd, text)
      this.renderer.appendChild(this.benchmarkContainer.nativeElement, asd);
    }
  }

  addEmptySvgs() {
    for (var i = 0; i <10000; i+=1) {
      var asd = this.renderer.createElement('svg');
      this.renderer.setAttribute(asd, 'id', i);
      this.renderer.appendChild(this.benchmarkContainer.nativeElement, asd);
    }
  }

  addSvgs() {
    for (var i = 0; i <10000; i+=1) {
      var asd = this.renderer.createElement('svg');
      this.renderer.setAttribute(asd, 'id', i);
      var text = this.renderer.createText('asd')
      this.renderer.appendChild(asd, text)
      this.renderer.appendChild(this.benchmarkContainer.nativeElement, asd);
    }
  }

  remove() {
    const childElements = this.benchmarkContainer.nativeElement.childNodes;
    console.log(childElements.length)
    for (let child of childElements) {
      this.renderer.removeChild(this.benchmarkContainer.nativeElement, child);
    }
  }
}
