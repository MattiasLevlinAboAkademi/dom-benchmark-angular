import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkContainerComponent } from './benchmark-container.component';

describe('BenchmarkContainerComponent', () => {
  let component: BenchmarkContainerComponent;
  let fixture: ComponentFixture<BenchmarkContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchmarkContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
