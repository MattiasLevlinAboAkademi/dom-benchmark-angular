import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BenchmarkComponent } from './benchmark/benchmark.component';
import { BenchmarkContainerComponent } from './benchmark-container/benchmark-container.component';

@NgModule({
  declarations: [
    AppComponent,
    BenchmarkComponent,
    BenchmarkContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
