import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasCardComponent } from './adidas-card.component';

describe('AdidasCardComponent', () => {
  let component: AdidasCardComponent;
  let fixture: ComponentFixture<AdidasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdidasCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdidasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
