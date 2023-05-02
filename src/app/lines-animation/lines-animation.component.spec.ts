import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesAnimationComponent } from './lines-animation.component';

describe('LinesAnimationComponent', () => {
  let component: LinesAnimationComponent;
  let fixture: ComponentFixture<LinesAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinesAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
