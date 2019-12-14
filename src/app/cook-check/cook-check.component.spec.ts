import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookCheckComponent } from './cook-check.component';

describe('CookCheckComponent', () => {
  let component: CookCheckComponent;
  let fixture: ComponentFixture<CookCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
