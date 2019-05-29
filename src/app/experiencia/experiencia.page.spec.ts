import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaPage } from './experiencia.page';

describe('ExperienciaPage', () => {
  let component: ExperienciaPage;
  let fixture: ComponentFixture<ExperienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
