import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicalAssessmentComponent } from './create-medical-assessment.component';

describe('CreateMedicalAssessmentComponent', () => {
  let component: CreateMedicalAssessmentComponent;
  let fixture: ComponentFixture<CreateMedicalAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMedicalAssessmentComponent]
    });
    fixture = TestBed.createComponent(CreateMedicalAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
