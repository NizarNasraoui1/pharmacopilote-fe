import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataEntryComponent } from './create-data-entry.component';

describe('CreateDataEntryComponent', () => {
  let component: CreateDataEntryComponent;
  let fixture: ComponentFixture<CreateDataEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDataEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
