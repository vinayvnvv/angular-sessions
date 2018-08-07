import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentItemsComponent } from './sent-items.component';

describe('SentItemsComponent', () => {
  let component: SentItemsComponent;
  let fixture: ComponentFixture<SentItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
