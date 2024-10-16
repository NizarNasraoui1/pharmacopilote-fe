import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBatchAssessmentComponent } from './search-batch-assessment.component';

describe('SearchBatchAssessmentComponent', () => {
  let component: SearchBatchAssessmentComponent;
  let fixture: ComponentFixture<SearchBatchAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBatchAssessmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBatchAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
