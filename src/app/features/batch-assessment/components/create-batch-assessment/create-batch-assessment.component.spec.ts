import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBatchAssessmentComponent } from './create-batch-assessment.component';

describe('CreateBatchAssessmentComponent', () => {
  let component: CreateBatchAssessmentComponent;
  let fixture: ComponentFixture<CreateBatchAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBatchAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBatchAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
