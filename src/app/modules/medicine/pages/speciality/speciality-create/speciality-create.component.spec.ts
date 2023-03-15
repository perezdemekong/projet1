import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityCreateComponent } from './speciality-create.component';

describe('SpecialityCreateComponent', () => {
  let component: SpecialityCreateComponent;
  let fixture: ComponentFixture<SpecialityCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialityCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialityCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
