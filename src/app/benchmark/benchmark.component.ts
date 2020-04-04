import { ViewChild, ElementRef, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})

export class BenchmarkComponent {
  @ViewChild('benchmarkContainer', {static: false}) benchmarkContainer:ElementRef;
  htmlToAdd = ''
  asdf1 = 0
  asdf2 = 0
  constructor(private renderer: Renderer2) { }

  ngAfterViewChecked() {
    this.asdf2 = performance.now()
    console.log('This shit took ', (this.asdf2 - this.asdf1), ' milliseconds')
  }

  // 1 ADD DIVS
  addDivs() {
    this.asdf1 = performance.now()
    for (var i = 0; i <10000; i+=1) {
      var asd = this.renderer.createElement('div');
      this.renderer.setAttribute(asd, 'id', i.toString());
      var text = this.renderer.createText('asd')
      this.renderer.appendChild(asd, text);
      this.renderer.appendChild(this.benchmarkContainer.nativeElement, asd);
    }
  }

  // 5 REMOVE ALL
  remove() {
    const childElements = this.benchmarkContainer.nativeElement.childNodes;
    console.log(childElements.length)
    for (let child of childElements) {
      this.renderer.removeChild(this.benchmarkContainer.nativeElement, child);
    }
  }
}
