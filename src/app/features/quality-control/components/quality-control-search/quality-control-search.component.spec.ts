import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityControlSearchComponent } from './quality-control-search.component';

describe('QualityControlSearchComponent', () => {
  let component: QualityControlSearchComponent;
  let fixture: ComponentFixture<QualityControlSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityControlSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityControlSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
