/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SignInBarComponent } from './sign-in-bar.component';

describe('SignInBarComponent', () => {
  let component: SignInBarComponent;
  let fixture: ComponentFixture<SignInBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
