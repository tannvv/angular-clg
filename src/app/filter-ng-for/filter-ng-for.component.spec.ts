import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNgForComponent } from './filter-ng-for.component';

describe('FilterNgForComponent', () => {
  let component: FilterNgForComponent;
  let fixture: ComponentFixture<FilterNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
