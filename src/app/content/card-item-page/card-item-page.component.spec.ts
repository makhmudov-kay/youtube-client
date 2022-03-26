import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemPageComponent } from './card-item-page.component';

describe('CardItemPageComponent', () => {
  let component: CardItemPageComponent;
  let fixture: ComponentFixture<CardItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
