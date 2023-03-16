import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityUpdateComponent } from './speciality-update.component';

describe('SpecialityUpdateComponent', () => {
  let component: SpecialityUpdateComponent;
  let fixture: ComponentFixture<SpecialityUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialityUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialityUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
