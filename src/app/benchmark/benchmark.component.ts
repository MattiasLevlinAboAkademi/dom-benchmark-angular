import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-benchmark',
  templateUrl: './benchmark.component.html',
  styleUrls: ['./benchmark.component.css']
})


export class BenchmarkComponent implements OnInit {
  htmlToAdd = ''
  constructor() { }

  add10000Elements() {
    this.htmlToAdd = [...Array(10000)].map((e, i) =>
      '<div class="">div #' + i + '</div>'
    ).join('')
  }

  remove10000Elements() {
    this.htmlToAdd = ''
  }


  ngOnInit() {
  }

}
