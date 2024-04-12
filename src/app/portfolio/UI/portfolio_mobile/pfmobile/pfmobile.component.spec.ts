import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfmobileComponent } from './pfmobile.component';

describe('PfmobileComponent', () => {
  let component: PfmobileComponent;
  let fixture: ComponentFixture<PfmobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfmobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfmobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
