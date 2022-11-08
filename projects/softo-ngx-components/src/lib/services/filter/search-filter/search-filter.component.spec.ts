import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPipe } from './search-filter.component';

describe('FilterPipe', () => {
  let component: FilterPipe;
  let fixture: ComponentFixture<FilterPipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
