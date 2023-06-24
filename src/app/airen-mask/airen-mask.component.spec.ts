import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirenMaskComponent } from './airen-mask.component';

describe('AirenMaskComponent', () => {
  let component: AirenMaskComponent;
  let fixture: ComponentFixture<AirenMaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirenMaskComponent]
    });
    fixture = TestBed.createComponent(AirenMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
