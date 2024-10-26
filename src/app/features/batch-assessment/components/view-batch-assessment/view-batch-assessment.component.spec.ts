import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBatchAssessmentComponent } from './view-batch-assessment.component';

describe('ViewBatchAssessmentComponent', () => {
  let component: ViewBatchAssessmentComponent;
  let fixture: ComponentFixture<ViewBatchAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBatchAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBatchAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
