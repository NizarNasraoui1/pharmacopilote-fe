import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataEntryQualityComponent } from './search-data-entry-quality.component';

describe('SearchDataEntryQualityComponent', () => {
  let component: SearchDataEntryQualityComponent;
  let fixture: ComponentFixture<SearchDataEntryQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDataEntryQualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDataEntryQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
