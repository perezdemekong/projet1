import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOfConsultationComponent } from './place-of-consultation.component';

describe('PlaceOfConsultationComponent', () => {
  let component: PlaceOfConsultationComponent;
  let fixture: ComponentFixture<PlaceOfConsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceOfConsultationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceOfConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
