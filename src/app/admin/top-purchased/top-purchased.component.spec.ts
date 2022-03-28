import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPurchasedComponent } from './top-purchased.component';

describe('TopPurchasedComponent', () => {
  let component: TopPurchasedComponent;
  let fixture: ComponentFixture<TopPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPurchasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
