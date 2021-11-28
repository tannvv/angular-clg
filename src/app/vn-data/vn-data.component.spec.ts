import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnDataComponent } from './vn-data.component';

describe('VnDataComponent', () => {
  let component: VnDataComponent;
  let fixture: ComponentFixture<VnDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VnDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
