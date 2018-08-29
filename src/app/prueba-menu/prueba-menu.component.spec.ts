import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaMenuComponent } from './prueba-menu.component';

describe('PruebaMenuComponent', () => {
  let component: PruebaMenuComponent;
  let fixture: ComponentFixture<PruebaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
