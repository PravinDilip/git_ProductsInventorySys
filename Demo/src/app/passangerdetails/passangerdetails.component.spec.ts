import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassangerdetailsComponent } from './passangerdetails.component';

describe('PassangerdetailsComponent', () => {
  let component: PassangerdetailsComponent;
  let fixture: ComponentFixture<PassangerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassangerdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassangerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
