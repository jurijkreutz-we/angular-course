import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisthatComponent } from './thisthat.component';

describe('ThisthatComponent', () => {
  let component: ThisthatComponent;
  let fixture: ComponentFixture<ThisthatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThisthatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThisthatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
