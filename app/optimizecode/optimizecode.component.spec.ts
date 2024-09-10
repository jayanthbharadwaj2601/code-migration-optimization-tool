import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimizecodeComponent } from './optimizecode.component';

describe('OptimizecodeComponent', () => {
  let component: OptimizecodeComponent;
  let fixture: ComponentFixture<OptimizecodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptimizecodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptimizecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
