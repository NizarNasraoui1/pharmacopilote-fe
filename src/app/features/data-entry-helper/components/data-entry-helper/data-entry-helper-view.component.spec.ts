import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryHelperComponent } from './data-entry-helper-view.component';

describe('DataEntryHelperComponent', () => {
  let component: DataEntryHelperComponent;
  let fixture: ComponentFixture<DataEntryHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEntryHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
