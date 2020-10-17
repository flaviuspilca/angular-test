import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespondentViewComponent } from './respondent-view.component';

describe('RespondentViewComponent', () => {
  let component: RespondentViewComponent;
  let fixture: ComponentFixture<RespondentViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespondentViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespondentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
