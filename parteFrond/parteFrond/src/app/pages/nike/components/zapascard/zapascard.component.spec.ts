import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapascardComponent } from './zapascard.component';

describe('ZapascardComponent', () => {
  let component: ZapascardComponent;
  let fixture: ComponentFixture<ZapascardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZapascardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZapascardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
