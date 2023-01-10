import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CHijoComponent } from './c-hijo.component';

describe('CHijoComponent', () => {
  let component: CHijoComponent;
  let fixture: ComponentFixture<CHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CHijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
