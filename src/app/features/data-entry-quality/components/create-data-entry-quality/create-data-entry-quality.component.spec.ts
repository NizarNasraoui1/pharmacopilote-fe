import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataEntryQualityComponent } from './create-data-entry-quality.component';

describe('CreateDataEntryQualityComponent', () => {
  let component: CreateDataEntryQualityComponent;
  let fixture: ComponentFixture<CreateDataEntryQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDataEntryQualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDataEntryQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
