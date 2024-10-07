import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedicalAssessmentComponent } from './search-medical-assessment.component';

describe('SearchMedicalAssessmentComponent', () => {
  let component: SearchMedicalAssessmentComponent;
  let fixture: ComponentFixture<SearchMedicalAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMedicalAssessmentComponent]
    });
    fixture = TestBed.createComponent(SearchMedicalAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
