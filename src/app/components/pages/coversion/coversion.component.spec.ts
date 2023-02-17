import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversionComponent } from './coversion.component';

describe('CoversionComponent', () => {
  let component: CoversionComponent;
  let fixture: ComponentFixture<CoversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoversionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
