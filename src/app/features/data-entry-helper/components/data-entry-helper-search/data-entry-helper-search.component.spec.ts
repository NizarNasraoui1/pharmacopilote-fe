import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryHelperSearchComponent } from './data-entry-helper-search.component';

describe('DataEntryHelperSearchComponent', () => {
  let component: DataEntryHelperSearchComponent;
  let fixture: ComponentFixture<DataEntryHelperSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEntryHelperSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryHelperSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
