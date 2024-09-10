import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercodeComponent } from './usercode.component';

describe('UsercodeComponent', () => {
  let component: UsercodeComponent;
  let fixture: ComponentFixture<UsercodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsercodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
