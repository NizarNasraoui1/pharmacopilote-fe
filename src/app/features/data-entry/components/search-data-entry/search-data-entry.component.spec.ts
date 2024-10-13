import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDataEntryComponent } from './search-data-entry.component';

describe('SearchDataEntryComponent', () => {
  let component: SearchDataEntryComponent;
  let fixture: ComponentFixture<SearchDataEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDataEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
