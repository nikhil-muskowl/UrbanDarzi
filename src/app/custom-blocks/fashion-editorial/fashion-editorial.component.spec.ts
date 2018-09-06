import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionEditorialComponent } from './fashion-editorial.component';

describe('FashionEditorialComponent', () => {
  let component: FashionEditorialComponent;
  let fixture: ComponentFixture<FashionEditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
