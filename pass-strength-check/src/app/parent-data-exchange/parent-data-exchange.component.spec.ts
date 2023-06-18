import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDataExchangeComponent } from './parent-data-exchange.component';

describe('ParentDataExchangeComponent', () => {
  let component: ParentDataExchangeComponent;
  let fixture: ComponentFixture<ParentDataExchangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentDataExchangeComponent]
    });
    fixture = TestBed.createComponent(ParentDataExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
