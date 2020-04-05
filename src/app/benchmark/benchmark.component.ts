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
    console.log('This took ', (this.asdf2 - this.asdf1), ' milliseconds')
  }

  // 1 ADD DIVS
  addDivs() {
    this.asdf1 = performance.now()
    for (var i = 0; i <10000; i+=1) {
      var asd = this.renderer.createElement('div');
      this.renderer.setAttribute(asd, 'id', i.toString());
      var text = this.renderer.createText('Div' + i.toString())
      this.renderer.appendChild(asd, text);
      this.renderer.appendChild(this.benchmarkContainer.nativeElement, asd);
    }
  }

  // 2 EDIT ONE 
  editOne() {
    this.asdf1 = performance.now()
    // this.benchmarkContainer.nativeElement.innerHTML = '';
  }

  // 3 EDIT ALL
  editAll() {
    this.asdf1 = performance.now()
    // this.benchmarkContainer.nativeElement.innerHTML = '';
  }

  // 4 REMOVE ONE
  removeOne() {
    this.asdf1 = performance.now()
    let asd = this.benchmarkContainer.nativeElement.children.length - 1
    document.getElementById(asd.toString()).innerHTML = ''
  }

  // 5 REMOVE ALL
  removeAll() {
    this.asdf1 = performance.now()
    this.benchmarkContainer.nativeElement.innerHTML = '';
  }
}
