import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdetailsComponent } from './fdetails.component';

describe('FdetailsComponent', () => {
  let component: FdetailsComponent;
  let fixture: ComponentFixture<FdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
