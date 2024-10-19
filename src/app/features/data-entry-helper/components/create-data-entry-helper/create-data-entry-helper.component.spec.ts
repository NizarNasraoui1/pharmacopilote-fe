import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataEntryHelperComponent } from './create-data-entry-helper.component';

describe('CreateDataEntryHelperComponent', () => {
  let component: CreateDataEntryHelperComponent;
  let fixture: ComponentFixture<CreateDataEntryHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateDataEntryHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDataEntryHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
