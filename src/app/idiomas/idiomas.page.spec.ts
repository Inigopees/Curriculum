import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdiomasPage } from './idiomas.page';

describe('IdiomasPage', () => {
  let component: IdiomasPage;
  let fixture: ComponentFixture<IdiomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiomasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdiomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
