import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryOptionComponent } from './enquiry-option.component';

describe('EnquiryOptionComponent', () => {
  let component: EnquiryOptionComponent;
  let fixture: ComponentFixture<EnquiryOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
